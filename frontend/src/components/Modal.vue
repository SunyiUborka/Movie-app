<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-slate-800 rounded-lg p-6 max-w-sm w-full">
          <div v-if="seat.available" >
            <h2 class="text-xl font-bold mb-1">Hely foglalás</h2>
            <div>
              <p class="font-bold">Az alábbi helyet szeretnéd foglalni:</p>
              <div>
                <p>Oldal: {{ seat.side == "LEFT" ? "Bal":"Jobb" }}</p>
                <p>Sor: {{ seat.row }}</p>
                <p>Szék: {{ seat.seatNo }}</p>
                <form @submit.prevent="postReservation" class="py-2">
                  <input class="rounded-md text-black" required type="email" v-model="userData.userEmail" placeholder="Email cím">
                  <div class="flex justify-between pt-4">
                    <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Bezárás
                    </button>
                    <button type="submit" :disabled="loading" class="text-white px-4 py-2 rounded hover:bg-green-600" :style="{ backgroundColor: loading ? 'rgba(34, 197, 94, 0.4)' : '#22c55e' }">
                      Foglalás
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div v-if="!seat.available" >
            <h2 class="text-xl font-bold mb-1">Foglalás nem lehetséges</h2>
            <p class="mb-4">A hely már foglalt vagy nem elérhető</p>
            <div class="flex justify-end">
              <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Bezárás
              </button>
          </div>
          </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  seat:{
    type: Object,
    required: true
  },
  venueId:{
    required: true
  },
  screeningId:{
    required: true
  }
})
const { row, side, seatNo } = props.seat
const userData = reactive({
  userEmail: '',
  partnerId: 'Simple',
  seat: `${row}${side}${seatNo}`
})

const loading = ref(false);

const postReservation = async () => {
  loading.value = true;

  try {
    const res = await axios.post(`/api/v1/venue/${props.venueId}/screening/${props.screeningId}/reserve`, userData);
    
    if(res.status == 200 && res.data == 0) alert("Sikeres helyfoglalás")
    if(res.status >= 400 && res.status < 500){
      if(res.data == 200) alert("Hibás beviteli adat")
      if(res.data == 300) alert("Helyszín vagy Vetítés nem található")
      if(res.data == 301) alert("Szék nem található")
      if(res.data == 302) alert("Szék nem elérhető")
      if(res.data == 400) alert("Foglalás nem lehetséges jelenleg")
    }
    if(res.status == 500 && res.data == 500) alert("Központi hiba")
    emit('close')
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
    userData.userEmail = ''
  }
}

const emit = defineEmits(['close']);
const closeModal= ()=> {
  userData.userEmail = ''
  emit('close');
}
</script>
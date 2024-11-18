<template>
    <div :class="`grid gap-8`" :style="`grid-template-columns: repeat(${row}, minmax(0, 1fr));`">
        <SeatItem v-for="seat in seats" :seat="seat" :screening-id="props.screeningId" :venue-id="props.venueId"/>
    </div>
</template>
<script setup>
    import { useVenueStore } from '@/stores/venueStore';
    import { onMounted, ref, computed } from 'vue';
    import SeatItem from './SeatItem.vue';

    const seats = ref(null)
    const seatInRow = ref(null)
    const reserved = ref(null)
    const venueStore = useVenueStore()
    const props = defineProps({
        venueId:{
            required: true
        },
        screeningId:{
            required: true
        }
    })

    onMounted(async ()=>{
        await venueStore.fetchSeats(props.venueId)
        await venueStore.fetchScreenings(props.venueId)
        reserved.value = await venueStore.getScreening(props.screeningId).reserved
        seats.value = await venueStore.getSeats
        
        seats.value.forEach((e)=>{
            const seatIdentifier = `${e.row}${e.side}${e.seatNo}`;
            if (reserved.value.includes(seatIdentifier)) {
            e.available = false;
            }
        })
        
        seatInRow.value = await venueStore.getSeats.filter(seat => seat.row === 1).length;
    })    
    const row = computed(()=> seatInRow.value ?? {})  
</script>
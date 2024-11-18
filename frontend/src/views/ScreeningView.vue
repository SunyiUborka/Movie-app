<template>
    <PageTitle :title="screeningData.hu" :subTitle="screeningData.en"/>
    <div class="">
        <div class="flex mb-8 flex-col-reverse md:flex-row">
            <div class="flex flex-col">
                <p class="text-lg mb-2"><span class="font-bold">Vetités:</span> {{ new Date(screeningData.startEpochSeconds*1000).toLocaleString([], {dateStyle: "full"}) }}</p>
                <p class="text-lg mb-2"><span class="font-bold">Időtartam:</span> {{screeningData.lengthMins}} perc</p>
                <p class="text-lg mb-2"><span class="font-bold">Áttekintés:</span> {{ movieData.overview }}</p>
            </div>
            <div>
                <img class="max-w-60 ml-8 my-4" :src="`https://image.tmdb.org/t/p/original/${movieData.poster_path}`" :alt="`${screeningData.hu} poster`" :title="`${screeningData.hu} poster`">
            </div>
        </div>
        <div>
            <h2 class="text-lg font-bold mb-4">Férőhelyek</h2>
           <SeatList class="overflow-auto" :venueId="venueId" :screening-id="screeningId" />
        </div>
    </div>
</template>
<script setup>
import { useVenueStore } from '@/stores/venueStore';
import { useTmdbStore } from '@/stores/tmdbStore';
import { computed, onMounted, ref } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import SeatList from '@/components/SeatList.vue';


    const props = defineProps({
        venueId:{
            required: true
        },
        screeningId:{
            required: true
        }
    })
    const screening = ref(null)
    const movie = ref(null)
    const seats = ref(null)
    const { venueId, screeningId } = props
    const screeningStore = useVenueStore()
    const tmdbStore = useTmdbStore()
    onMounted(async ()=>{
        await screeningStore.fetchScreenings(venueId)
        screening.value = await screeningStore.getScreening(screeningId);
        await tmdbStore.fecthMovie(await screeningData.value)
        movie.value = tmdbStore.getMovie
        await screeningStore.fetchSeats(venueId)
        seats.value = screeningStore.getSeats
    })
    const screeningData = computed(()=> screening.value ?? {})
    const movieData = computed(()=> movie.value ?? {})
</script>
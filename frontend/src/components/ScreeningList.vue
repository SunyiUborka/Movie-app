<template>
    <div class="flex flex-wrap justify-evenly">
        <Venue v-for="movie in movies" :key="movie" :screening="movie" :venue="props.id"/>
    </div>
</template>
<script setup>
    import Venue from '@/components/ScreeningItem.vue';
    import { useVenueStore } from '@/stores/venueStore';
    import { useTmdbStore } from '@/stores/tmdbStore';
    import { onMounted, ref } from 'vue';

    const props = defineProps({
        id: {
            required: true
        }
    })

    const items = ref()
    const movies = ref()
    const venueStore = useVenueStore()
    const tmdbStore = useTmdbStore()

    onMounted(async ()=>{
        await venueStore.fetchScreenings(props.id)
        items.value = await venueStore.getScreenings
        await tmdbStore.fecthMovies(items.value)
        
        movies.value = await tmdbStore.getMovies
    }) 
</script>
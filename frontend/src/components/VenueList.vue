<script setup>
    import { useVenueStore } from '@/stores/venueStore';
    import VenueItem from '@/components/VenueItem.vue';
    import { ref, onMounted } from 'vue';

    const items = ref([])
    const venueStore = useVenueStore()

    onMounted(async ()=>{
        items.value = await venueStore.getVenues
    })
</script>

<template>
    <h1 class="text-2xl font-bold mb-6">
        Mozik
    </h1>
    <div class="flex justify-evenly flex-wrap">
        <VenueItem v-for="item in items" :key="item.id" :venue="item"/>
    </div>
</template>
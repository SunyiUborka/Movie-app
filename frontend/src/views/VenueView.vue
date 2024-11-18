<template>
    <PageTitle :title="hu" :subTitle="en"/>
    <ScreeningList :id="props.id"/>
</template>
<script setup>
    import { useVenueStore } from '@/stores/venueStore';
    import { onMounted } from 'vue';
    import ScreeningList from '@/components/ScreeningList.vue';
    import PageTitle from '@/components/PageTitle.vue';

    const cinemaStore = useVenueStore()
    const props = defineProps({
        id: {
            required: true
        }
    })
    const { hu, en } =  cinemaStore.getVenue(props.id)
    
    onMounted(async ()=>{
           
    })
</script>
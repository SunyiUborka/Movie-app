<template>
    <RouterLink class="rounded-lg max-w-44 min-h-44 m-4 overflow-hidden hover:underline hover:decoration-yellow-400" :to="{name: 'screening', params: { venueId: props.venue, screeningId: screening_id }}">
        <img class="rounded-lg" :src="`https://image.tmdb.org/t/p/original/${poster_path}`" :alt="`${title} poster`" :title="`${title} poster`">
        <div class="text-center font-bold text-m">
            <p class="max-w-44">{{ title }}</p>
        </div>
    </RouterLink>
</template>
<script async setup>
    import { onMounted } from 'vue';

    const props = defineProps({
        screening:{
            required: true
        },
        venue:{
            required: true
        }
    })
    const { title, poster_path, screening_id } = props.screening
</script>
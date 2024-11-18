<template>
    <div class="mx-5 mb-4">
        <RouterLink class="border-2 font-bold p-3 rounded-md hover:bg-yellow-400 hover:text-black hover:border-white block" :to="{name: 'venue', params: { id }}">{{ hu }}</RouterLink>
    </div>
</template>
<script setup>
    const props = defineProps({
        venue: {
            type: Object,
            required: true
        }
    })
    const { id, hu } = props.venue  
</script>
<style>

</style>
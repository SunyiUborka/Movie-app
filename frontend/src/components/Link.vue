<template>
    <a :href="props.link" class="hover:text-blue-800 text-blue-600" target="_blank">{{ props.text }}</a>
</template>

<script setup>
 const props = defineProps({
    link:{
        required: true
    },
    text:{
        required: true
    }
 })
</script>
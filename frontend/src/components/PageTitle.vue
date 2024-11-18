<template>
    <div class="mb-4">
        <h1 class="text-2xl font-bold">{{ props.title }}</h1>
        <h2 v-if="props.subTitle" class="font-semibold pl-4">{{ props.subTitle }}</h2>
    </div>
</template>
<script setup>
    const props = defineProps({
        title:{
            required: true
        },
        subTitle:{
            required:false
        }
    })
</script>
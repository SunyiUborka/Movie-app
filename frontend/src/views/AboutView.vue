<template>
    <PageTitle title="Leírás "/>
    <p class="text-lg mb-3">
        Ezt a webappot egy feladatnak kaptam, ahol mozikat és a hozzátartozó vetítéseket kellett megjelenítenem, tovább a vetítéseknél helyeket foglalni.
    </p>
    <p class="text-lg mb-3">
        Feladatban Frontendnek <Link link="https://vuejs.org/" text="Vue.js"/>-t használtam, API callok és adataik tárolására <Link link="https://pinia.vuejs.org/" text="Pinia"/>-t használtam, megjeleníshez <Link link="https://tailwindcss.com/" text="Tailwind"/> és a térkép megjelenítésére meg <Link link="https://leafletjs.com/" text="Leaflet"/>-et.
    </p>
    <p class="text-lg mb-8">
        A frontend repository elérhető <Link link="https://github.com/SunyiUborka/Movie-app" text="itt"/> és a backend test repository meg <Link link="https://github.com/SunyiUborka/Movie-backend" text="itt"/>.
    </p>
    <div class="flex justify-evenly flex-wrap">
        <img class="max-h-56" src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt="">
        <img class="max-h-56" src="https://camo.githubusercontent.com/beb4deef34ad522ffbbd05a815abf5b3b1f0943b6aff9ae5c64f356335fe0b99/68747470733a2f2f70696e69612e7675656a732e6f72672f6c6f676f2e737667" alt="">
        <img class="max-h-56" src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4" alt="">
        <img class="max-h-56" src="https://avatars.githubusercontent.com/u/2854298?s=200&v=4" alt="">
    </div>
    
</template>

<script setup>
    import PageTitle from '@/components/PageTitle.vue';
    import Link from '@/components/Link.vue';
</script>

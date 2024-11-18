<script setup>
    import { useVenueStore } from '@/stores/venueStore';
    import L from 'leaflet'
    import 'leaflet/dist/leaflet.css';
    import { onMounted } from 'vue';

    const venueStore = useVenueStore()
    
    onMounted(async ()=>{               
        const map = L.map('map', {
        center: L.latLng(47.497913, 19.040236),
        zoom: 14,
        });

        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{
            attribution: "\u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            crossOrigin: true
        }).addTo(map);

        venueStore.getVenues.forEach(e => {
            L.marker([e.lat, e.lon]).addTo(map).bindPopup(`<a class="text-black" href="/venue/${e.id}">${e.hu}</a>`)
        });
    })
</script>
<template>
    <button id="setView"></button>
    <div class="bg-white min-h-[60vh]" id="map"></div>
</template>
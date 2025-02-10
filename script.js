// Función para inicializar el mapa
function initMap() {
    // Coordenadas de la ubicación (ejemplo: latitud y longitud)
    const latLng = { lat: 18.4714, lng: -69.9451 };

    // Crear el mapa centrado en la ubicación
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,  // Nivel de zoom
        center: latLng,  // Coordenadas del centro
    });

    // Crear un marcador en la ubicación especificada
    const marker = new google.maps.Marker({
        position: latLng,  // Coordenadas del marcador
        map: map,
        title: "Mi Ubicación Personalizada",  // Título del marcador
    });
}
$(() => {
   // Global var
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    const favoriteRestaurant = [{
        "name": "Olive Garden, San Antonio",
        "category": "Italian",
        "details": "Olive Garden is an American casual dining restaurant chain specializing in Italian–American cuisine.",
    }, {
        "name": "Hooters, San Antonio",
        "category": "American-Style",
        "details": "Sports bar & grill chain famous for chicken wings.",
    }, {
        "name": "McDonald, San Antonio",
        "category": "Fast-Food",
        "details": "McDonald's Corporation is an American multinational fast food chain."
    }]
    const userInput = "document.querySelector('#text')"

    // Functions
    // function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MATBOX_TOKEN;
        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }

    // let mapBoxGeocoder = undefined;
    // mapBoxGeocoder = new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //     flyTo: false,
    //     marker: false
    // })
    //
    // map.addControl(mapBoxGeocoder);

    function createMarker(){
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

    function createPopup (){
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                     <h1>code up</h1>
                </div>
            `);
    }

    // Function that brings me to paris
    function goToParis(){
        geocode('Paris', MATBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }
    function goToAddress(){
        geocode(userInput, MATBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    // function that uses reverse geocode
    // take cooridnates from the center of the map
    // and print the screen the address
    function findAndPrintAddress (){
        const cords = map.getCenter();
        console.log(cords)
        reverseGeocode(cords, MATBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`
        })
    }
    // function that uses geocode to take in string
    // get cords to set marker and popup
    // function markRestaurant(){
    //     geocode('Olive Garden, San Antonio', MATBOX_TOKEN).then((data) => {
    //         const restaurantPopup = new mapboxgl.Popup()
    //             .setHTML(`<h3>Olive Garden</h3>
    //                 `)
    //         const restaurantMarker = new mapboxgl.Marker()
    //             .setLngLat(data)
    //             .addTo(map)
    //             .setPopup(restaurantPopup);
    //         restaurantPopup.addTo(map);
    //     })
    //
    // }
    function goToFavoriteRestaurants(){
        favoriteRestaurant.forEach( function(restaurant){
            console.log(restaurant.name);
            geocode(`${restaurant.name}`, MATBOX_TOKEN).then((data) => {
                console.log(data);
                const restaurantPopup = new mapboxgl.Popup()
                    .setHTML(`<h6>${restaurant.name}</h6>
                            <p>${restaurant.category}</p>
                            <p>${restaurant.details}</p>
                        `)
                const restaurantMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(restaurantPopup);
                restaurantPopup.addTo(map);
                // restaurantMarker.setPopup(restaurantPopup);
            })
        });
    }


    function zoomFive (){
        return map.setZoom(5);
    }
    function zoomTen (){
        return map.setZoom(10);
    }
    function zoomTwenty(){
        return map.setZoom(20);
    }


    // // Events
    // document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#goAddress').addEventListener('click', goToAddress);
    document.querySelector('#mark-restaurant').addEventListener('click', goToFavoriteRestaurants)

    document.querySelector('#Lvl5').addEventListener('click', zoomFive);
    document.querySelector('#Lvl10').addEventListener('click', zoomTen);
    document.querySelector('#Lvl20').addEventListener('click', zoomTwenty);


    // Runs when the Program Loads
    // map.setZoom(1);
    marker.setPopup(popup);





});
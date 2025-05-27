
// Initialize map
const map = L.map('map').setView([36.2048, 138.2529], 6);

// Add English map tiles from CartoDB
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors & CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Define reusable Leaflet icon
const defaultIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Define reusable train icon
const trainIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='font-size:20px;'>🚂</div>",
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

L.marker([35.6823, 139.7682], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Japan' target='_blank'>Tokyo</a></b> – Jul 3, Jul 4<br><br><b>Activities:</b><br><b>Jul 3</b><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Dinner%20in%20Shinjuku' target='_blank'>Dinner in Shinjuku</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Dinner%20in%20Ikebukuro' target='_blank'>Dinner in Ikebukuro</a><br><br><b>Jul 4</b><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Meiji%20Shrine' target='_blank'>Meiji Shrine</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Harajuku' target='_blank'>Harajuku</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Asakusa' target='_blank'>Asakusa</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Akihabara' target='_blank'>Akihabara</a><br><br><b>Jul 3 Notes:</b><br>Mitchell arrives 3:10pm, check in, relax<br><br><b>Jul 4 Notes:</b><br>Logan arrives 12:35pm<br><br><a href="https://www.google.com/search?q=Tokyo%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Tokyo%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Tokyo/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 3, Jul 4: Tokyo", {permanent: false, direction: 'top'});
L.marker([36.7485, 139.5984], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Japan' target='_blank'>Nikko</a></b> – Jul 5, Jul 6<br><br><b>Activities:</b><br><b>Jul 5</b><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Shinkyo%20Bridge' target='_blank'>Shinkyo Bridge</a><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Kanmangafuchi%20Abyss' target='_blank'>Kanmangafuchi Abyss</a><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Explore%20Nikko%20town' target='_blank'>Explore Nikko town</a><br><br><b>Jul 6</b><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Lake%20Chuzenji' target='_blank'>Lake Chuzenji</a><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Kegon%20Falls' target='_blank'>Kegon Falls</a><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Hike%20Senjogahara' target='_blank'>Hike Senjogahara</a><br><a href='https://www.google.com/search?tbm=isch&q=Nikko%20Yumoto%20Onsen' target='_blank'>Yumoto Onsen</a><br><br><a href="https://www.google.com/search?q=Nikko%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Nikko%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Nikko/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 5, Jul 6: Nikko", {permanent: false, direction: 'top'});
L.marker([36.6486, 138.1948], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Nagano%20Japan' target='_blank'>Nagano</a></b> – Jul 7<br><br><b>Activities:</b><br><b>Jul 7</b><br><a href='https://www.google.com/search?tbm=isch&q=Nagano%20Zenko-ji%20Temple' target='_blank'>Zenko-ji Temple</a><br><a href='https://www.google.com/search?tbm=isch&q=Nagano%20Joyama%20Park' target='_blank'>Joyama Park</a><br><a href='https://www.google.com/search?tbm=isch&q=Nagano%20Sake%20tasting' target='_blank'>Sake tasting</a><br><a href='https://www.google.com/search?tbm=isch&q=Nagano%20Nagano%20Prefectural%20Museum' target='_blank'>Nagano Prefectural Museum</a><br><br><b>Jul 7 Notes:</b><br>Travel day<br><br><a href="https://www.google.com/search?q=Nagano%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Nagano%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Nagano/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 7: Nagano", {permanent: false, direction: 'top'});
L.marker([36.7336, 138.4206], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Japan' target='_blank'>Yudanaka / Shibu Onsen</a></b> – Jul 8, Jul 9<br><br><b>Activities:</b><br><b>Jul 8</b><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Snow%20Monkey%20Park%20%F0%9F%90%92' target='_blank'>Snow Monkey Park 🐒</a><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Explore%20onsen%20village' target='_blank'>Explore onsen village</a><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Dine%20at%20ryokan' target='_blank'>Dine at ryokan</a><br><br><b>Jul 9</b><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Public%20bath%20tour' target='_blank'>Public bath tour</a><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Forest%20walk' target='_blank'>Forest walk</a><br><a href='https://www.google.com/search?tbm=isch&q=Yudanaka%20/%20Shibu%20Onsen%20Temple%20visit' target='_blank'>Temple visit</a><br><br><b>Jul 9 Notes:</b><br>Relaxation day<br><br><a href="https://www.google.com/search?q=Yudanaka%20/%20Shibu%20Onsen%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Yudanaka%20/%20Shibu%20Onsen%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Yudanaka%20/%20Shibu%20Onsen/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 8, Jul 9: Yudanaka / Shibu Onsen", {permanent: false, direction: 'top'});
L.marker([36.5613, 136.6562], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Japan' target='_blank'>Kanazawa</a></b> – Jul 10, Jul 11<br><br><b>Activities:</b><br><b>Jul 10</b><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Higashi%20Chaya%20District' target='_blank'>Higashi Chaya District</a><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Tea%20houses' target='_blank'>Tea houses</a><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Local%20craft%20shops' target='_blank'>Local craft shops</a><br><br><b>Jul 11</b><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Kenrokuen%20Garden' target='_blank'>Kenrokuen Garden</a><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%2021st%20Century%20Museum' target='_blank'>21st Century Museum</a><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Samurai%20District' target='_blank'>Samurai District</a><br><a href='https://www.google.com/search?tbm=isch&q=Kanazawa%20Omicho%20Market' target='_blank'>Omicho Market</a><br><br><a href="https://www.google.com/search?q=Kanazawa%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Kanazawa%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Kanazawa/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 10, Jul 11: Kanazawa", {permanent: false, direction: 'top'});
L.marker([36.1462, 137.2517], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Japan' target='_blank'>Takayama</a></b> – Jul 12, Jul 13<br><br><b>Activities:</b><br><b>Jul 12</b><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Old%20town%20stroll' target='_blank'>Old town stroll</a><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Sannomachi%20Street' target='_blank'>Sannomachi Street</a><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Local%20shops' target='_blank'>Local shops</a><br><br><b>Jul 13</b><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Morning%20market' target='_blank'>Morning market</a><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Hida%20Folk%20Village' target='_blank'>Hida Folk Village</a><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Float%20Museum' target='_blank'>Float Museum</a><br><a href='https://www.google.com/search?tbm=isch&q=Takayama%20Sake%20tasting' target='_blank'>Sake tasting</a><br><br><a href="https://www.google.com/search?q=Takayama%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Takayama%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Takayama/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 12, Jul 13: Takayama", {permanent: false, direction: 'top'});
L.marker([35.0116, 135.7681], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Japan' target='_blank'>Kyoto</a></b> – Jul 14, Jul 15<br><br><b>Activities:</b><br><b>Jul 14</b><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Nishiki%20Market' target='_blank'>Nishiki Market</a><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Yasaka%20Shrine' target='_blank'>Yasaka Shrine</a><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Gion%20at%20dusk' target='_blank'>Gion at dusk</a><br><br><b>Jul 15</b><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Fushimi%20Inari' target='_blank'>Fushimi Inari</a><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Arashiyama%20Bamboo%20Grove' target='_blank'>Arashiyama Bamboo Grove</a><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Monkey%20Park%20%F0%9F%90%92' target='_blank'>Monkey Park 🐒</a><br><a href='https://www.google.com/search?tbm=isch&q=Kyoto%20Kiyomizudera%20Temple' target='_blank'>Kiyomizudera Temple</a><br><br><b>Jul 14 Notes:</b><br>Try Kyoto-style kaiseki dinner<br><br><a href="https://www.google.com/search?q=Kyoto%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Kyoto%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Kyoto/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 14, Jul 15: Kyoto", {permanent: false, direction: 'top'});
L.marker([34.6937, 135.5023], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Osaka%20Japan' target='_blank'>Osaka</a></b> – Jul 16<br><br><b>Activities:</b><br><b>Jul 16</b><br><a href='https://www.google.com/search?tbm=isch&q=Osaka%20Dotonbori' target='_blank'>Dotonbori</a><br><a href='https://www.google.com/search?tbm=isch&q=Osaka%20Umeda%20Sky%20Building' target='_blank'>Umeda Sky Building</a><br><a href='https://www.google.com/search?tbm=isch&q=Osaka%20Osaka%20Castle' target='_blank'>Osaka Castle</a><br><a href='https://www.google.com/search?tbm=isch&q=Osaka%20Kuromon%20Market' target='_blank'>Kuromon Market</a><br><br><a href="https://www.google.com/search?q=Osaka%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Osaka%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Osaka/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 16: Osaka", {permanent: false, direction: 'top'});
L.marker([34.5833, 133.7667], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Japan' target='_blank'>Kurashiki</a></b> – Jul 17, Jul 18<br><br><b>Activities:</b><br><b>Jul 17</b><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Bikan%20Historical%20Quarter' target='_blank'>Bikan Historical Quarter</a><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Ohara%20Museum' target='_blank'>Ohara Museum</a><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Ivy%20Square' target='_blank'>Ivy Square</a><br><br><b>Jul 18</b><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Folkcraft%20Museum' target='_blank'>Folkcraft Museum</a><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Canal%20boat%20ride' target='_blank'>Canal boat ride</a><br><a href='https://www.google.com/search?tbm=isch&q=Kurashiki%20Textile%20shopping' target='_blank'>Textile shopping</a><br><br><a href="https://www.google.com/search?q=Kurashiki%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Kurashiki%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Kurashiki/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 17, Jul 18: Kurashiki", {permanent: false, direction: 'top'});
L.marker([35.6845, 139.765], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Japan' target='_blank'>Tokyo</a></b> – Jul 19, Jul 20<br><br><b>Activities:</b><br><b>Jul 19</b><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Ueno%20Park' target='_blank'>Ueno Park</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20National%20Museum' target='_blank'>National Museum</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Final%20shopping' target='_blank'>Final shopping</a><br><br><b>Jul 20</b><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Grab%20bento%20for%20train' target='_blank'>Grab bento for train</a><br><a href='https://www.google.com/search?tbm=isch&q=Tokyo%20Relax%20in%20airport%20lounge' target='_blank'>Relax in airport lounge</a><br><br><b>Jul 19 Notes:</b><br>Return to Tokyo<br><br><b>Jul 20 Notes:</b><br>Flight departs 6:30pm from Narita<br><br><a href="https://www.google.com/search?q=Tokyo%20weather%20July" target="_blank">🌤 Weather</a> |
<a href="https://www.booking.com/searchresults.html?ss=Tokyo%20Japan" target="_blank">🏨 Hotels</a> |
<a href="https://www.hostelworld.com/findabed.php/ChosenCity.Tokyo/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`)
    .bindTooltip("Jul 19, Jul 20: Tokyo", {permanent: false, direction: 'top'});
L.polyline([
    [35.6823, 139.7682],
    [36.7485, 139.5984]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([36.2154, 139.6833], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Tokyo Station<br>To: Nikko Station<br>
<a href='https://www.google.com/maps/dir/Tokyo%20Station%20Japan/Nikko%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Tokyo → Nikko", {permanent: false})
.addTo(map);

L.polyline([
    [36.7485, 139.5984],
    [36.6486, 138.1948]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([36.69855, 138.89659999999998], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Nikko Station<br>To: Nagano Station<br>
<a href='https://www.google.com/maps/dir/Nikko%20Station%20Japan/Nagano%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Nikko → Nagano", {permanent: false})
.addTo(map);

L.polyline([
    [36.6486, 138.1948],
    [36.7336, 138.4206]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([36.691100000000006, 138.3077], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Nagano Station<br>To: Yudanaka Station<br>
<a href='https://www.google.com/maps/dir/Nagano%20Station%20Japan/Yudanaka%20/%20Shibu%20Onsen%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Nagano → Yudanaka / Shibu Onsen", {permanent: false})
.addTo(map);

L.polyline([
    [36.7336, 138.4206],
    [36.5613, 136.6562]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([36.647450000000006, 137.53840000000002], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Yudanaka Station<br>To: Kanazawa Station<br>
<a href='https://www.google.com/maps/dir/Yudanaka%20/%20Shibu%20Onsen%20Station%20Japan/Kanazawa%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Yudanaka / Shibu Onsen → Kanazawa", {permanent: false})
.addTo(map);

L.polyline([
    [36.5613, 136.6562],
    [36.1462, 137.2517]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([36.353750000000005, 136.95395000000002], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Kanazawa Station<br>To: Takayama Station<br>
<a href='https://www.google.com/maps/dir/Kanazawa%20Station%20Japan/Takayama%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Kanazawa → Takayama", {permanent: false})
.addTo(map);

L.polyline([
    [36.1462, 137.2517],
    [35.0116, 135.7681]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([35.578900000000004, 136.50990000000002], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Takayama Station<br>To: Kyoto Station<br>
<a href='https://www.google.com/maps/dir/Takayama%20Station%20Japan/Kyoto%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Takayama → Kyoto", {permanent: false})
.addTo(map);

L.polyline([
    [35.0116, 135.7681],
    [34.6937, 135.5023]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([34.85265, 135.6352], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Kyoto Station<br>To: Osaka Station<br>
<a href='https://www.google.com/maps/dir/Kyoto%20Station%20Japan/Osaka%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Kyoto → Osaka", {permanent: false})
.addTo(map);

L.polyline([
    [34.6937, 135.5023],
    [34.5833, 133.7667]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([34.6385, 134.6345], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Osaka Station<br>To: Kurashiki Station<br>
<a href='https://www.google.com/maps/dir/Osaka%20Station%20Japan/Kurashiki%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Osaka → Kurashiki", {permanent: false})
.addTo(map);

L.polyline([
    [34.5833, 133.7667],
    [35.6823, 139.7682]
], {
    color: 'blue',
    weight: 3,
    opacity: 0.5
}).addTo(map);

L.marker([35.1328, 136.76745], {
    icon: trainIcon
})
.bindPopup(`<b>Train Segment</b><br>From: Kurashiki Station<br>To: Tokyo Station<br>
<a href='https://www.google.com/maps/dir/Kurashiki%20Station%20Japan/Tokyo%20Station%20Japan' target='_blank'>View on Google Maps Transit</a>`)
.bindTooltip("Train: Kurashiki → Tokyo", {permanent: false})
.addTo(map);

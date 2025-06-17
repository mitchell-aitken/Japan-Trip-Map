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


const locations = [
    {
        date: 'Jul 4',
        dateRange: 'Jul 4',
        coords: [35.6823, 139.7682],
        place: 'Tokyo',
        activities: {
            'Jul 4': ['Meiji Shrine', 'Harajuku', 'Ueno Park', 'Akihabara', 'Asakusa', 'Sumida River cruise', 'Shibuya Crossing', 'Tokyo National Museum', 'Omoide Yokocho alley', 'Tokyo Tower']
        },
        notes: {
            'Jul 4': 'Mitchell arrives 3:10pm, Logan arrives 12:35pm next day'
        }
    },
    {
        date: 'Jul 5',
        dateRange: 'Jul 5',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 5': ['Shinkyo Bridge', 'Toshogu Shrine', 'Rinnoji Temple', 'Futarasan Shrine', 'Nikko Tamozawa Imperial Villa Memorial Park', 'Walk along Daiya River']
        },
        notes: {
            'Jul 5': 'Travel from Tokyo to Nikko'
        }
    },
    {
        date: 'Jul 6',
        dateRange: 'Jul 6',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 6': ['Lake Chuzenji', 'Kegon Falls', 'Senjogahara Marsh', 'Ryuzu Falls', 'Akechidaira Ropeway', 'Yumoto Onsen']
        },
        notes: {}
    },
    {
        date: 'Jul 7',
        dateRange: 'Jul 7',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 7': ['Nikko Edo Wonderland', 'Onsen relaxation', 'Tobu World Square', 'Kirifuri Falls', 'Botanical Garden']
        },
        notes: {}
    },
    {
        date: 'Jul 8',
        dateRange: 'Jul 8',
        coords: [36.7333, 138.4147],
        place: 'Yudanaka',
        activities: {
            'Jul 8': ['Snow Monkey Park', 'Onsen stroll', 'Yudanaka Station Footbath', 'Stay in a ryokan', 'Visit Shibu Onsen historical bathhouses']
        },
        notes: {
            'Jul 8': 'Travel from Nikko to Yudanaka'
        }
    },
    {
        date: 'Jul 9',
        dateRange: 'Jul 9',
        coords: [36.5613, 136.6562],
        place: 'Kanazawa',
        activities: {
            'Jul 9': ['Kenrokuen Garden', 'Higashi Chaya District', 'Kanazawa Castle', 'Omicho Market', 'Nagamachi Samurai District']
        },
        notes: {
            'Jul 9': 'Arrive from Nagano'
        }
    },
    {
        date: 'Jul 10',
        dateRange: 'Jul 10',
        coords: [36.5613, 136.6562],
        place: 'Kanazawa',
        activities: {
            'Jul 10': ['Samurai District', '21st Century Museum', 'D.T. Suzuki Museum', 'Myoryuji Ninja Temple', 'Gyokusen-en Garden']
        },
        notes: {}
    },
    {
        date: 'Jul 11',
        dateRange: 'Jul 11',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 11': ['Gion walk', 'Kaiseki dinner', 'Yasaka Shrine', 'Pontocho Alley', 'Kiyamachi nightlife']
        },
        notes: {
            'Jul 11': 'Travel from Kanazawa to Kyoto'
        }
    },
    {
        date: 'Jul 12',
        dateRange: 'Jul 12',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 12': ['Fushimi Inari', 'Philosopher’s Path', 'Nijo Castle', 'Kyoto Imperial Palace', 'Heian Shrine']
        },
        notes: {}
    },
    {
        date: 'Jul 13',
        dateRange: 'Jul 13',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 13': ['Arashiyama Bamboo Grove', 'Tea tasting in Uji', 'Tenryu-ji Temple', 'Monkey Park Iwatayama', 'Kyoto Manga Museum']
        },
        notes: {}
    },
    {
        date: 'Jul 14',
        dateRange: 'Jul 14',
        coords: [34.8825, 139.0981],
        place: 'Izu Peninsula (Jogasaki Coast)',
        activities: {
            'Jul 14': ['Jogasaki Coast Trail', 'Mount Omuro ropeway', 'Izu Kogen Art Museum', 'Izu Shaboten Zoo', 'Coastal viewpoints']
        },
        notes: {
            'Jul 14': 'Travel from Kyoto to Jogasaki'
        }
    },
    {
        date: 'Jul 15',
        dateRange: 'Jul 15',
        coords: [34.8825, 139.0981],
        place: 'Izu Peninsula (Jogasaki Coast)',
        activities: {
            'Jul 15': ['Lighthouse views', 'Art museums', 'Suspension Bridge', 'Jogasaki Marine Town', 'Hot spring footbaths']
        },
        notes: {}
    },
    {
        date: 'Jul 16',
        dateRange: 'Jul 16',
        coords: [34.6784, 138.9450],
        place: 'Izu Peninsula (Shimoda)',
        activities: {
            'Jul 16': [ 'Surfing', 'Shimoda beaches', 'Perry Road', 'Ryosenji Temple', 'Shimoda Park', 'Shimoda History Museum']
        },
        notes: {
            'Jul 16': 'Travel from Jogasaki to Shimoda'
        }
    },
    {
        date: 'Jul 17',
        dateRange: 'Jul 17',
        coords: [34.6784, 138.9450],
        place: 'Izu Peninsula (Shimoda)',
        activities: {
            'Jul 17': ['Tatadohama Beach', 'Shimoda Ropeway', 'Underwater sightseeing boat', 'Shirahama Shrine', 'Snorkeling tour']
        },
        notes: {}
    },
    {
        date: 'Jul 18',
        dateRange: 'Jul 18',
        coords: [34.6784, 138.9450],
        place: 'Izu Peninsula (Shimoda)',
        activities: {
            'Jul 18': ['Onsen and beach day', 'Relaxing cafe views', 'Hiking nearby trails']
        },
        notes: {}
    },
    {
        date: 'Jul 19',
        dateRange: 'Jul 19',
        coords: [35.6823, 139.7682],
        place: 'Tokyo',
        activities: {
            'Jul 19': ['teamLab Planets', 'Tokyo Skytree', 'Shibuya shopping', 'Ghibli Clock near Shimbashi']
        },
        notes: {
            'Jul 19': 'Return from Shimoda'
        }
    },
    {
        date: 'Jul 20',
        dateRange: 'Jul 20',
        coords: [35.7765, 140.3189],
        place: 'Narita Airport',
        activities: {
            'Jul 20': ['Relax at lounge', 'Souvenir shopping', 'Observation deck', 'Airport museum exhibit']
        },
        notes: {
            'Jul 20': 'Flight departs 6:30pm'
        }
    }
];



// Merging locations to combine Tokyo days
const mergedLocations = {};
locations.forEach(loc => {
    const key = (loc.place === 'Tokyo') ? 'Tokyo' : loc.place + loc.coords.toString();
    if (!mergedLocations[key]) {
        mergedLocations[key] = {
            place: loc.place,
            coords: loc.coords,
            activities: {},
            notes: {}
        };
    }
    Object.entries(loc.activities).forEach(([day, acts]) => {
        mergedLocations[key].activities[day] = acts;
    });
    Object.entries(loc.notes).forEach(([day, note]) => {
        mergedLocations[key].notes[day] = note;
    });
});

// Draw markers (NO polylineCoords here)
Object.values(mergedLocations).forEach(loc => {
    const placeQuery = encodeURIComponent(loc.place + ' Japan');
    const placeLink = `https://www.google.com/search?tbm=isch&q=${placeQuery}`;

    let popupHTML = `<b><a href='${placeLink}' target='_blank'>${loc.place}</a></b><br><br><b>Activities:</b><br>`;

    for (const [day, acts] of Object.entries(loc.activities)) {
        popupHTML += `<b>${day}</b><br>`;
        acts.forEach(act => {
            const actQuery = encodeURIComponent(`${loc.place} ${act}`);
            popupHTML += `<a href='https://www.google.com/search?tbm=isch&q=${actQuery}' target='_blank'>${act}</a><br>`;
        });
        popupHTML += `<br>`;
    }

    for (const [day, note] of Object.entries(loc.notes)) {
        popupHTML += `<b>${day} Notes:</b><br>${note}<br><br>`;
    }

    popupHTML += `<a href="https://www.google.com/search?q=${placeQuery}+weather+July" target="_blank">🌤 Weather</a> | `;
    popupHTML += `<a href="https://www.booking.com/searchresults.html?ss=${encodeURIComponent(loc.place)}%20Japan" target="_blank">🏨 Hotels</a> | `;
    popupHTML += `<a href="https://www.hostelworld.com/findabed.php/ChosenCity.${encodeURIComponent(loc.place)}/ChosenCountry.Japan" target="_blank">🛏 Hostels</a>`;

    L.marker(loc.coords, { icon: defaultIcon })
        .addTo(map)
        .bindPopup(popupHTML)
        .bindTooltip(`${loc.place}`, { permanent: false, direction: 'top' });
});

const trainSegments = [
    [[35.6823, 139.7682], [36.7485, 139.5980], "Tokyo Station", "Nikko Station", "Jul 5"],
    [[36.7485, 139.5980], [36.7333, 138.4147], "Nikko Station", "Yudanaka Station", "Jul 8"],
    [[36.7333, 138.4147], [36.5613, 136.6562], "Nagano Station", "Kanazawa Station", "Jul 9"],
    [[36.5613, 136.6562], [35.0116, 135.7681], "Kanazawa Station", "Kyoto Station", "Jul 11"],
    [[35.0116, 135.7681], [34.8825, 139.0981], "Kyoto Station", "Jogasaki-Kaigan Station", "Jul 14"],
    [[34.8825, 139.0981], [34.6784, 138.9450], "Jogasaki-Kaigan Station", "Izukyu Shimoda Station", "Jul 16"],
    [[34.6784, 138.9450], [35.6823, 139.7682], "Izukyu Shimoda Station", "Tokyo Station", "Jul 19"],
    [[35.6823, 139.7682], [35.7765, 140.3189], "Tokyo Station", "Narita Airport", "Jul 20"]
];


trainSegments.forEach(segment => {
    const [fromCoords, toCoords, fromName, toName, date] = segment;

    L.polyline([
        fromCoords,
        toCoords
    ], {
        color: 'blue',
        weight: 3,
        opacity: 0.5
    }).addTo(map);

    L.marker([
        (fromCoords[0] + toCoords[0]) / 2,
        (fromCoords[1] + toCoords[1]) / 2
    ], {
        icon: trainIcon
    })
    .bindPopup(`<b>Train Segment</b><br>${date}<br>From: ${fromName}<br>To: ${toName}<br>
<a href='https://www.google.com/maps/dir/${fromName.replace(/ /g, '%20')}+Japan/${toName.replace(/ /g, '%20')}+Japan' target='_blank'>View on Google Maps Transit</a>`)
    .bindTooltip(`Train: ${fromName} → ${toName}`, {permanent: false})
    .addTo(map);
});

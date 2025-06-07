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
        date: 'Jul 3',
        dateRange: 'Jul 3',
        coords: [35.6823, 139.7682],
        place: 'Tokyo',
        activities: {
            'Jul 3': ['Check-in and relax', 'dinner in Shinjuku', 'night walk in Shinjuku', 'Omoide Yokocho alley', 'Golden Gai bars', 'Tokyo Metropolitan Government Building observation deck']
        },
        notes: {
            'Jul 3': 'Mitchell arrives 3:10pm, check-in, relax'
        }
    },
    {
        date: 'Jul 4',
        dateRange: 'Jul 4',
        coords: [35.6823, 139.7682],
        place: 'Tokyo',
        activities: {
            'Jul 4': ['Meiji Shrine', 'Harajuku', 'Takeshita Street', 'Yoyogi Park', 'Ueno Park', 'Ueno Zoo', 'Ameyoko Market', 'Akihabara', 'Asakusa', 'Sensoji Temple', 'Sumida River cruise']
        },
        notes: {
            'Jul 4': 'Logan arrives 12:35pm'
        }
    },
    {
        date: 'Jul 5',
        dateRange: 'Jul 5',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 5': ['Shinkyo Bridge', 'Kanmangafuchi Abyss', 'Nikko town walk', 'Rinnoji Temple', 'Futarasan Shrine', 'Nikko Toshogu Shrine', 'Kanaya Hotel History House']
        },
        notes: {
            'Jul 5': 'Travel to Nikko'
        }
    },
    {
        date: 'Jul 6',
        dateRange: 'Jul 6',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 6': ['Lake Chuzenji cruise', 'lakeside walk at Lake Chuzenji', 'Kegon Falls', 'Akechidaira Ropeway', 'Senjogahara Marsh hike', 'Yumoto Onsen', 'Ryuzu Falls']
        },
        notes: {
        }
    },
    {
        date: 'Jul 7',
        dateRange: 'Jul 7',
        coords: [36.7485, 139.598],
        place: 'Nikko',
        activities: {
            'Jul 7': ['Tamozawa Imperial Villa', 'Nikko Botanical Garden', 'Kirifuri Falls', 'Tobu World Square', 'Nikko Edo Wonderland', 'relax at onsen']
        },
        notes: {
        }
    },
    {
        date: 'Jul 8',
        dateRange: 'Jul 8',
        coords: [36.6486, 138.1948],
        place: 'Nagano',
        activities: {
            'Jul 8': ['DAY trip to Snow Monkey Park','Zenko-ji Temple', 'Nagano Prefectural Museum of Art', 'Joyama Park', 'sake tasting at Nishinomon-Yoshinoya Sake Brewery', 'onsen stroll in Yudanaka']
        },
        notes: {
            'Jul 8': 'Return to Nagano'
        }
    },
    {
        date: 'Jul 9',
        dateRange: 'Jul 9',
        coords: [36.6486, 138.1948],
        place: 'Nagano',
        activities: {
            'Jul 9': ['Matsumoto Castle', 'Nakamachi Street', 'Matsumoto City Museum of Art', 'Daio Wasabi Farm', 'Togakushi Shrine', 'Togakushi Ninja Museum', 'hike in Togakushi area']
        },
        notes: {
        }
    },
    {
        date: 'Jul 10',
        dateRange: 'Jul 10',
        coords: [36.5613, 136.6562],
        place: 'Kanazawa',
        activities: {
            'Jul 10': ['Kenrokuen Garden', 'Kanazawa Castle Park', 'Higashi Chaya District', 'Omicho Market', '21st Century Museum of Contemporary Art', 'Myoryuji Ninja Temple']
        },
        notes: {
            'Jul 10': 'Travel + sightseeing'
        }
    },
    {
        date: 'Jul 11',
        dateRange: 'Jul 11',
        coords: [36.5613, 136.6562],
        place: 'Kanazawa',
        activities: {
            'Jul 11': ['Nomura Samurai House', 'Nagamachi Samurai District', 'Oyama Shrine', 'D.T. Suzuki Museum', 'Kanazawa Phonograph Museum', 'tea ceremony in Higashi Chaya']
        },
        notes: {
        }
    },
    {
        date: 'Jul 12',
        dateRange: 'Jul 12',
        coords: [36.1462, 137.2517],
        place: 'Takayama',
        activities: {
            'Jul 12': ['Sannomachi Historic Street', 'Miyagawa Morning Market', 'Takayama Jinya', 'Hida Folk Village', 'Takayama Festival Float Exhibition Hall', 'sake tasting in old town']
        },
        notes: {
            'Jul 12': 'Scenic ride'
        }
    },
    {
        date: 'Jul 13',
        dateRange: 'Jul 13',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 13': ['Nishiki Market', 'Yasaka Shrine', 'Gion at dusk', 'Philosopher’s Path', 'Maruyama Park', 'Nanzenji Temple', 'evening river walk in Pontocho Alley']
        },
        notes: {
            'Jul 13': 'Kaiseki dinner'
        }
    },
    {
        date: 'Jul 14',
        dateRange: 'Jul 14',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 14': ['Arashiyama Bamboo Grove', 'Monkey Park Iwatayama', 'Fushimi Inari Taisha', 'Kiyomizudera Temple', 'Nijo Castle', 'Kyoto Imperial Palace', 'Osaka Castle', 'Dotonbori canal area', 'Umeda Sky Building', 'Kuromon Market', 'Sumiyoshi Taisha Shrine']
        },
        notes: {
        }
    },
    {
        date: 'Jul 15',
        dateRange: 'Jul 15',
        coords: [35.0116, 135.7681],
        place: 'Kyoto',
        activities: {
            'Jul 15': ['Philosopher’s Path', 'Ginkakuji Silver Pavilion', 'Heian Shrine', 'Nishijin Textile Center', 'Kyoto International Manga Museum', 'day trip to Uji Byodoin Temple', 'green tea tasting in Uji', 'day trip to Ohara Sanzen-in Temple', 'countryside walk in Ohara']
        },
        notes: {
        }
    },

    {
        date: 'Jul 16-17',
        dateRange: 'Jul 16-17',
        coords: [34.8825, 139.0981],  // Use Jogasaki Coast coords
        place: 'Izu Peninsula (Jogasaki Coast)',
        activities: {
            'Jul 16-17': ['Jogasaki Coast hiking trail', 'Jogasaki Suspension Bridge', 'Mount Omuro ropeway', 'Mount Omuro crater walk', 'Izu Teddy Bear Museum', 'Izu Kogen art museums', 'Jogasaki lighthouse', 'coastal viewpoints']
        },
        notes: {
            'Jul 16-17': 'Seaside hikes'
        }
    },

    {
        date: 'Jul 18',
        dateRange: 'Jul 18',
        coords: [34.6784, 138.945],
        place: 'Izu Peninsula (Shimoda)',
        activities: {
            'Jul 18': ['Shimoda beaches', 'Shirahama Beach', 'Tatadohama Beach', 'Perry Road', 'Ryosenji Temple', 'Shimoda Park', 'underwater sightseeing boat tour', 'Shimoda Ropeway to Mount Nesugatayama']
        },
        notes: {
            'Jul 18': 'Final Izu night'
        }
    },
    {
        date: 'Jul 19',
        dateRange: 'Jul 19',
        coords: [35.6823, 139.7682],
        place: 'Tokyo',
        activities: {
            'Jul 19': ['Ueno Park', 'Tokyo National Museum', 'Tokyo Skytree', 'Asakusa Sensoji Temple', 'teamLab Planets', 'teamLab Borderless', 'Odaiba', 'shopping in Shibuya', 'final ramen dinner', 'final sushi dinner']
        },
        notes: {
            'Jul 19': 'Return to Tokyo'
        }
    },
    {
        date: 'Jul 20',
        dateRange: 'Jul 20',
        coords: [35.7765, 140.3189],
        place: 'Narita Airport',
        activities: {
            'Jul 20': ['Relax in airport lounge', 'visit Narita Airport observation decks', 'buy souvenirs at airport shops']
        },
        notes: {
            'Jul 20': 'Flight departs 6:30pm'
        }
    },
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
    [[36.7485, 139.5980], [36.6486, 138.1948], "Nikko Station", "Nagano Station", "Jul 8"],
    [[36.6486, 138.1948], [36.5613, 136.6562], "Nagano Station", "Kanazawa Station", "Jul 10"],
    [[36.5613, 136.6562], [36.1462, 137.2517], "Kanazawa Station", "Takayama Station", "Jul 12"],
    [[36.1462, 137.2517], [35.0116, 135.7681], "Takayama Station", "Kyoto Station", "Jul 13"],
    [[35.0116, 135.7681], [34.8825, 139.0981], "Kyoto Station", "Jogasaki-Kaigan Station", "Jul 16-17"],
    [[34.8825, 139.0981], [34.6784, 138.9450], "Jogasaki-Kaigan Station", "Izukyu Shimoda Station", "Jul 18"],
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

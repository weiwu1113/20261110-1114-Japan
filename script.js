// 初始化行程預設資料
let itineraryData = {
  day1: [
    { id: '101', name: 'Hotaku HOTEL (保田區飯店)', address: 'Hotaku HOTEL Akihabara', note: '放行李', tag: '住宿', lat: 35.6983, lng: 139.7731 },
    { id: '102', name: '淺草雷門散策', address: '淺草寺', note: '老街散策', tag: '景點', lat: 35.7148, lng: 139.7967 },
    { id: '103', name: '壽々喜園 淺草本店', address: '東京都台東区浅草3-4-3', note: '世界最濃抹茶冰淇淋', tag: '美食', lat: 35.7181, lng: 139.7958 },
    { id: '104', name: '東京晴空塔', address: 'Tokyo Skytree', note: '商場散步、晚餐', tag: '購物/景點', lat: 35.7101, lng: 139.8107 }
  ],
  day2: [
    { id: '201', name: '春日部站', address: '春日部駅', note: '小新巡禮', tag: '景點', lat: 35.9802, lng: 139.7527 },
    { id: '202', name: 'Puratto Kasukabe 旅遊資訊處', address: 'Puratto Kasukabe', note: '小新展示', tag: '景點', lat: 35.9795, lng: 139.7533 },
    { id: '203', name: '佐藤九日堂 (現 Ito-Yokado)', address: 'Ito-Yokado Kasukabe', note: '打卡拍照', tag: '景點', lat: 35.9785, lng: 139.7510 },
    { id: '204', name: '東京大神宮', address: '東京大神宮', note: '祈福參拜', tag: '神社', lat: 35.7022, lng: 139.7468 },
    { id: '205', name: 'Harbs LUMINE Ikebukuro', address: 'Harbs LUMINE Ikebukuro', note: '水果千層蛋糕', tag: '美食', lat: 35.7289, lng: 139.7108 },
    { id: '206', name: 'K-BOOKS 池袋 K-POP館プラス', address: 'K-BOOKS 池袋 K-POP館プラス', note: '逛偶像周邊', tag: '購物', lat: 35.7315, lng: 139.7153 }
  ],
  day3: [
    { id: '301', name: '東京迪士尼海洋', address: 'Tokyo DisneySea', note: '夢幻泉鄉、設施與聖誕氛圍', tag: '主題樂園', lat: 35.6267, lng: 139.8881 }
  ],
  day4: [
    { id: '401', name: '小網神社', address: '小網神社', note: '早鳥參拜洗錢求財運', tag: '神社', lat: 35.6853, lng: 139.7791 },
    { id: '402', name: '森乃園', address: '人形町 森乃園', note: '抹茶/焙茶點心', tag: '美食', lat: 35.6858, lng: 139.7820 },
    { id: '403', name: 'Forestgate代官山 MAIN棟', address: 'Forestgate Daikanyama', note: 'JYP 快閃旗艦店抽選與街區散策', tag: '景點/購物', lat: 35.6483, lng: 139.7032 },
    { id: '404', name: '澀谷十字路口', address: 'Shibuya Crossing', note: '打卡拍照', tag: '景點', lat: 35.6595, lng: 139.7005 },
    { id: '405', name: 'The Matcha Tokyo 表參道', address: 'The Matcha Tokyo Omotesando', note: '手刷抹茶 (可彈性選澀谷 SKY)', tag: '美食', lat: 35.6670, lng: 139.7082 },
    { id: '406', name: 'けやき坂イルミネーション', address: 'Keyakizaka Illumination', note: '六本木之丘冬季點燈（17~22時點燈）', tag: '夜景/點燈', lat: 35.6593, lng: 139.7297 },
    { id: '407', name: '東京鐵塔', address: 'Tokyo Tower', note: '經典地標', tag: '景點', lat: 35.6586, lng: 139.7454 }
  ],
  day5: [
    { id: '501', name: '秋葉原 / 上野阿美橫町', address: 'Ameyoko Shopping District', note: '藥妝伴手禮最後補貨', tag: '購物', lat: 35.7101, lng: 139.7745 },
    { id: '502', name: '成田國際機場', address: 'Narita International Airport', note: '13:30 出發前往機場，17:00 班機', tag: '交通', lat: 35.7720, lng: 140.3929 }
  ],
  drafts: [
    { id: 'd01', name: 'CLOUD CLUB MATCHA GINZA YAN...', address: '銀座抹茶店', note: '備選抹茶飲品店', tag: '待討論', lat: 35.6715, lng: 139.7650 },
    { id: 'd02', name: '燒肉冷麵だいじゅ', address: '燒肉冷麵だいじゅ', note: '老辣妹推薦（燒肉美食備選）', tag: '美食備選', lat: 35.6900, lng: 139.7000 },
    { id: 'd03', name: '燒肉あぶる • 池袋店', address: '燒肉あぶる 池袋店', note: '前女友特餐（燒肉備選）', tag: '美食備選', lat: 35.7300, lng: 139.7120 },
    { id: 'd04', name: '黃金だし しゃぶき', address: '黃金だし しゃぶき', note: '平價壽喜燒~ (供參考) 可先訂位', tag: '待討論', lat: 35.6800, lng: 139.7600 },
    { id: 'd05', name: 'Iruca Tokyo Roppongi', address: 'Iruca Tokyo Roppongi', note: '很多人推薦的拉麵店', tag: '美食備選', lat: 35.6630, lng: 139.7320 }
  ]
};

let map;
let markers = {};

// 初始化頁面與地圖
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderAllItineraries();
  loadNotes();
});

// 初始化 Leaflet 地圖
function initMap() {
  map = L.map('map').setView([35.6812, 139.7671], 11);

  // 使用 OpenStreetMap 免費圖資
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  refreshMapMarkers();
}

// 刷新地圖上的所有圖釘
function refreshMapMarkers() {
  // 清除舊圖釘
  Object.values(markers).forEach(m => map.removeLayer(m));
  markers = {};

  Object.keys(itineraryData).forEach(day => {
    itineraryData[day].forEach(spot => {
      if (spot.lat && spot.lng) {
        const marker = L.marker([spot.lat, spot.lng]).addTo(map);
        marker.bindPopup(`<b>${spot.name}</b><br>${spot.note || ''}`);
        
        // 點擊圖釘 -> 高亮卡片並捲動
        marker.on('click', () => {
          highlightCard(spot.id);
        });

        markers[spot.id] = marker;
      }
    });
  });
}

// 渲染所有天的行程
function renderAllItineraries() {
  Object.keys(itineraryData).forEach(day => {
    const container = document.getElementById(`list-${day}`);
    if (!container) return;
    container.innerHTML = '';

    itineraryData[day].forEach((spot, index) => {
      const gMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address || spot.name)}`;
      
      const itemEl = document.createElement('div');
      itemEl.className = 'spot-item';
      itemEl.id = `card-${spot.id}`;
      itemEl.onclick = (e) => {
        // 避免點擊按鈕或輸入框時觸發地圖連動
        if (['BUTTON', 'TEXTAREA', 'A', 'I', 'INPUT'].includes(e.target.tagName)) return;
        focusOnMap(spot.id, spot.lat, spot.lng);
      };

      itemEl.innerHTML = `
        <div class="spot-top-row">
          <span class="spot-title">${spot.name}</span>
          <span class="spot-tag">${spot.tag || '備忘'}</span>
          <div class="spot-actions">
            <button class="action-btn" onclick="moveSpot('${day}', ${index}, -1)" title="向上移"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="action-btn" onclick="moveSpot('${day}', ${index}, 1)" title="向下移"><i class="fa-solid fa-arrow-down"></i></button>
            <button class="action-btn" onclick="deleteSpot('${day}', '${spot.id}')" title="刪除"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div class="spot-address">
          📍 <a href="${gMapsUrl}" target="_blank" rel="noopener noreferrer">${spot.address || spot.name} (導航)</a>
        </div>
        <textarea class="spot-notes" placeholder="填寫備註/討論..." onchange="updateNote('${day}', '${spot.id}', this.value)">${spot.note || ''}</textarea>
      `;

      container.appendChild(itemEl);
    });
  });
}

// 聚焦地圖並開啟地圖彈窗
function focusOnMap(id, lat, lng) {
  if (lat && lng) {
    map.flyTo([lat, lng], 14);
    if (markers[id]) {
      markers[id].openPopup();
    }
  }
}

// 點擊圖釘時高亮行程卡片
function highlightCard(id) {
  document.querySelectorAll('.spot-item').forEach(el => el.classList.remove('active-highlight'));
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.add('active-highlight');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// 調整順序 (上下移動)
function moveSpot(day, index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= itineraryData[day].length) return;

  const temp = itineraryData[day][index];
  itineraryData[day][index] = itineraryData[day][newIndex];
  itineraryData[day][newIndex] = temp;

  renderAllItineraries();
}

// 刪除地點
function deleteSpot(day, id) {
  if (confirm('確定要刪除這個地點嗎？')) {
    itineraryData[day] = itineraryData[day].filter(s => s.id !== id);
    renderAllItineraries();
    refreshMapMarkers();
  }
}

// 更新備註
function updateNote(day, id, text) {
  const item = itineraryData[day].find(s => s.id === id);
  if (item) {
    item.note = text;
    if (markers[id]) {
      markers[id].setPopupContent(`<b>${item.name}</b><br>${item.note}`);
    }
  }
}

// 手動新增地點 Prompt
function addNewSpotPrompt(day) {
  const name = prompt("請輸入地點名稱：");
  if (!name) return;
  const address = prompt("請輸入地址或搜尋關鍵字：", name) || name;
  const note = prompt("請輸入備註/討論：", "") || "";

  // 使用 Nominatim 免費 API 進行 Geocoding
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(data => {
      let lat = 35.6812, lng = 139.7671; // 預設東京車站
      if (data && data.length > 0) {
        lat = parseFloat(data[0].lat);
        lng = parseFloat(data[0].lon);
      }
      
      const newSpot = {
        id: 'user_' + Date.now(),
        name: name,
        address: address,
        note: note,
        tag: day === 'drafts' ? '待討論' : '行程',
        lat: lat,
        lng: lng
      };

      itineraryData[day].push(newSpot);
      renderAllItineraries();
      refreshMapMarkers();
      focusOnMap(newSpot.id, lat, lng);
    });
}

// 地圖搜尋功能（輸入地址自動搜尋與定位標記）
function searchAddress() {
  const input = document.getElementById('address-input').value;
  if (!input) return;

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);

        map.flyTo([lat, lng], 14);
        L.marker([lat, lng]).addTo(map)
          .bindPopup(`<b>${input}</b><br>搜尋到的位置`)
          .openPopup();
      } else {
        alert("找不到該地點，請嘗試更詳細的中文地址或有名地點！");
      }
    });
}

// 快速捲動至指定天數
function scrollToDay(dayId) {
  const el = document.getElementById(dayId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// 全域備註儲存（模擬 LocalStorage 保存）
function saveNotes() {
  const notes = document.getElementById('global-notes').value;
  localStorage.setItem('tokyo_trip_notes', notes);
  alert('討論備註已成功儲存！');
}

function loadNotes() {
  const saved = localStorage.getItem('tokyo_trip_notes');
  if (saved) {
    document.getElementById('global-notes').value = saved;
  }
}
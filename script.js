// Data (equivalent to data.js)
const EMOJI_COLLECTION = [
    // All
    { emoji: '😀', name: 'Grinning Face', category: 'Faces and Expressions' },
    { emoji: '😃', name: 'Tears of Joy', category: 'Faces and Expressions' },
    { emoji: '😄', name: 'Heart-Eyes', category: 'Faces and Expressions' },
    { emoji: '😁', name: 'Grinning Face with smiling eyes', category: 'Faces and Expressions' },
    { emoji: '🍕', name: 'Pizza Slice', category: 'Food and Drink' },
    { emoji: '🍔', name: 'Hamburger', category: 'Food and Drink' },
    { emoji: '☕', name: 'Hot Beverage', category: 'Food and Drink' },
    { emoji: '🐶', name: 'Dog Face', category: 'Animals and Nature' },
    { emoji: '🐈', name: 'Cat', category: 'Animals and Nature' },
    { emoji: '🌳', name: 'Deciduous Tree', category: 'Animals and Nature' },
    { emoji: '🚗', name: 'Car', category: 'Travel and Transportation' },
    { emoji: '🚀', name: 'Rocket', category: 'Travel and Transportation' },
    { emoji: '⚽', name: 'Soccer Ball', category: 'Activities' },
    { emoji: '🏀', name: 'Basketball', category: 'Activities' },
    { emoji: '❤️', name: 'Red Heart', category: 'Symbols' },
    { emoji: '✨', name: 'Sparkles', category: 'Symbols' },
    { emoji: '🇪🇬', name: 'Flag: Saudi Arabia', category: 'Flags' },
    { emoji: '🇺🇸', name: 'Flag: United States', category: 'Flags' },
    // Faces and Expressions
    { emoji: '😆', name: 'Grinning Squinting Face', category: 'Faces and Expressions' },
    { emoji: '🥹', name: 'Holding Back Tears', category: 'Faces and Expressions' },
    { emoji: '😅', name: 'Grinning Face with Sweat', category: 'Faces and Expressions' },
    { emoji: '🤣', name: 'Rolling on the Floor Laughing', category: 'Faces and Expressions' },
    { emoji: '🥲', name: 'Smiling Face with Tear', category: 'Faces and Expressions' },
    { emoji: '☺', name: 'Smiling Face', category: 'Faces and Expressions' },
    { emoji: '😊', name: 'Smiling Face with Smiling Eyes', category: 'Faces and Expressions' },
    { emoji: '😇', name: 'Smiling Face with Halo', category: 'Faces and Expressions' },
    { emoji: '🙂', name: 'Slightly Smiling Face', category: 'Faces and Expressions' },
    { emoji: '🙃', name: 'Upside-Down Face', category: 'Faces and Expressions' },
    { emoji: '😉', name: 'Winking Face', category: 'Faces and Expressions' },
    { emoji: '😌', name: 'Relieved Face', category: 'Faces and Expressions' },
    { emoji: '🥰', name: 'Smiling Face with Hearts', category: 'Faces and Expressions' },
    { emoji: '😘', name: 'Face Blowing a Kiss', category: 'Faces and Expressions' },
    { emoji: '😗', name: 'Kissing Face', category: 'Faces and Expressions' },
    { emoji: '😙', name: 'Kissing Face with Smiling Eyes', category: 'Faces and Expressions' },
    { emoji: '😚', name: 'Kissing Face with Closed Eyes', category: 'Faces and Expressions' },
    { emoji: '😋', name: 'Face Savoring Food', category: 'Faces and Expressions' },
    { emoji: '😛', name: 'Face with Tongue', category: 'Faces and Expressions' },
    { emoji: '😝', name: 'Squinting Face with Tongue', category: 'Faces and Expressions' },
    { emoji: '😜', name: 'Winking Face with Tongue', category: 'Faces and Expressions' },
    // Food and Drink
    { emoji: '🍟', name: 'French Fries', category: 'Food and Drink' },
    { emoji: '🌭', name: 'Hot Dog', category: 'Food and Drink' },
    { emoji: '🍿', name: 'Popcorn', category: 'Food and Drink' },
    { emoji: '🧁', name: 'Cupcake', category: 'Food and Drink' },
    { emoji: '🍩', name: 'Doughnut', category: 'Food and Drink' },
    { emoji: '🍪', name: 'Cookie', category: 'Food and Drink' },
    { emoji: '🍰', name: 'Cake', category: 'Food and Drink' },
    { emoji: '🍫', name: 'Chocolate Bar', category: 'Food and Drink' },
    { emoji: '🍭', name: 'Lollipop', category: 'Food and Drink' },
    { emoji: '🍬', name: 'Candy', category: 'Food and Drink' },
    { emoji: '🍎', name: 'Red Apple', category: 'Food and Drink' },
    { emoji: '🍌', name: 'Banana', category: 'Food and Drink' },
    { emoji: '🍇', name: 'Grapes', category: 'Food and Drink' },
    { emoji: '🍉', name: 'Watermelon', category: 'Food and Drink' },
    { emoji: '🍓', name: 'Strawberry', category: 'Food and Drink' },
    { emoji: '🥭', name: 'Mango', category: 'Food and Drink' },
    { emoji: '🥗', name: 'Green Salad', category: 'Food and Drink' },
    { emoji: '🥪', name: 'Sandwich', category: 'Food and Drink' },
    { emoji: '🥤', name: 'Soft Drink', category: 'Food and Drink' },
    // Animals and Nature
    { emoji: '🐱', name: 'Cat Face', category: 'Animals and Nature' },
    { emoji: '🐭', name: 'Mouse Face', category: 'Animals and Nature' },
    { emoji: '🐹', name: 'Hamster Face', category: 'Animals and Nature' },
    { emoji: '🐰', name: 'Rabbit Face', category: 'Animals and Nature' },
    { emoji: '🦊', name: 'Fox Face', category: 'Animals and Nature' },
    { emoji: '🐻', name: 'Bear Face', category: 'Animals and Nature' },
    { emoji: '🐼', name: 'Panda Face', category: 'Animals and Nature' },
    { emoji: '🐨', name: 'Koala', category: 'Animals and Nature' },
    { emoji: '🐯', name: 'Tiger Face', category: 'Animals and Nature' },
    { emoji: '🦁', name: 'Lion Face', category: 'Animals and Nature' },
    { emoji: '🐸', name: 'Frog Face', category: 'Animals and Nature' },
    { emoji: '🐔', name: 'Chicken', category: 'Animals and Nature' },
    { emoji: '🐧', name: 'Penguin', category: 'Animals and Nature' },
    { emoji: '🐦', name: 'Bird', category: 'Animals and Nature' },
    { emoji: '🐤', name: 'Baby Chick', category: 'Animals and Nature' },
    { emoji: '🦉', name: 'Owl', category: 'Animals and Nature' },
    { emoji: '🐍', name: 'Snake', category: 'Animals and Nature' },
    { emoji: '🐢', name: 'Turtle', category: 'Animals and Nature' },
    { emoji: '🐠', name: 'Tropical Fish', category: 'Animals and Nature' },
    // Travel and Transportation
    { emoji: "🚕", name: "Taxi", category: "Travel and Transportation" },
    { emoji: "🚙", name: "Sport Utility Vehicle", category: "Travel and Transportation" },
    { emoji: "🚌", name: "Bus", category: "Travel and Transportation" },
    { emoji: "🚎", name: "Trolleybus", category: "Travel and Transportation" },
    { emoji: "🏎️", name: "Racing Car", category: "Travel and Transportation" },
    { emoji: "🚓", name: "Police Car", category: "Travel and Transportation" },
    { emoji: "🚑", name: "Ambulance", category: "Travel and Transportation" },
    { emoji: "🚒", name: "Fire Engine", category: "Travel and Transportation" },
    { emoji: "🚐", name: "Minibus", category: "Travel and Transportation" },
    { emoji: "🛻", name: "Pickup Truck", category: "Travel and Transportation" },
    { emoji: "🚚", name: "Delivery Truck", category: "Travel and Transportation" },
    { emoji: "🚛", name: "Articulated Lorry", category: "Travel and Transportation" },
    { emoji: "🚜", name: "Tractor", category: "Travel and Transportation" },
    { emoji: "🛵", name: "Motor Scooter", category: "Travel and Transportation" },
    { emoji: "🏍️", name: "Motorcycle", category: "Travel and Transportation" },
    { emoji: "🛺", name: "Auto Rickshaw", category: "Travel and Transportation" },
    { emoji: "🚲", name: "Bicycle", category: "Travel and Transportation" },
    // Activities
    { emoji: "🏈", name: "American Football", category: "Activities" },
    { emoji: "⚾", name: "Baseball", category: "Activities" },
    { emoji: "🥎", name: "Softball", category: "Activities" },
    { emoji: "🏐", name: "Volleyball", category: "Activities" },
    { emoji: "🏉", name: "Rugby Football", category: "Activities" },
    { emoji: "🎾", name: "Tennis", category: "Activities" },
    { emoji: "🥏", name: "Flying Disc", category: "Activities" },
    { emoji: "🏓", name: "Ping Pong", category: "Activities" },
    { emoji: "🏸", name: "Badminton", category: "Activities" },
    { emoji: "🥊", name: "Boxing Glove", category: "Activities" },
    { emoji: "🥋", name: "Martial Arts Uniform", category: "Activities" },
    { emoji: "⛳", name: "Flag in Hole", category: "Activities" },
    { emoji: "🏹", name: "Bow and Arrow", category: "Activities" },
    { emoji: "🎣", name: "Fishing Pole", category: "Activities" },
    { emoji: "🤿", name: "Diving Mask", category: "Activities" },
    { emoji: "🎽", name: "Running Shirt", category: "Activities" },
    // Objects
    { emoji: '⌚', name: 'Watch', category: 'Objects' },
    { emoji: '📱', name: 'Mobile Phone', category: 'Objects' },
    { emoji: '📲', name: 'Mobile Phone with Arrow', category: 'Objects' },
    { emoji: '💻', name: 'Laptop', category: 'Objects' },
    { emoji: '⌨️', name: 'Keyboard', category: 'Objects' },
    { emoji: '🖥️', name: 'Desktop Computer', category: 'Objects' },
    { emoji: '🖨️', name: 'Printer', category: 'Objects' },
    { emoji: '🖱️', name: 'Computer Mouse', category: 'Objects' },
    { emoji: '🖲️', name: 'Trackball', category: 'Objects' },
    { emoji: '🕹️', name: 'Joystick', category: 'Objects' },
    { emoji: '🗜️', name: 'Clamp', category: 'Objects' },
    { emoji: '💽', name: 'Computer Disk', category: 'Objects' },
    { emoji: '💾', name: 'Floppy Disk', category: 'Objects' },
    { emoji: '💿', name: 'Optical Disk', category: 'Objects' },
    { emoji: '📀', name: 'DVD', category: 'Objects' },
    { emoji: '📼', name: 'Videocassette', category: 'Objects' },
    { emoji: '📷', name: 'Camera', category: 'Objects' },
    { emoji: '📸', name: 'Camera with Flash', category: 'Objects' },
    { emoji: '📹', name: 'Video Camera', category: 'Objects' },
    { emoji: '🎥', name: 'Movie Camera', category: 'Objects' },
    { emoji: '📽️', name: 'Film Projector', category: 'Objects' },
    // Flags
    { emoji: "🇬🇧", name: "Flag: United Kingdom", category: "Flags" },
    { emoji: "🇨🇦", name: "Flag: Canada", category: "Flags" },
    { emoji: "🇦🇺", name: "Flag: Australia", category: "Flags" },
    { emoji: "🇫🇷", name: "Flag: France", category: "Flags" },
    { emoji: "🇩🇪", name: "Flag: Germany", category: "Flags" },
    { emoji: "🇮🇹", name: "Flag: Italy", category: "Flags" },
    { emoji: "🇯🇵", name: "Flag: Japan", category: "Flags" },
    { emoji: "🇰🇷", name: "Flag: South Korea", category: "Flags" },
    { emoji: "🇨🇳", name: "Flag: China", category: "Flags" },
    { emoji: "🇧🇷", name: "Flag: Brazil", category: "Flags" },
    { emoji: "🇷🇺", name: "Flag: Russia", category: "Flags" },
    { emoji: "🇮🇳", name: "Flag: India", category: "Flags" },
    { emoji: "🇲🇽", name: "Flag: Mexico", category: "Flags" },
    { emoji: "🇪🇸", name: "Flag: Spain", category: "Flags" },
    { emoji: "🇳🇱", name: "Flag: Netherlands", category: "Flags" },
    { emoji: "🇿🇦", name: "Flag: South Africa", category: "Flags" },
    // Symbols
    { emoji: "💛", name: "Yellow Heart", category: "Symbols" },
    { emoji: "💚", name: "Green Heart", category: "Symbols" },
    { emoji: "💙", name: "Blue Heart", category: "Symbols" },
    { emoji: "💜", name: "Purple Heart", category: "Symbols" },
    { emoji: "🖤", name: "Black Heart", category: "Symbols" },
    { emoji: "💔", name: "Broken Heart", category: "Symbols" },
    { emoji: "⚡", name: "High Voltage", category: "Symbols" },
    { emoji: "🔥", name: "Fire", category: "Symbols" },
    { emoji: "💥", name: "Collision", category: "Symbols" },
    { emoji: "💫", name: "Dizzy", category: "Symbols" },
    { emoji: "⭐", name: "Star", category: "Symbols" },
    { emoji: "🌟", name: "Glowing Star", category: "Symbols" },
    { emoji: "☀️", name: "Sun", category: "Symbols" },
    { emoji: "☁️", name: "Cloud", category: "Symbols" },
    { emoji: "⚠️", name: "Warning", category: "Symbols" },
    { emoji: "❌", name: "Cross Mark", category: "Symbols" },
];

const CATEGORY_ICONS = {
    'Faces and Expressions': '😀',
    'Food and Drink': '🍔',
    'Animals and Nature': '🐶',
    'Travel and Transportation': '🚗',
    'Activities': '⚽',
    'Objects': '💡',
    'Flags': '🏁',
    'Symbols': '✅',
    'Favorites': '❤️'
};
let favoriteEmojis = JSON.parse(localStorage.getItem('favorites')) || [];

const ALL_CATEGORIES = Object.keys(CATEGORY_ICONS);


// Main Script (equivalent to script.js)
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const searchInput = document.getElementById('emoji-search');
    const emojiGrid = document.getElementById('emoji-grid-container');
    const categoryNav = document.getElementById('category-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const emojiCounter = document.getElementById('emoji-counter');

    let currentCategory = 'All';

    // --- Theme Toggle Logic ---
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    }

    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark-theme');
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    initializeTheme();

    // --- Category Logic ---
    function renderCategories() {
        const allBtn = document.createElement('button');
        allBtn.textContent = 'All Emojis';
        allBtn.className = 'category-btn active';
        allBtn.dataset.category = 'All';
        categoryNav.appendChild(allBtn);

        ALL_CATEGORIES.forEach(category => {
            const btn = document.createElement('button');
            const icon = CATEGORY_ICONS[category] || '';
            btn.textContent = `${icon} ${category}`;
            btn.className = 'category-btn';
            btn.dataset.category = category;
            categoryNav.appendChild(btn);
        });
        
        categoryNav.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn) {
                const category = btn.dataset.category;
                currentCategory = category;
                
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Close menu on mobile
                if (window.innerWidth <= 768) {
                    categoryNav.classList.remove('open');
                    menuToggle.innerHTML = '&#9776;';
                }

                filterAndRenderGrid();
            }
        });
    }

   function createEmojiCard(item) {
    const card = document.createElement('div');
    card.className = 'emoji-card';

    // زر القلب
    const heartBtn = document.createElement('button');
    heartBtn.className = 'heart-btn';
    const isFavorite = favoriteEmojis.some(fav => fav.emoji === item.emoji);
    heartBtn.textContent = isFavorite ? '❤️' : '♡';
    if (isFavorite) heartBtn.classList.add('active');

    heartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        heartBtn.classList.toggle('active');

        if (heartBtn.classList.contains('active')) {
            heartBtn.textContent = '❤️';
            if (!favoriteEmojis.some(fav => fav.emoji === item.emoji)) {
                favoriteEmojis.push(item);
                localStorage.setItem('favorites', JSON.stringify(favoriteEmojis));
            }
        } else {
            heartBtn.textContent = '♡';
            favoriteEmojis = favoriteEmojis.filter(fav => fav.emoji !== item.emoji);
            localStorage.setItem('favorites', JSON.stringify(favoriteEmojis));
        }

        // تحديث قسم المفضلة لو هو مفتوح حاليًا
        if (currentCategory === 'Favorites') filterAndRenderGrid();
    });

    // باقي الكارد
    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji';
    emojiDiv.textContent = item.emoji;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'emoji-name';
    nameDiv.textContent = item.name;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '📋 Copy';
    copyBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(item.emoji);
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => copyBtn.textContent = '📋 Copy', 800);
        } catch (err) {
            copyBtn.textContent = '❌ Error';
            setTimeout(() => copyBtn.textContent = '📋 Copy', 800);
        }
    });

    card.append(heartBtn, emojiDiv, nameDiv, copyBtn);
    setTimeout(() => card.classList.add('fade-in'), 10);

    return card;
}


    function filterAndRenderGrid() {
    const searchTerm = searchInput.value.toLowerCase();
    emojiGrid.innerHTML = '';

    let filteredEmojis;

    if (currentCategory === 'Favorites') {
        // البحث في المفضلة فقط
        filteredEmojis = favoriteEmojis.filter(item =>
            item.name.toLowerCase().includes(searchTerm) || item.emoji.includes(searchTerm)
        );
    } else if (searchTerm) {
        // لو في قسم All → البحث في كل الإيموجيز
        if (currentCategory === 'All') {
            filteredEmojis = EMOJI_COLLECTION.filter(item =>
                item.name.toLowerCase().includes(searchTerm) || item.emoji.includes(searchTerm)
            );
        } else {
            // البحث بس في القسم الحالي
            filteredEmojis = EMOJI_COLLECTION.filter(item =>
                item.category === currentCategory &&
                (item.name.toLowerCase().includes(searchTerm) || item.emoji.includes(searchTerm))
            );
        }
    } else {
        // بدون بحث
        if (currentCategory === 'All') {
            filteredEmojis = EMOJI_COLLECTION.slice(0, 18);
        } else {
            filteredEmojis = EMOJI_COLLECTION.filter(item => item.category === currentCategory);
        }
    }

    // إنشاء الكروت
    filteredEmojis.forEach(item => emojiGrid.appendChild(createEmojiCard(item)));

    // عداد الإيموجيز الظاهرة
    emojiCounter.textContent = `${filteredEmojis.length} Emojis Displayed`;

    // زر show more
    const showMoreBtn = document.getElementById("show-more-btn");
    if (currentCategory !== 'Favorites' && !searchTerm) {
        showMoreBtn.style.display = 'block';
        showMoreBtn.onclick = function() {
            const link = String(currentCategory).toLowerCase().replace(/ /g, '-') + '.html';
            window.location.href = link;
        };
    } else {
        showMoreBtn.style.display = 'none';
    }
}


    searchInput.addEventListener('input', filterAndRenderGrid);

    // --- Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        const isOpen = categoryNav.classList.toggle('open');
        menuToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });


    // Initialize
    renderCategories();
    filterAndRenderGrid();
});

const showMoreBtn = document.getElementById("show-more-btn");

showMoreBtn.onclick = function() {
  window.location.href = "https://example.com/more-emojis"; // ضع هنا الرابط المطلوب
};

const clearBtn = document.getElementById('clear-search');

// إظهار/إخفاء زر X أثناء الكتابة
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
    filterAndRenderGrid();
});

// مسح النص عند الضغط على X
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    filterAndRenderGrid();
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("heart-btn")) {
    e.target.classList.toggle("active");
    e.target.textContent = e.target.classList.contains("active") ? "❤️" : "♡";
  }
});

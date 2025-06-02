// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Elements
    const heroSection = document.getElementById('hero-section');
    const heroSliderContainer = document.getElementById('hero-slider-container');
    const hotelLogoHero = document.getElementById('hotel-logo-hero');
    const heroMainTitleAr = document.getElementById('hero-main-title-ar');
    const heroSubtitleAr = document.getElementById('hero-subtitle-ar');
    const heroButtonTextAr = document.getElementById('hero-button-text-ar');
    const viewMenuBtn = document.getElementById('view-menu-btn');

    // Menu View Elements
    const menuView = document.getElementById('menu-view');
    const menuHeader = document.getElementById('menu-header'); // Main sticky header
    const hotelLogoHeader = document.getElementById('hotel-logo-header');
    const hotelNameArHeader = document.getElementById('hotel-name-ar-header');
    const hotelNameEnHeader = document.getElementById('hotel-name-en-header');
    const backToHeroBtn = document.getElementById('back-to-hero-btn');

    const categoryNav = document.getElementById('category-nav'); // Sticky category navigation bar
    const currentCategoryMainImage = document.getElementById('current-category-main-image');
    const currentCategoryNameAr = document.getElementById('current-category-name-ar');
    const currentCategoryNameEn = document.getElementById('current-category-name-en');
    const menuItemsContainer = document.getElementById('menu-items-container');
    const categoryInfoHeader = document.getElementById('category-info-header');

    const roomServiceAr = document.getElementById('room-service-ar');
    const roomServiceEn = document.getElementById('room-service-en');
    const pageTitle = document.getElementById('pageTitle');

    // Variables for Hero Slider
    let currentSlideIndex = 0;
    let heroSlides = [];
    const slideAnimationDuration = 10; // seconds
    const slideIntervalTime = slideAnimationDuration * 1000 + 1500; // ms
    let slideInterval;

    // ------ INITIALIZATION ------
    if (typeof menuConfigData !== 'undefined') {
        console.log("menuConfigData loaded successfully.");
        setupInitialPage();

        if (heroSliderContainer && menuConfigData.heroSliderImages && menuConfigData.heroSliderImages.length > 0) {
            console.log("Setting up hero slider...");
            setupHeroSlider();
        } else if (heroSection && menuConfigData.hotelBackgroundImage) {
            console.log("Using single hero background image.");
            // heroSection.style.backgroundImage = `url('${menuConfigData.hotelBackgroundImage}')`; // Keep if needed
        }

        populateCategories();
        setupEventListeners();
    } else {
        console.error("Menu configuration (menuConfigData) is not loaded.");
        if(document.body) document.body.innerHTML = `<p style="color:red; text-align:center; padding: 20px;">Error: Menu configuration not found. Please check console.</p>`;
    }

    // ------ HELPER FUNCTION FOR SCROLLING ------
    function scrollToHeaderTop() {
        if (menuHeader) {
            // Using 'start' ensures the top of menuHeader aligns with the top of the scroll container.
            // For the whole page, this means top of viewport.
            menuHeader.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log(`Scrolled to the top of menuHeader.`);
        } else {
            console.warn("menuHeader not found for scrolling, scrolling to window top instead.");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
    
    // ------ SETUP FUNCTIONS ------
    function setupInitialPage() {
        console.log("Running setupInitialPage...");
        if (pageTitle) pageTitle.textContent = `${menuConfigData.hotelName_ar || 'القائمة'} | ${menuConfigData.hotelName_en || 'Menu'}`;

        if (menuConfigData.hotelLogo && hotelLogoHero) {
            hotelLogoHero.src = menuConfigData.hotelLogo;
            hotelLogoHero.alt = `${menuConfigData.hotelName_ar || ''} Logo`;
        } else if (hotelLogoHero) {
            hotelLogoHero.style.display = 'none';
        }

        if (heroMainTitleAr) heroMainTitleAr.textContent = menuConfigData.heroMainTitle_ar || "أهلاً وسهلاً بكم";
        if (heroSubtitleAr) heroSubtitleAr.textContent = menuConfigData.heroSubtitle_ar || "";
        if (heroButtonTextAr) heroButtonTextAr.textContent = menuConfigData.heroButtonText_ar || "عرض القائمة";

        if (menuConfigData.hotelLogo && hotelLogoHeader) {
            hotelLogoHeader.src = menuConfigData.hotelLogo;
            hotelLogoHeader.alt = `${menuConfigData.hotelName_ar || ''} Logo`;
        } else if (hotelLogoHeader) {
            hotelLogoHeader.style.display = 'none';
        }
        if (hotelNameArHeader) hotelNameArHeader.textContent = menuConfigData.hotelName_ar || "";
        if (hotelNameEnHeader) hotelNameEnHeader.textContent = menuConfigData.hotelName_en || "";

        if (roomServiceAr) roomServiceAr.textContent = menuConfigData.roomServiceNote_ar || "";
        if (roomServiceEn) roomServiceEn.textContent = menuConfigData.roomServiceNote_en || "";
        
        // Ensure menu is hidden initially
        if (menuView) {
            menuView.classList.add('menu-view-hidden');
            menuView.classList.remove('menu-view-visible');
        }
        if (heroSection) {
            heroSection.style.display = 'flex'; // Or 'block' depending on its default
            // heroSection.classList.remove('hidden'); // if using class based hiding
        }

        console.log("setupInitialPage completed.");
    }

    function applySlideAnimation(slideElement) {
        if(!slideElement) return;
        slideElement.style.animation = 'none';
        void slideElement.offsetHeight; // Trigger reflow
        slideElement.style.animation = `slideKenBurnsPanRightToLeft ${slideAnimationDuration}s ease-in-out forwards`;
    }

    function setupHeroSlider() {
        if (!heroSliderContainer) {
            console.warn("heroSliderContainer not found.");
            return;
        }
        heroSliderContainer.innerHTML = '';
        heroSlides = [];

        menuConfigData.heroSliderImages.forEach((imageUrl, index) => {
            const slide = document.createElement('div');
            slide.classList.add('hero-slide');
            slide.style.backgroundImage = `url('${imageUrl}')`;

            if (index === 0) {
                slide.classList.add('active');
                applySlideAnimation(slide);
            }
            heroSliderContainer.appendChild(slide);
            heroSlides.push(slide);
        });

        if (heroSlides.length > 1) {
            startSlideShow();
        } else if (heroSlides.length === 1 && heroSlides[0]) {
            if(!heroSlides[0].classList.contains('active')) heroSlides[0].classList.add('active');
            applySlideAnimation(heroSlides[0]);
        }
        console.log("Hero slider setup with " + heroSlides.length + " slides.");
    }

    function showNextSlide() {
        if (heroSlides.length < 2) return;

        const currentActiveSlide = heroSlides[currentSlideIndex];
        currentActiveSlide.classList.remove('active');
        currentActiveSlide.style.animation = 'none';

        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;

        const nextActiveSlide = heroSlides[currentSlideIndex];
        applySlideAnimation(nextActiveSlide);
        nextActiveSlide.classList.add('active');
        console.log("Switched to slide: " + currentSlideIndex);
    }

    function startSlideShow() {
        console.log("Starting slideshow...");
        stopSlideShow();
        if (heroSlides.length > 0) {
            if (heroSlides[currentSlideIndex]) {
                if (!heroSlides[currentSlideIndex].classList.contains('active')) {
                    heroSlides[currentSlideIndex].classList.add('active');
                }
                applySlideAnimation(heroSlides[currentSlideIndex]);
            }
            if (heroSlides.length > 1) {
                slideInterval = setInterval(showNextSlide, slideIntervalTime);
            }
        }
    }

    function stopSlideShow() {
        console.log("Stopping slideshow.");
        clearInterval(slideInterval);
    }

    function setupEventListeners() {
        console.log("Setting up event listeners...");
        if (viewMenuBtn) {
            console.log("View Menu Button found, attaching listener.");
            viewMenuBtn.addEventListener('click', (event) => {
                console.log("View Menu Button clicked!");
                event.preventDefault();

                if (heroSlides.length > 0) stopSlideShow();

                // 1. Hide hero section
                if (heroSection) {
                    heroSection.style.display = 'none'; // Or heroSection.classList.add('hidden');
                    console.log("Hero section hidden.");
                }

                // 2. Show menu view
                if (menuView) {
                    menuView.classList.remove('menu-view-hidden');
                    menuView.classList.add('menu-view-visible');
                    console.log("Menu view made visible.");
                }

                // 3. Populate content for the first category
                if (menuConfigData.categories && menuConfigData.categories.length > 0) {
                    displayCategoryItems(menuConfigData.categories[0].id);
                    setActiveButton(menuConfigData.categories[0].id);
                }

                // 4. Scroll to the top of the menu header
                // Use a minimal timeout to ensure DOM is updated and transitions have started
                setTimeout(() => {
                    scrollToHeaderTop();
                }, 50); // Adjust timing if needed, 0 might also work

            });
        } else {
            console.warn("View Menu Button (view-menu-btn) not found!");
        }

        if (backToHeroBtn) {
            console.log("Back to Hero Button found, attaching listener.");
            backToHeroBtn.addEventListener('click', () => {
                console.log("Back to Hero Button clicked!");
                
                // 1. Hide menu view (CSS transition will handle smoothness)
                if (menuView) {
                    menuView.classList.remove('menu-view-visible');
                    menuView.classList.add('menu-view-hidden');
                    console.log("Menu view hidden.");
                }

                // 2. Scroll to page top before hero reappears
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // 3. Show hero section after menu has transitioned out and page has scrolled
                if (heroSection) {
                    // Delay showing hero to allow menu fade-out and scroll to complete
                    setTimeout(() => {
                        heroSection.style.display = 'flex'; // Or 'block', or heroSection.classList.remove('hidden');
                        if (heroSlides.length > 0) startSlideShow();
                        console.log("Hero section made visible.");
                    }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--menu-transition-duration') || '0.4s') * 1000 + 50); // Match CSS transition
                }
            });
        } else {
            console.warn("Back to Hero Button (back-to-hero-btn) not found!");
        }
        console.log("Event listeners setup completed.");
    }

    function populateCategories() {
        if (!categoryNav || !menuConfigData.categories) {
            console.warn("Category nav or categories data missing for populateCategories.");
            return;
        }
        categoryNav.innerHTML = '';
        console.log("Populating " + menuConfigData.categories.length + " categories.");

        menuConfigData.categories.forEach(category => {
            const button = document.createElement('button');
            button.dataset.categoryId = category.id;
            button.innerHTML = `
                <span class="category-name-ar arabic-text">${category.name_ar}</span>
                <span class="category-name-en english-text">${category.name_en || ''}</span>
            `;

            button.addEventListener('click', () => {
                console.log("Category button clicked: " + category.id);
                displayCategoryItems(category.id);
                setActiveButton(category.id);
                // Scroll to ensure category-nav is visible after clicking a category
                // (might not be strictly necessary if already scrolled to menuHeader top)
                setTimeout(() => { // Add small delay for content rendering
                    if (menuHeader.getBoundingClientRect().top < 0) { // Only scroll if header is out of view
                         scrollToHeaderTop();
                    }
                }, 50);
            });
            categoryNav.appendChild(button);
        });
    }

    function displayCategoryItems(categoryId) {
        const category = menuConfigData.categories.find(cat => cat.id === categoryId);
        if (!category) {
            console.warn("Category not found for ID: " + categoryId);
            return;
        }

        if (currentCategoryNameAr) currentCategoryNameAr.textContent = category.name_ar;
        if (currentCategoryNameEn) currentCategoryNameEn.textContent = category.name_en || '';

        if (category.mainImage && currentCategoryMainImage && categoryInfoHeader) {
            currentCategoryMainImage.src = category.mainImage;
            currentCategoryMainImage.alt = category.name_en || category.name_ar;
            currentCategoryMainImage.style.display = 'block';
            categoryInfoHeader.style.visibility = 'visible'; // Ensure wrapper is visible
        } else if (currentCategoryMainImage && categoryInfoHeader) {
            currentCategoryMainImage.src = ""; // Clear src
            currentCategoryMainImage.alt = "";
            currentCategoryMainImage.style.display = 'none';
            categoryInfoHeader.style.visibility = 'hidden'; // Hide wrapper
        }


        if (!menuItemsContainer) {
            console.warn("menuItemsContainer not found for displaying items.");
            return;
        }
        menuItemsContainer.innerHTML = '';
        menuItemsContainer.style.opacity = 0; // For fade-in effect

        if (category.items && category.items.length > 0) {
            category.items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item', 'text-only-item');
                itemDiv.style.animationDelay = `${index * 0.05}s`;

                const descAr = item.description_ar || "";
                const descEn = item.description_en || "";
                const priceVal = (typeof item.price === 'string' && item.price.toUpperCase() === "X") || typeof item.price === 'undefined' || item.price === null ?
                    null : Number(item.price);
                const priceString = priceVal !== null ?
                    `<span class="price-val">${priceVal.toLocaleString()}</span> <span class="price-currency-ar arabic-text">${menuConfigData.currency_ar || ''}</span>` :
                    `<span class="price-tba-ar arabic-text">حسب الطلب</span><span class="price-tba-en english-text">Ask Staff</span>`;

                itemDiv.innerHTML = `
                    <div class="item-content">
                        <div class="item-name">
                            <span class="name-ar arabic-text">${item.name_ar}</span>
                            <span class="name-en english-text">${item.name_en || ''}</span>
                        </div>
                        ${ (descAr || descEn) ?
                            `<div class="item-description">
                                ${descAr ? `<span class="desc-ar arabic-text">${descAr}</span>` : ''}
                                ${descEn ? `<span class="desc-en english-text">${descEn}</span>` : ''}
                            </div>`
                            : '<div class="item-description-placeholder"></div>'
                        }
                        <div class="item-price-section">
                            <span class="item-price">${priceString}</span>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(itemDiv);
            });
        } else {
            menuItemsContainer.innerHTML = `
                <p class="no-items-message arabic-text" style="grid-column: 1 / -1;">لا توجد أصناف في هذا القسم حالياً.</p>
                <p class="no-items-message english-text" style="grid-column: 1 / -1;">No items currently in this section.</p>
            `;
        }
        // Fade in items
        setTimeout(() => { menuItemsContainer.style.opacity = 1; }, 50);
    }

    function setActiveButton(categoryId) {
        if (!categoryNav) return;
        const buttons = categoryNav.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.categoryId === categoryId);
            if (button.dataset.categoryId === categoryId) {
                button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    }
});
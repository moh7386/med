// menu-config.js - Updated with detailed descriptions, new items, and new category order

const menuConfigData = {
  hotelName_en: "Marriott Aden Hotel",
  hotelName_ar: "فندق ماريوت عدن",

  heroMainTitle_ar: "اجعل وجبتك اليوم ذكرى لا تُنسى.",
  heroSubtitle_ar: "طعم يشدك",
  heroButtonText_ar: "اكتشف قائمتنا",

  hotelLogo: "images/hotel_logo.png", // تأكد من مسار شعارك
  heroSliderImages: [
    "images/mar.jpg", // صورة الفندق الخارجي
    "images/m.jpg",   // صورة المطعم الداخلي (إذا كانت هي الصورة المناسبة)
    // أضف المزيد من الصور هنا إذا أردت:
    // "images/hero/dish_highlight_1.jpg",
    // "images/hero/restaurant_interior_2.jpg",
    // "images/hero/dish_highlight_2.jpg"
  ],

  currency_en: "YER",
  currency_ar: "ريال",
  roomServiceNote_en: "All rights reserved Marriott Hotel 2025",
  roomServiceNote_ar: "جميع الحقوق محفوظة فندق ماريوت 2025",
  categories: [
    // 1. الشوربة (Soups)
    {
      id: "soups",
      name_en: "Soups",
      name_ar: "الشوربة",
      mainImage: "images/soups_collage.jpg",
      items: [
        {
          name_en: "Lentil Soup",
          name_ar: "شوربة عدس",
          price: 2500,
          description_ar: "شوربة العدس بالطريقة الأصلية، مع البهارات الشرقية.",
          description_en: "tentil soup. Tradition-al lentil soup seasoned with oriental spices."
        },
        {
          name_en: "Fresh Vegetable Soup",
          name_ar: "شوربة الخضروات الطازجة",
          price: 2000,
          description_ar: "خضار طازجة مقطعة.",
          description_en: "Fresh vegetable soup: Diced fresh vegetables."
        },
        {
          name_en: "Chicken Soup (Yemeni Style)",
          name_ar: "شوربة الدجاج (بالطريقة اليمنية)",
          price: 4000,
          description_ar: "شوربة الدجاج المقلية مع الخضروات الطازجة على الطريقة اليمنية والبهارات.",
          description_en: "Chicken soup (Yemeni style): Boiled chicken with fresh Vegetable and spices"
        },
        {
            name_en: "Shrimp Soup",
            name_ar: "شوربة الجمبري",
            price: 8000,
            description_ar: "جمبري طازج مع خضار مقلية، ملح، فلفل أو بهارات حسب الطلب.",
            description_en: "Fresh shrimp soup with fried vegetables, salt, pepper or spices upon request."
        },
		{
          name_en: "Soup of the day",
          name_ar: "شوربة اليوم",
          price: 2500,
          description_ar: "شوربة اليوم من اختيار شيف المطبخ مكونات لا تقاوم .",
          description_en: "Today's soup, selected by the kitchen chef, with irresistible ingredients."
        }
      ]
    },
    // 2. السلطات والمقبلات (Appetizers & Salads)
    {
      id: "appetizers_salads",
      name_en: "Appetizers & Salads",
      name_ar: "السلطات والمقبلات",
      mainImage: "images/appetizers_background.jpg",
      items: [
        {
          name_en: "Green Salad",
          name_ar: "سلطة خضراء",
          price: 2500,
          description_ar: "خضار طازجة مقطعة ومتبلة مع زيت الزيتون والليمون.",
          description_en: "Assorted cut fresh vegetables marinated with olive oil and lemon dressing."
        },
        {
          name_en: "Mixed Cheese Platter",
          name_ar: "طبق أجبان مشكلة",
          price: 6000,
          description_ar: "تشكيلة من الجبن الأبيض وجبنة شيدر والجبن المثلث مع الزيتون وشرائح الخيار والطماطم.",
          description_en: "Assorted platter of white cheese, cheddar cheese, and triangular cheese with olives, sliced tomatoes and cucumbers."
        },
        {
          name_en: "Tuna Fish Salad",
          name_ar: "سلطة سمك التونة",
          price: 5500,
          description_ar: "سلطة مع الطماطم والخيار والبصل وصوص الليمون.",
          description_en: "Lettuce, onion, tomato, and cucumber salad with oil lemon sauce."
        },
        {
          name_en: "Greek Salad",
          name_ar: "سلطة يونانية",
          price: 3500,
          description_ar: "جبنة فيتا، طماطم، خيار، بصل، زيتون أسود متبله مع صلصة زيت الزيتون والخل.",
          description_en: "Feta cheese, tomato, cucumber, onion, and black olives marinated with olive oil and vinegar dressing."
        },
        {
          name_en: "Marriott's Famous Salad (Chef's Choice)",
          name_ar: "سلطة ماريوت الشهيرة (من اختيار الشيف)",
          price: 7000,
          description_ar: "مزيج فريد من المكونات الطازجة من اختيار الشيف.",
          description_en: "Unique blend of fresh ingredients chosen by our chef."
        },
        {
            name_en: "Hummus",
            name_ar: "الحمص",
            price: 2800,
            description_ar: "حمص مسلوق مع طحينة، ليمون، ملح، ثوم وزيت الزيتون.",
            description_en: "Boiled chickpeas blended with tahini, lemon, salt, garlic, and olive oil."
        },
        {
            name_en: "Tabbouleh",
            name_ar: "تبولة لبناني",
            price: 2700,
            description_ar: "بقدونس مفروم وطماطم وبصل ونعناع وزيت الزيتون وبرغل.",
            description_en: "Finely chopped parsley, tomatoes, onions, and mint mixed with olive oil and bulgur."
        },
        {
            name_en: "Mtabbal Eggplant",
            name_ar: "متبل باذنجال",
            price: 2200,
            description_ar: "باذنجان مع بصل مفروم، طحينة، عصير ليمون، ثوم، لبن وزيت الزيتون، ملح حسب الطلب.",
            description_en: "Roasted eggplant dip with minced onions, tahini, lemon juice, garlic, yogurt, olive oil, and salt upon request."
        },
        {
            name_en: "Fattoush Salad",
            name_ar: "سلطة فتوش",
            price: 2800,
            description_ar: "رغيف عربي مقطع، زيت الزيتون، خس مقطع، طماطم، خيار، فلفل أخضر تقدم مع تبس الرمان.",
            description_en: "Mixed green salad with chopped lettuce, tomatoes, cucumbers, green pepper, olive oil, and toasted or fried Arabic bread."
        },
        {
            name_en: "Yogurt with Cucumber Salad",
            name_ar: "سلطة زبادي بالخيار",
            price: 3000,
            description_ar: "زبادي طازج مع قطع الخيار المنعشة.",
            description_en: "Fresh yogurt mixed with refreshing cucumber pieces."
        },
        {
            name_en: "Yogurt with Tuna Salad",
            name_ar: "سلطة زبادي بالتونة",
            price: 4000,
            description_ar: "زبادي طازج مع قطع التونة.",
            description_en: "Fresh yogurt mixed with tuna pieces."
        }
      ]
	},
   
    // 4. المشاوي (From the Grill)
    {
      id: "main_course_grill",
      name_en: "From the Grill",
      name_ar: "الطبق الرئيسي (المشاوي)",
      mainImage: "images/grill_background.jpg",
      items: [
        { name_en: "Mixed Grill Platter", name_ar: "مشاوي مشكلة", price: 15000, description_ar: "طاووق، شيش كباب، كفتة، تشكيلة من اسياخ شيش المقليه يقدم مع البطاطس.", description_en: "Assorted skewers of shish taouk, shish kebab, and kofta. Served with French fries." },
        { name_en: "Shish Taouk", name_ar: "شيش طاووق", price: 7000, description_ar: "قطع دجاج متبلة بصلصة الثوم، الليمون والخل. يقدم مع البطاطس المقلية.", description_en: "Chicken cubes marinated in garlic, lemon, and vinegar sauce. Served with French fries." },
        { name_en: "Chicken Kofta", name_ar: "كفتة دجاج", price: 8000, description_ar: "الدجاج المفروم المتبل مع البقدونس والبصل والبهارات العربية يقدم مع البطاطس المقلية.", description_en: "Minced chicken marinated with parsley, onion, and Arabic spices. Served with French fries." },
        { name_en: "Meat Kofta", name_ar: "كفتة لحم", price: 13000,
          description_ar: "اللحم المفروم المتبل مع البقدونس والبصل والبهارات العربية يقدم مع البطاطس المقلية.", description_en: "Minced meat marinated with parsley, onion, and Arabic spices. Served with French fries." },
        { name_en: "Broasted Chicken", name_ar: "دجاج بروست", price: 5000,
          description_ar: "دجاجة متبلة ومقلية بنكهة البهارات الخاصة. ويقدم مع البطاطس المقلية.", description_en: " chicken marinated and deep-fried with special spices. Served with French fries." },
        { name_en: "Grilled Chicken (Half)", name_ar: "دجاج مشوي (نصف دجاجة)", price: 8500, description_ar: "نصف دجاجة متبلة مع الثوم، صلصة الليمون، زيت الزيتون. يقدم مع الأرز أو البطاطس المقلية.", description_en: "Half boneless chicken marinated with garlic, lemon sauce, and olive oil. Served with rice or French fries." },
        { name_en: "Grilled Shrimp", name_ar: "جمبري مشوي", price: 15000, description_ar: "جمبري متبل مع الثوم، صلصة الليمون، زيت الزيتون والكزبرة الطازجة يقدم مع البطاطس المقلية، أو الأرز.", description_en: "Grilled shrimp marinated with garlic, lemon sauce, olive oil, and fresh coriander. Served with French fries or rice." },
        { name_en: "Grilled Derk Fish", name_ar: "سمك مشوي ديرك", price: 13000, description_ar: "سمك ديرك مشوي.  ", description_en: "Grilled Derk fish. " },
        { name_en: "Derk Fish Tafaaya", name_ar: "سمك طفاية ديرك", price: 13000, description_ar: "سمك ديرك مطبوخ بطريقة الطفاية.  ", description_en: "Derk fish cooked Tafaaya style. " },
        { name_en: "Direk Broasted Fish", name_ar: "سمك برست ديرك", price: 13000, description_ar: "سمك ديرك مقلي بروست.", description_en: "Broasted fried Derk fish." },
        { name_en: "Thamd Broasted Fish", name_ar: "سمك برست ثمد", price: 9000, description_ar: "سمك ثمد مقلي بروست.  ", description_en: "Broasted fried Thamd fish. " },
        { name_en: "Grilled Kan'ad Fish", name_ar: "سمك مشوي ثمد", price: 9000, description_ar: "سمك كنعد مشوي.  ", description_en: "Grilled Kan'ad fish. " },
        { name_en: "Kan'ad Fish Tafaaya", name_ar: "سمك طفاية ثمد", price: 9000, description_ar: "سمك كنعد مطبوخ بطريقة الطفاية.  ", description_en: "Kan'ad fish cooked Tafaaya style. " }
       
	  ]
    },
    // 5. ركن الباستا (Pasta Corner)
    {
      id: "pasta_corner",
      name_en: "Pasta Corner (Spaghetti)",
      name_ar: "ركن الباستا (سباغيتي)",
      mainImage: "images/pasta_collage.jpg",
      items: [
        {
          name_en: "Spaghetti with Tuna",
          name_ar: "مكرونة بالتونة",
          price: 5500,
          description_ar: "باستا مع صلصة الطماطم، والتونة والبهارات.",
          description_en: "Pasta with tomato sauce, tuna, and spices."
        },
        {
          name_en: "Spaghetti Bolognese",
          name_ar: "مكرونة بالدقة (بولونيز)",
          price: 9000,
          description_ar: "باستا مع اللحمة المفرومة وصلصة الطماطم الطازجة.",
          description_en: "Pasta with minced meat and fresh tomato sauce."
        },
        {
          name_en: "Spaghetti with Chicken",
          name_ar: "مكرونة بالدجاج",
          price: 7000,
          description_ar: "باستا مع مكعبات الدجاج، صلصة طماطم وبهارات.",
          description_en: "Pasta with chicken cubes, tomato sauce, and spices."
        },
        {
          name_en: "Spaghetti with Fresh Vegetables & Herbs",
          name_ar: "مكرونة بالخضار",
          price: 4000,
          description_ar: "باستا مع الخضار الطازجة والأعشاب.",
          description_en: "Pasta with fresh vegetables and herbs."
        },
        {
          name_en: "Spaghetti with Shrimps",
          name_ar: "مكرونة بالجمبري",
          price: 15000,
          description_ar: "باستا مع الجمبري، صلصة طماطم، والبهارات اليمنية.",
          description_en: "Pasta with shrimps, tomato sauce, and Yemeni spices."
        }
      ]
    },
    // 6. المطبخ اليمني (إفطار وعشاء) - Yemeni Cuisine (Breakfast & Dinner)
    {
      id: "yemeni_cuisine", // ID remains the same, but name changes
      name_en: "Yemeni Cuisine (Breakfast & Dinner)",
      name_ar: "المطبخ اليمني (إفطار)",
      mainImage: "images/yemeni_cuisine_collage.jpg",
      items: [
        { name_en: "Fresh Lamb Liver (Large Portion)", name_ar: "كبدة غنم بلدي (نفر كبير)", price: 7500, description_ar: "كبدة غنم طازجة مطهيه مع البصل والطماطم والفلفل الأخضر والتوابل اليمنية تقدم مع الخبز.", description_en: "Fresh lamb liver cooked with onions, tomato, green chili, and Yemeni spices. Served with bread." },
        { name_en: "Small Meat (Meat Saghar)", name_ar: "لحم صغار", price: 7000, description_ar: "قطع لحم صغيرة مطهوة على الطريقة اليمنية.", description_en: "Small pieces of lamb cooked Yemeni style." },
        { name_en: "Chicken Akda", name_ar: "عقدة دجاج", price: 6000,
          description_ar: "متبلة بنكهة خاصة من التوابل العدنية مطهية مع الخضار تقدم مع الأرز.", description_en: "Chicken cubes marinated with special Adeni spices, cooked with vegetables. Served with rice." },
		{ name_en: "Chicken Curry", name_ar: "دجاج بالكاري", price: 5500, description_ar: "قطع دجاج متبله ومطهيه بالتوابل الهندية تقدم مع الأرز الأبيض.", description_en: "Chicken cubes marinated and cooked with special Indian spices. Served with white rice." },
        { name_en: "Raqat Meat (Thin Meat)", name_ar: "دقة لحم", price: 6500, description_ar: "شرائح لحم رقيقة مطهوة.", description_en: "Thin slices of lamb cooked Yemeni style." },
        { name_en: "Shakshouka (Scrambled Eggs)", name_ar: "شكشوكة", price: 3500,
          description_ar: "بيض مخفوق مع الخضروات، البسباس الحار والكزبرة الخضراء تقدم مع الخبز.", description_en: "Eggs scrambled with vegetables, hot chili, and green coriander. Served with bread." },
        { name_en: "Normal Beans", name_ar: "فاصوليا عادي", price: 3500, description_ar: "فاصوليا مطبوخة سادة.", description_en: "Plain cooked beans." },
        { name_en: "Beans Nashif", name_ar: "فاصوليا ناشف", price: 4000, description_ar: "فاصوليا مطبوخة بالطريقة الناشفة.", description_en: "Dry-style cooked beans." },
        { name_en: "Beans with Eggs", name_ar: "فاصوليا بالبيض", price: 4000, description_ar: "فاصوليا مطبوخة مع البيض.", description_en: "Cooked beans with eggs." },
        { name_en: "Beans with Cheese", name_ar: "فاصوليا بالجبن", price: 4000, description_ar: "فاصوليا مطبوخة مع الجبن.", description_en: "Cooked beans with cheese." },
        { name_en: "Beans with Tuna", name_ar: "فاصوليا بالتونة", price: 5500, description_ar: "فاصوليا مطبوخة مع التونة.", description_en: "Cooked beans with tuna." },
        { name_en: "Bean - Plain", name_ar: "فول عادي", price: 3500, description_ar: "فول سادة مطبوخ.", description_en: "Plain cooked fava beans." },
        { name_en: "Bean with Tahini", name_ar: "فول بالطحينية", price: 4000, description_ar: "فول مطبوخ مع الطحينية.", description_en: "Cooked fava beans with tahini." },
        { name_en: "Bean with Eggs", name_ar: "فول بالبيض", price: 4000, description_ar: "فول مطبوخ مع البيض.", description_en: "Cooked fava beans with eggs." },
        { name_en: "Bean with Tuna", name_ar: "فول بالتونة", price: 5500, description_ar: "فول مطبوخ مع التونة.", description_en: "Cooked fava beans with tuna." },
        { name_en: "Bean with Cheese", name_ar: "فول بالجبن", price: 4000, description_ar: "فول مطبوخ مع الجبن.", description_en: "Cooked fava beans with cheese." },
        { name_en: "Bazlia (Peas) - Plain", name_ar: "بازليا سادة", price: 3500, description_ar: "بازلاء مطبوخة سادة.", description_en: "Plain cooked peas." },
        { name_en: "Bazlia with Tuna", name_ar: "بازليا بالتونة", price: 5500, description_ar: "بازلاء مطبوخة مع التونة.", description_en: "Cooked peas with tuna." },
        { name_en: "Bazlia with Eggs", name_ar: "بازليا بالبيض", price: 4000, description_ar: "بازلاء مطبوخة مع البيض.", description_en: "Cooked peas with eggs." },
        { name_en: "Bazlia with Cheese", name_ar: "بازليا بالجبن", price: 4000, description_ar: "بازلاء مطبوخة مع الجبن.", description_en: "Cooked peas with cheese." },
        { name_en: "Fried Eggs (Sunny Side Up)", name_ar: "بيض عيون", price: 4000, description_ar: "بيض مقلي عيون.", description_en: "Fried eggs, sunny side up." },
        { name_en: "Shakshouka (Eggs)", name_ar: " بيض شكشوكة ", price: 4000, description_ar: "شكشوكة مطبوخة", description_en: "Cooked shakshouka." },
		{ name_en: "Eggs with Cheese", name_ar: "بيض سادة", price: 3500, description_ar: "بيض مطبوخ.", description_en: "Eggs cooked." },
        { name_en: "Eggs with Vegetables", name_ar: "بيض  بالخضار", price: 4000, description_ar: "بيض مطبوخة مع الخضار.", description_en: "Eggs cooked with vegetables." },
        { name_en: "Eggs with Cheese", name_ar: "بيض بالجبنة", price: 4000, description_ar: "بيض مطبوخة مع الجبنة.", description_en: "Eggs cooked with cheese." },
		{ name_en: "Eggs with Cheese", name_ar: "بيض بالمشروم", price: 4000, description_ar: "بيض مطبوخة مع المشروم.", description_en: "Eggs cooked with Mashrom." },
        {name_en: "Normal Tomato Sauce",name_ar: "سحاوق عادي",price: 1000,description_ar: "صلصة السحاوق اليمنية التقليدية الحارة.",description_en: "Traditional Yemeni hot sahawq sauce."},
        {name_en: "Tomato Sauce with Cheese",name_ar: "سحاوق جبن",price: 3000,description_ar: "صلصة السحاوق اليمنية مع إضافة الجبن.",description_en: "Traditional Yemeni sahawq sauce with added cheese."}
          ]
    },
	// قسم المطبخ اليمني (العام) - Yemeni Cuisine (General)
    {
      id: "yemeni_cuisine_general", // New ID for the general Yemeni section
      name_en: "Yemeni Cuisine",
      name_ar: "المطبخ اليمني",
      mainImage: "images/yemeni_cuisine_general_collage.jpg", // Placeholder image
      items: [
	    { name_en: "Chicken with Rice", name_ar: "دجاج مع الرز", price: 8500, description_ar: "طبق دجاج مقدم مع الأرز.", description_en: "Chicken dish served with rice." },
        { name_en: "Kabsa (Cold)", name_ar: "كبسة بارد", price: 6000, description_ar: "كبسة باردة (اسأل عن التفاصيل).", description_en: "Cold Kabsa (ask for details)." },
        { name_en: "Kabsa (Hot)", name_ar: "كبسة حار", price: 6000, description_ar: "كبسة حارة (اسأل عن التفاصيل).", description_en: "Hot Kabsa (ask for details)." },
        {name_en: "Normal Tomato Sauce",name_ar: "سحاوق عادي",price: 1000,description_ar: "صلصة السحاوق اليمنية التقليدية الحارة.",description_en: "Traditional Yemeni hot sahawq sauce."},
        {name_en: "Tomato Sauce with Cheese",name_ar: "سحاوق جبن",price: 3000,description_ar: "صلصة السحاوق اليمنية مع إضافة الجبن.",description_en: "Traditional Yemeni sahawq sauce with added cheese."},
        { name_en: "Small Meat (Meat Saghar)", name_ar: "لحم صغار", price: 7000, description_ar: "قطع لحم صغيرة مطهوة على الطريقة اليمنية.", description_en: "Small pieces of lamb cooked Yemeni style." },
        { name_en: "Chicken Akda", name_ar: "عقدة دجاج", price: 6000,
          description_ar: "متبلة بنكهة خاصة من التوابل العدنية مطهية مع الخضار تقدم مع الأرز.", description_en: "Chicken cubes marinated with special Adeni spices, cooked with vegetables. Served with rice." },
		{ name_en: "Chicken Curry", name_ar: "دجاج بالكاري", price: 5500, description_ar: "قطع دجاج متبله ومطهيه بالتوابل الهندية تقدم مع الأرز الأبيض.", description_en: "Chicken cubes marinated and cooked with special Indian spices. Served with white rice." },
        { name_en: "Raqat Meat (Thin Meat)", name_ar: "دقة لحم", price: 6500, description_ar: "شرائح لحم رقيقة مطهوة.", description_en: "Thin slices of lamb cooked Yemeni style." },
		{ name_en: "Grilled Derk Fish", name_ar: "سمك مشوي ديرك", price: 13000, description_ar: "سمك ديرك مشوي.  ", description_en: "Grilled Derk fish. " },
        { name_en: "Derk Fish Tafaaya", name_ar: "سمك طفاية ديرك", price: 13000, description_ar: "سمك ديرك مطبوخ بطريقة الطفاية.  ", description_en: "Derk fish cooked Tafaaya style. " },
        { name_en: "Direk Broasted Fish", name_ar: "سمك برست ديرك", price: 13000, description_ar: "سمك ديرك مقلي بروست.", description_en: "Broasted fried Derk fish." },
        { name_en: "Thamd Broasted Fish", name_ar: "سمك برست ثمد", price: 9000, description_ar: "سمك ثمد مقلي بروست.  ", description_en: "Broasted fried Thamd fish. " },
        { name_en: "Grilled Kan'ad Fish", name_ar: "سمك مشوي ثمد", price: 9000, description_ar: "سمك كنعد مشوي.  ", description_en: "Grilled Kan'ad fish. " },
        { name_en: "Kan'ad Fish Tafaaya", name_ar: "سمك طفاية ثمد", price: 9000, description_ar: "سمك كنعد مطبوخ بطريقة الطفاية.  ", description_en: "Kan'ad fish cooked Tafaaya style. " }
       
        // هذا القسم فارغ حاليًا. يمكنك إضافة أطباق يمنية عامة هنا لا تندرج تحت "إفطار وعشاء".
        // أو معلومات عامة عن المطبخ اليمني.
      ]
    },
	{
      id: "sandwiches",
      name_en: "Sandwiches",
      name_ar: "الساندويتشات",
      mainImage: "images/sandwiches_collage.jpg",
      items: [
        {
          name_en: "Chicken Burger",
            name_ar: "برجر دجاج سنجل", // Changed to specify Chicken Burger
            price: 3500,
            description_ar: "برجر دجاج صافي مع صلصة المايونيز والمخللات والبصل السوتيه يقدم بخبز السمسم والبطاطس المقلية.",
            description_en: "Pure chicken burger with mayonnaise sauce, pickles, and sautéed onions served with sesame bun and French fries."
        },
        {
          name_en: "Double Chicken Burger",
          name_ar: "برجر دجاج دبل",
          price: 5500,
          description_ar: "برجر دجاج دبل مع صلصة المايونيز والمخللات والبصل السوتيه يقدم بخبز السمسم والبطاطس المقلية.",
          description_en: "Double chicken burger with mayonnaise sauce, pickles, and sautéed onions served with sesame bun and French fries."
        },
        {
          name_en: "Tuna Sandwich",
          name_ar: "ساندوتش تونة",
          price: 5000,
          description_ar: "تونة مع بصل مفروم مع مينيز مع خس وطماطم مع خبز محمص.",
          description_en: "Tuna with minced onions, minis, lettuce, and tomato served with toasted bread."
        },
        {
          name_en: "Create Your Own Sandwich",
          name_ar: "اصنع سندويشك حسب رغبتك",
          price: 7000,
          description_ar: "اختيارك من الخبز الأبيض أو الأسمر مع الزبدة أو المايونيز واختيارك من الجبنة، تونا، الدجاج المشوي، يقدم مع البطاطس المقلية.",
          description_en: "Choice of white or whole wheat bread with butter or mayonnaise. Select from cheese, tuna, or grilled chicken. Served with French fries."
        }
      ]
    }, 
    // 7. الحلويات (Desserts)
    {
      id: "desserts",
      name_en: "Desserts",
      name_ar: "الحلويات",
      mainImage: "images/desserts_collage.jpg",
      items: [
        { name_en: "Fresh Fruit Salad", name_ar: "طبق الفواكه الطازجة", price: 9000, description_ar: "تشكيلة من الفواكه الموسمية الطازجة.", description_en: "Assortment of fresh seasonal fruits." },
        { name_en: "Fresh Fruit Platter", name_ar: "سلطة الفواكه الطازجة", price: 6000, description_ar: "قطع فواكه طازجة منوعة.", description_en: "Mixed fresh fruit pieces." }
		]
    },
    // 8. العصائر الباردة (Cold Beverages)
    {
      id: "cold_beverages",
      name_en: "Cold Beverages",
      name_ar: "المشروبات الباردة",
      mainImage: "images/cold_beverages_collage.jpg",
      items: [
        { name_en: "Fresh Orange Juice", name_ar: "عصير برتقال طازج", price: 2500, description_ar: "عصير برتقال طازج ومعصور يومياً.", description_en: "Freshly squeezed orange juice." },
	    { name_en: "Fresh Strawberry Juice", name_ar: "عصير فراولة طازج", price: 2500, description_ar: "عصير فراولة طازج ومعصور يومياً.", description_en: "Freshly squeezed strawberry juice." },
        { name_en: "Fresh Lemon Juice", name_ar: "عصير ليمون طازج", price: 700, description_ar: "عصير ليمون منعش وطازج.", description_en: "Refreshing freshly squeezed lemon juice." },
        { name_en: "Mango Juice", name_ar: "عصير المانجو", price: 2500, description_ar: "عصير مانجو طبيعي.", description_en: "Natural mango juice." },
        { name_en: "Milk with Banana Juice", name_ar: "عصير الحليب بالموز", price: 1800, description_ar: "مزيج الحليب الطازج مع الموز.", description_en: "Fresh milk blended with banana." },
        { name_en: "Ginger Juice", name_ar: "عصير الزنجبيل", price: 1800, description_ar: "عصير زنجبيل طازج ومنعش.", description_en: "Fresh and refreshing ginger juice." },
        { name_en: "Mineral Water", name_ar: "ماء معدني", price: 800, description_ar: "مياه معدنية نقية.", description_en: "Pure mineral water." },
        { name_en: "Soft Drinks", name_ar: "مشروبات غازية", price: 1200, description_ar: "مجموعة متنوعة من المشروبات الغازية.", description_en: "Variety of carbonated soft drinks." }
      ]
    },
    // 9. المشروبات الساخنة (Hot Beverages)
    {
      id: "hot_beverages",
      name_en: "Hot Beverages",
      name_ar: "المشروبات الساخنة",
      mainImage: "images/hot_beverages_collage.jpg",
      items: [
        { name_en: "Turkish Coffee", name_ar: "قهوة تركية", price: 2800, description_ar: "قهوة تركية محضرة بالطريقة التقليدية.", description_en: "Traditional Turkish coffee." },
        { name_en: "Nescafe", name_ar: "نسكافيه", price: 2500, description_ar: "قهوة نسكافيه سريعة التحضير.", description_en: "Instant Nescafe coffee." },
        { name_en: "Milk (Hot/Cold)", name_ar: "حليب بارد / ساخن", price: 1500, description_ar: "حليب طازج بارد أو ساخن.", description_en: "Fresh milk, hot or cold." },
        { name_en: "Tea", name_ar: "شاي", price: 400, description_ar: "شاي أحمر أو أخضر كلاسيكي.", description_en: "Classic red or green tea." },
        { name_en: "Adani Tea", name_ar: "شاي عدني", price: 500, description_ar: "شاي عدني مبهر بالحليب والهيل والبهارات.", description_en: "Spiced Adani tea with milk, cardamom, and other spices." }
      ]
    },
    
    // أقسام إضافية لم تكن في الترتيب المرقم (Breakfast, Sandwiches, Special Fish Dishes)
    {
      id: "breakfast",
      name_en: "Breakfast Favorites",
      name_ar: "الإفطار",
      mainImage: "images/breakfast_collage.jpg",
      items: [
        {
          name_en: "Oriental Breakfast",
          name_ar: "إفطار شرقي",
          price: 8000,
          description_ar: "تشكيلة من الجبن، زيتون، الفول المدمس أو الفاصوليا، الطماطم والخيار واختيارك من البيض حسب رغبتك (مسلوق أو مقلي) ويقدم الحليب أو شاي.",
          description_en: "A variety of cheese, olives, Bean mudammas or beans, tomatoes and cucumber, and your choice of eggs (boiled or fried). Served with milk or tea."
        }
      ]
    },
     
    // أطباق أسماك خاصة (غير موجودة في الترتيب المرقم)
    /* {
      id: "main_course_fish_manual",
      name_en: "Special Fish Dishes",
      name_ar: "أطباق الأسماك الخاصة",
      mainImage: "images/fish_main_collage.jpg",
      items: [
      ]
    }, */
  ]
};

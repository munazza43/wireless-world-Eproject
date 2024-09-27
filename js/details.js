function getId() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id')
    return id;

}


let trainerData = [{
    // XIAOMI PHONES START
    id: 1,
    imgSrc: '../assets/xiaomi/x10.png',
    name: "Xiaomi Mi 13 Ultra",
    details: "High-end flagship with a focus on camera performance, featuring a large AMOLED display, Snapdragon 8 Gen 2 processor, and advanced camera system with Leica optics.",
    price: " Price:$799",
},
{
    id: 2,
    imgSrc: '../assets/xiaomi/x12.png',
    name: "Xiaomi 13 Pro",
    details: "Premium device with a 6.73-inch AMOLED display, Snapdragon 8 Gen 1, and a versatile camera setup including a 50MP main sensor.",
    price: " Price:$699",
},
{
    id: 3,
    imgSrc: '../assets/xiaomi/x2.png',
    name: "Xiaomi Redmi Note 12 Pro+",
    details: "Mid-range phone with a 108MP camera, 6.67-inch AMOLED display, and MediaTek Dimensity 1080 processor, offering great value for money.",
    price: " Price: $399",
},
{
    id: 4,
    imgSrc: '../assets/xiaomi/x3.png',
    name: "Xiaomi Poco F5 Pro",
    details: " High-performance device targeting gamers, with a Snapdragon 8+ Gen 1 processor, 6.67-inch AMOLED display, and a 64MP camera.",
    price: " Price: $499.",
},
{
    id: 5,
    imgSrc: '../assets/xiaomi/x5.png',
    name: "Xiaomi Mi 11 Lite 5G",
    details: " Slim and lightweight with a 6.55-inch AMOLED display, Snapdragon 780G processor, and a 64MP main camera, balancing performance and portability.",
    price: " Price:$349",
},
{
    id: 6,
    imgSrc: '../assets/xiaomi/x6.png',
    name: "Xiaomi Redmi K60 Pro",
    details: " Features a Snapdragon 8 Gen 2 chipset, a 6.67-inch AMOLED display with high refresh rate, and a 50MP main camera, focusing on high performance at a competitive price.",
    price: " Price: $499",
},
{
    id: 7,
    imgSrc: '../assets/xiaomi/x7.png',
    name: "Xiaomi Redmi Note 12",
    details: "A solid mid-range device with a 6.67-inch AMOLED display, Snapdragon 685 processor, and a 48MP main camera. It offers a good balance of performance and features at an affordable price.",
    price: " Price: $180",
},
{
    id: 8,
    imgSrc: '../assets/xiaomi/x9.png',
    name: "Xiaomi Redmi Note 11",
    details: " Features a 6.43-inch AMOLED display, Snapdragon 680 processor, and a 50MP main camera. It's a well-rounded device for everyday use.",
    price: " Price:$160",
},
{
    id: 9,
    imgSrc: '../assets/OFFERS/red-1.png',
    name: "Xiaomi Poco M5",
    details: " Offers a 6.58-inch LCD display with a 90Hz refresh rate, MediaTek Helio G99 processor, and a 50MP main camera. It’s designed for users who need good performance on a budget.",
    price: " Price:$190",
},
{
    id: 10,
    imgSrc: '../assets/OFFERS/red-2.png',
    name: "Xiaomi Redmi 10",
    details: "Comes with a 6.5-inch LCD display, MediaTek Helio G88 processor, and a 50MP main camera. It's a budget-friendly option with decent performance.",
    price: " Price:$140",
},
{
    id: 11,
    imgSrc: '../assets/OFFERS/red-3.png',
    name: "Xiaomi Redmi Note 11",
    details: " Features a 6.43-inch AMOLED display, Snapdragon 680 processor, and a 50MP main camera. It's a well-rounded device for everyday use.",
    price: " Price:$160",
},
{
    id: 12,
    imgSrc: '../assets/OFFERS/red-4.png',
    name: "Xiaomi Redmi Note 12",
    details: " A solid mid-range device with a 6.67-inch AMOLED display, Snapdragon 685 processor, and a 48MP main camera. It offers a good balance of performance and features at an affordable price.",
    price: " Price: $180",
},
// VIVO PHONES START
{
    id: 13,
    imgSrc: '../assets/vivo/vivo-img10.png',
    name: "Vivo X90 Pro",
    details: "High-end flagship with a 6.78-inch AMOLED display, MediaTek Dimensity 9200 processor, and a versatile camera system with advanced imaging capabilities.",
    price: " Price:  $700",
},
{
    id: 14,
    imgSrc: '../assets/vivo/vivo-img11.png',
    name: "Vivo X80 Pro",
    details: " Premium device featuring a 6.78-inch AMOLED display, Snapdragon 8 Gen 1 processor, and a camera setup with a 50MP main sensor, known for excellent performance and camera quality.",
    price: " Price: $650",
},
{
    id: 15,
    imgSrc: '../assets/vivo/vivo-img13.png',
    name: "Vivo V27 Pro",
    details: " Mid-range phone with a 6.78-inch AMOLED display, MediaTek Dimensity 8200 processor, and a 50MP main camera, offering good performance and camera features.",
    price: " Price: $450",
},
{
    id: 16,
    imgSrc: '../assets/vivo/vivo-img14.png',
    name: "Vivo Y78 Pro",
    details: "Features a 6.78-inch AMOLED display, Snapdragon 7 Gen 1 processor, and a 50MP main camera. It is designed to balance performance and affordability.",
    price: " Price: $400",
},
{
    id: 17,
    imgSrc: '../assets/vivo/vivo-img5.png',
    name: "Vivo Y35",
    details: "Budget-friendly option with a 6.58-inch LCD display, Snapdragon 680 processor, and a 50MP main camera, offering decent features for its price.",
    price: " Price: $230 ",
},
{
    id: 18,
    imgSrc: '../assets/vivo/vivo-img6.png',
    name: "Vivo Y22s",
    details: " Entry-level phone with a 6.55-inch LCD display, Snapdragon 680 processor, and a 50MP main camera, suitable for basic use.",
    price: " Price:$200 ",
},
{
    id: 19,
    imgSrc: '../assets/vivo/vivo-img7.png',
    name: "Vivo Y22s",
    details: "Features a 6.55-inch LCD display, MediaTek Helio G85 processor, and a 50MP main camera. It offers good value for those looking for decent performance on a budget.",
    price: " Price: $180 ",
},
{
    id: 20,
    imgSrc: '../assets/vivo/vivo-img8.png',
    name: "Vivo Y21",
    details: "Comes with a 6.51-inch LCD display, MediaTek Helio P35 processor, and a 13MP main camera. It's an affordable option for everyday use.",
    price: " Price:$160 ",
},
{
    id: 21,
    imgSrc: '../assets/OFFERS/v-1.png',
    name: "Vivo Y31",
    details: "Features a 6.58-inch LCD display, Snapdragon 662 processor, and a 48MP main camera. It's a well-rounded budget phone with good performance and camera capabilities.",
    price: " Price: $190",
},
{
    id: 22,
    imgSrc: '../assets/OFFERS/v-2.png',
    name: "Vivo Y15s",
    details: " Offers a 6.51-inch LCD display, MediaTek Helio P35 processor, and a 13MP main camera. It is designed for users who need basic features and performance at a low price.",
    price: " Price:$140",
},
{
    id: 23,
    imgSrc: '../assets/OFFERS/v-3.png',
    name: "Vivo Y21",
    details: " Comes with a 6.51-inch LCD display, MediaTek Helio P35 processor, and a 13MP main camera. It's an affordable option for everyday use.",
    price: " Price:$160",
},
{
    id: 24,
    imgSrc: '../assets/OFFERS/v-4.png',
    name: "Vivo Y22s",
    details: "Features a 6.55-inch LCD display, MediaTek Helio G85 processor, and a 50MP main camera. It offers good value for those looking for decent performance on a budget.",
    price: " Price: $180",
},
// SAMSUNG PHONES START
{
    id: 25,
    imgSrc: '../assets/samsung/s-1.png',
    name: "Samsung Galaxy S23 Ultra",
    details: " Premium flagship with a 6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2 processor, and a 200MP main camera. Known for its high-end performance and advanced camera capabilities.",
    price: " Price:$1,200 ",
},
{
    id: 26,
    imgSrc: '../assets/samsung/s10.png',
    name: "Samsung Galaxy S23+",
    details: "Mid-high-end device featuring a 6.6-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2 processor, and a 50MP main camera. It balances performance and screen size well.",
    price: " Price: $1,000 ",
},
{
    id: 27,
    imgSrc: '../assets/samsung/s12.png',
    name: "Samsung Galaxy A54 5G",
    details: "Mid-range phone with a 6.4-inch Super AMOLED display, Exynos 1380 processor, and a 50MP main camera. It offers good performance and 5G connectivity.",
    price: " Price:$450",
},
{
    id: 28,
    imgSrc: '../assets/samsung/s14.png',
    name: "Samsung Galaxy A34 5G",
    details: "Features a 6.6-inch Super AMOLED display, MediaTek Dimensity 1080 processor, and a 48MP main camera. It provides a good mix of performance and features at a mid-range price.",
    price: " Price:$350 ",
},
{
    id: 29,
    imgSrc: '../assets/samsung/s-5.png',
    name: "Samsung Galaxy M34 5G",
    details: " Offers a 6.5-inch Super AMOLED display, MediaTek Dimensity 1080 processor, and a 50MP main camera. Its designed to offer solid performance and 5G connectivity at a budget-friendly price.",
    price: " Price: $250 ",
},
{
    id: 30,
    imgSrc: '../assets/samsung/s-6.png',
    name: "Samsung Galaxy A24 5G",
    details: " Comes with a 6.5-inch Super AMOLED display, MediaTek Helio G99 processor, and a 50MP main camera. It’s a budget option with decent specs and 5G support.",
    price: " Price:$200 ",
},
{
    id: 31,
    imgSrc: '../assets/samsung/s-7.png',
    name: "Samsung Galaxy A24 5G",
    details: "Features a 6.5-inch Super AMOLED display, MediaTek Helio G99 processor, and a 50MP main camera. It offers a good balance of performance and display quality for a budget phone.",
    price: " Price:$190. "
},
{
    id: 32,
    imgSrc: '../assets/samsung/s-8.png',
    name: "Samsung Galaxy M34 5G",
    details: " Comes with a 6.5-inch Super AMOLED display, MediaTek Dimensity 1080 processor, and a 50MP main camera. It provides solid performance and 5G connectivity at a reasonable price.",
    price: " Price: $180. "
},
{
    id: 33,
    imgSrc: '../assets/OFFERS/s-1.png',
    name: "Samsung Galaxy M13",
    details: " Features a 6.6-inch PLS LCD display, Exynos 850 processor, and a 50MP main camera. It is designed for basic use with a focus on battery life and affordability.",
    price: " Price: $150. "
},
{
    id: 34,
    imgSrc: '../assets/OFFERS/s-2.png',
    name: "Samsung Galaxy A14 5G",
    details: "Offers a 6.6-inch PLS LCD display, Exynos 1330 processor, and a 50MP main camera. It’s a budget-friendly 5G phone with decent specs.",
    price: " Price:$170. "
},
{
    id: 35,
    imgSrc: '../assets/OFFERS/s-3.png',
    name: "Samsung Galaxy M34 5G",
    details: " Comes with a 6.5-inch Super AMOLED display, MediaTek Dimensity 1080 processor, and a 50MP main camera. It provides solid performance and 5G connectivity at a reasonable price.",
    price: " Price: $180. "
},

{
    id: 36,
    imgSrc: '../assets/OFFERS/s-4.png',
    name: "Samsung Galaxy A24 5G",
    details: "Features a 6.5-inch Super AMOLED display, MediaTek Helio G99 processor, and a 50MP main camera. It offers a good balance of performance and display quality for a budget phone.",
    price: " Price:$190. "
},
// IPHONES START
{
    id: 37,
    imgSrc: '../assets/iphone/iphone-1-removebg-preview.png',
    name: "iPhone 15 Pro Max",
    details: "High-end flagship with a 6.7-inch Super Retina XDR display, A17 Pro chip, and a versatile camera system with advanced features, including improved zoom and low-light performance.",
    price: " Price:$1,200. "
},
{
    id: 38,
    imgSrc: '../assets/iphone/iphone-2-removebg-preview.png',
    name: "iPhone 15 Pro",
    details: " Premium device featuring a 6.1-inch Super Retina XDR display, A17 Pro chip, and advanced camera capabilities. It offers high performance and pro-level features.",
    price: " Price: $1,000. "
},
{
    id: 39,
    imgSrc: '../assets/iphone/iphone-3-removebg-preview.png',
    name: "iPhone 15",
    details: " Mainstream model with a 6.1-inch Super Retina XDR display, A16 Bionic chip, and improved camera system compared to previous base models. It balances performance and cost.",
    price: " Price:$800. "
},
{
    id: 40,
    imgSrc: '../assets/iphone/iphone-4-removebg-preview.png',
    name: "iPhone 15 Plus",
    details: "Similar to the iPhone 15 but with a larger 6.7-inch Super Retina XDR display. It offers the same performance and features but in a bigger size.",
    price: " Price: $900. "
},
{
    id: 41,
    imgSrc: '../assets/iphone/iphone-5-removebg-preview.png',
    name: "iPhone 14",
    details: "Features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and improved camera system with better low-light performance. Its a solid option for those seeking a balance of features and price.",
    price: " Price:$700. "
}, {
    id: 42,
    imgSrc: '../assets/iphone/iphone-6-removebg-preview.png',
    name: "iPhone SE (3rd generation)",
    details: " Budget-friendly model with a 4.7-inch Retina HD display, A15 Bionic chip, and a single 12MP rear camera. It provides high performance in a compact form.",
    price: " Price:$430. "
},
{
    id: 43,
    imgSrc: '../assets/iphone/iphone-7-removebg-preview.png',
    name: "iPhone SE (3rd generation)",
    details: "Features a 4.7-inch Retina HD display, A15 Bionic chip, and a 12MP rear camera. It combines powerful performance with a compact design.",
    price: " Price: $430, "
},
{
    id: 44,
    imgSrc: '../assets/iphone/iphone-8-removebg-preview.png',
    name: "iPhone 11 (Refurbished)",
    details: "Comes with a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras. It offers solid performance and camera capabilities at a lower cost if purchased refurbished.",
    price: " Price: $180  "
},
{
    id: 45,
    imgSrc: '../assets/OFFERS/iphone-1.png',
    name: "iPhone 8 (Refurbished)",
    details: " Offers a 4.7-inch Retina HD display, A11 Bionic chip, and a 12MP rear camera. It provides a more affordable entry into the iPhone ecosystem when refurbished.",
    price: " Price: $150 "
},
{
    id: 46,
    imgSrc: '../assets/OFFERS/iphone-2.png',
    name: "iPhone 12 Mini (Refurbished)",
    details: " Features a 5.4-inch Super Retina XDR display, A14 Bionic chip, and dual 12MP rear cameras. It's a compact and powerful option available at a lower price in refurbished condition.",
    price: " Price: $200 "
},
{
    id: 47,
    imgSrc: '../assets/OFFERS/iphone-3.png',
    name: "iPhone 11 (Refurbished)",
    details: "Comes with a 6.1-inch Liquid Retina HD display, A13 Bionic chip, and dual 12MP rear cameras. It offers solid performance and camera capabilities at a lower cost if purchased refurbished.",
    price: " Price:$180  "
},
{
    id: 48,
    imgSrc: '../assets/OFFERS/iphone-4.png',
    name: "iPhone SE (3rd generation)",
    details: "Features a 4.7-inch Retina HD display, A15 Bionic chip, and a 12MP rear camera. It combines powerful performance with a compact design.",
    price: " Price: $430  "
},
//  REALME PHONES START
{
    id: 49,
    imgSrc: '../assets/realme/R1.webp',
    name: "Realme GT 2 Pro",
    details: "High-end flagship featuring a 6.7-inch AMOLED display, Snapdragon 8 Gen 1 processor, and a 50MP main camera. It offers top-notch performance and camera quality.",
    price: " Price: $700.  "
},
{
    id: 50,
    imgSrc: '../assets/realme/R10.png',
    name: "Realme GT Neo 5",
    details: "Mid-range powerhouse with a 6.74-inch AMOLED display, Snapdragon 8+ Gen 1 processor, and a 50MP main camera, known for its fast charging and performance.",
    price: " Price:$500.  "
},
{
    id: 51,
    imgSrc: '../assets/realme/R3.webp',
    name: "Realme 11 Pro+",
    details: "Mid-range phone featuring a 6.7-inch AMOLED display, MediaTek Dimensity 7050 processor, and a 200MP main camera, providing impressive camera capabilities for its price.",
    price: " Price: $400.  "
},
{
    id: 52,
    imgSrc: '../assets/realme/R12.png',
    name: "Realme 11",
    details: " Features a 6.4-inch AMOLED display, MediaTek Helio G99 processor, and a 108MP main camera. It's a solid choice for those seeking good performance and camera quality at a reasonable price.",
    price: " Price: $300.  "
},
{
    id: 53,
    imgSrc: '../assets/realme/R2.png',
    name: "Realme Narzo 60",
    details: "Comes with a 6.43-inch AMOLED display, MediaTek Dimensity 6020 processor, and a 64MP main camera. It’s designed for a good balance of performance and features.",
    price: " Price: $250.  "
},
{
    id: 54,
    imgSrc: '../assets/realme/R8.webp',
    name: "Realme C55",
    details: "Budget-friendly model with a 6.72-inch LCD display, MediaTek Helio G88 processor, and a 64MP main camera, offering decent performance at an affordable price.",
    price: " Price: $200.  "
},
{
    id: 55,
    imgSrc: '../assets/realme/R11.png',
    name: "Realme C55",
    details: " Features a 6.72-inch LCD display, MediaTek Helio G88 processor, and a 64MP main camera. It offers solid performance and a good camera for a budget phone.",
    price: " Price:$190.  "
},
{
    id: 56,
    imgSrc: '../assets/realme/R9.webp',
    name: "Realme Narzo 50",
    details: " Comes with a 6.6-inch LCD display, MediaTek Helio G96 processor, and a 50MP main camera. It provides a good balance of performance and features at an affordable price.",
    price: " Price: $180.  "
},
{
    id: 57,
    imgSrc: '../assets/OFFERS/r-1.png',
    name: "Realme Narzo 30",
    details: " Offers a 6.5-inch LCD display, MediaTek Dimensity 800U processor, and a 48MP main camera. It's a well-rounded phone for its price, suitable for moderate usage.",
    price: " Price: $190.  "
},
{
    id: 58,
    imgSrc: '../assets/OFFERS/r-2.png',
    name: "Realme C35",
    details: "Features a 6.6-inch LCD display, Unisoc T616 processor, and a 50MP main camera. It is a budget-friendly option with decent performance for everyday tasks.",
    price: " Price: $160.  "
},
{
    id: 59,
    imgSrc: '../assets/OFFERS/r-3.png',
    name: "Realme Narzo 50",
    details: " Comes with a 6.6-inch LCD display, MediaTek Helio G96 processor, and a 50MP main camera. It provides a good balance of performance and features at an affordable price.",
    price: " Price: $180.  "
},
{
    id: 60,
    imgSrc: '../assets/OFFERS/r-4.png',
    name: "Realme C55",
    details: " Features a 6.72-inch LCD display, MediaTek Helio G88 processor, and a 64MP main camera. It offers solid performance and a good camera for a budget phone.",
    price: " Price:$190.  "
},
// EARPODS START
{
    id: 61,
    imgSrc: '../assets/items/earpods-1.png',
    name: "Apple AirPods Pro ",
    details: "Features Active Noise Cancellation, Transparency mode, and a customizable fit with silicone tips. Includes a MagSafe and wireless charging case.",
    price: " Price: $249"
},
{
    id: 62,
    imgSrc: '../assets/items/earpods-2.png',
    name: "Sony WF-1000XM4",
    details: "Offers industry-leading noise cancellation, a comfortable fit, and high-resolution audio. It also supports adaptive sound control and has a long battery life.",
    price: " Price: $279"
},
{
    id: 63,
    imgSrc: '../assets/items/earpods-3.png',
    name: "Bose QuietComfort Earbuds II",
    details: " Known for excellent noise cancellation, comfortable fit, and high-quality audio. Offers adjustable noise cancellation levels and a secure, ergonomic design.",
    price: " Price:$299"
},
{
    id: 64,
    imgSrc: '../assets/items/earpods-4.png',
    name: "Samsung Galaxy Buds 2 Pro",
    details: " Provides high-resolution audio, active noise cancellation, and a comfortable fit with a sleek design. Ideal for Samsung Galaxy users but compatible with other devices as well.",
    price: " Price:$229"
},
{
    id: 65,
    imgSrc: '../assets/items/earpods-5.png',
    name: "Jabra Elite 85t",
    details: " Features advanced noise cancellation, customizable sound settings, and a comfortable, secure fit. Also includes a compact charging case with wireless charging capability.",
    price: " Price:$229"
},
{
    id: 66,
    imgSrc: '../assets/items/earpods-6.png',
    name: "Sennheiser Momentum True Wireless 3",
    details: "Offers high-fidelity sound, effective noise cancellation, and a stylish design. Comes with a comfortable fit and a durable charging case.",
    price: " Price:$249"
},
{
    id: 67,
    imgSrc: '../assets/items/earpods-7.png',
    name: "Google Pixel Buds Pro",
    details: " Equipped with active noise cancellation, Google Assistant integration, and a comfortable fit. Provides a balanced sound profile and seamless integration with Google devices.",
    price: " Price:$199"
},
{
    id: 68,
    imgSrc: '../assets/items/earpods-8.png',
    name: "Anker Soundcore Liberty 4",
    details: " Provides good sound quality, active noise cancellation, and a comfortable fit at a more budget-friendly price. Includes a long battery life and customizable sound settings.",
    price: " Price: $149"
},
// HEADPHONES START
{
    id: 69,
    imgSrc: '../assets/items/headphone-1.png',
    name: "Sony WH-1000XM5",
    details: "Known for its superior noise cancellation, excellent sound quality, and comfortable design. Features a sleek, modern look with touch controls and a long battery life. ",
    price: " Price:$399"
},
{
    id: 70,
    imgSrc: '../assets/items/headphone-2.png',
    name: "Bose QuietComfort 45",
    details: " Offers renowned noise cancellation, a comfortable fit, and balanced audio. Includes a user-friendly interface with physical buttons and a durable design.",
    price: " Price:$329"
},
{
    id: 71,
    imgSrc: '../assets/items/headphone-3.png',
    name: "Apple AirPods Max",
    details: "Features high-fidelity audio, effective noise cancellation, and a luxurious design with memory foam ear cushions. Integrates seamlessly with Apple devices. ",
    price: " Price:$549",
},
{
    id: 72,
    imgSrc: '../assets/items/headphone-4.png',
    name: "Sennheiser Momentum 4 Wireless",
    details: "Provides excellent sound quality, adaptive noise cancellation, and a comfortable fit. Includes a long battery life and intuitive touch controls. ",
    price: " Price:$349"

},
{
    id: 73,
    imgSrc: '../assets/items/headphone-5.png',
    name: "Bowers & Wilkins PX7",
    details: " Known for its high-quality sound, effective noise cancellation, and premium build. Offers a comfortable fit with a stylish design and long battery life. ",
    price: " Price:$399",
},
{
    id: 74,
    imgSrc: '../assets/items/headphone-6.png',
    name: "Jabra Elite 85h",
    details: " Features smart noise cancellation, good sound quality, and a comfortable, durable design. Includes long battery life and intuitive controls.",
    price: " Price:$249",
},
{
    id: 75,
    imgSrc: '../assets/items/headphone-7.png',
    name: "Beats Studio3 Wireless",
    details: "Provides good sound quality with the Apple W1 chip for seamless pairing. Known for its comfortable fit and stylish design, along with effective noise cancellation. ",
    price: " Price:$349",
},
{
    id: 76,
    imgSrc: '../assets/items/headphone-8.png',
    name: "Plantronics BackBeat Go 810",
    details: "Offers a good balance of sound quality and noise cancellation at a more affordable price. Features a comfortable design and long battery life. ",
    price: " Price: $129",
},
// CAMERA START

{
    id: 77,
    imgSrc: '../assets/items/camera-1.png',
    name: "Canon EOS R5",
    details: "A high-performance mirrorless camera with a 45MP full-frame sensor, 8K video recording, and advanced autofocus. Ideal for both professionals and enthusiasts.",
    price: "Price:$3899",
},
{
    id: 78,
    imgSrc: '../assets/items/camera-2.webp',
    name: "Sony Alpha a7 IV",
    details: "A versatile full-frame mirrorless camera with a 33MP sensor, 4K video recording, and excellent autofocus capabilities. Suitable for both photo and video work.",
    price: "Price: $2498",
},
{
    id: 79,
    imgSrc: '../assets/items/camera-3.png',
    name: "Nikon Z6 II",
    details: "A full-frame mirrorless camera featuring a 24.5MP sensor, dual processors, and 4K video recording. Known for its solid build and great performance.",
    price: "Price:$1999"
},
{
    id: 80,
    imgSrc: '../assets/items/camera-4.webp',
    name: "Fujifilm X-T5",
    details: "A mirrorless camera with an APS-C sensor, 40MP resolution, and advanced color science. Popular for its retro design and exceptional image quality.",
    price: "Price:$1699"
},
{
    id: 81,
    imgSrc: '../assets/items/camera-5.png',
    name: "Olympus OM-D E-M1 Mark III",
    details: "A micro four-thirds mirrorless camera with a 20MP sensor, in-body image stabilization, and robust weather-sealed construction. Great for travel and outdoor photography.",
    price: "Price:$ 1799"
},
{
    id: 82,
    imgSrc: '../assets/items/camera-6.png',
    name: "Panasonic Lumix GH6",
    details: "A micro four-thirds camera with a 25MP sensor, 5.7K video recording, and advanced video features. Ideal for filmmakers and content creators.",
    price: "Price:$2199"
},
{
    id: 83,
    imgSrc: '../assets/items/camera-7.webp',
    name: "Leica Q2",
    details: "A premium compact camera with a full-frame 47MP sensor and a fixed 28mm f/1.7 lens. Known for its exceptional build quality and image performance.",
    price: "Price:$ 5995"
},
{
    id: 84,
    imgSrc: '../assets/items/camera-8.png',
    name: "GoPro HERO11 Black",
    details: "An action camera with a 27MP sensor, 5.3K video recording, and advanced stabilization features. Designed for capturing dynamic action shots and adventures.",
    price: "Price:$399"
},
// RADIO START

{
    id: 85,
    imgSrc: '../assets/items/radio-1.png',
    name: "Sony XDR-S61D",
    details: "A portable digital radio with excellent reception and a wide range of FM/AM channels. Features an easy-to-read LCD screen and a sleek design.",
    price: "Price:$99"
},
{
    id: 86,
    imgSrc: '../assets/items/radio-2.png',
    name: "Bose Wave SoundTouch IV",
    details: "A high-quality tabletop radio with Wi-Fi and Bluetooth connectivity. Offers rich sound and access to internet radio and streaming services.",
    price: "Price:$549"
},
{
    id: 87,
    imgSrc: '../assets/items/radio-3.png',
    name: "Sangean WR-11SE",
    details: "A classic-style AM/FM radio with a wood cabinet and analog tuning. Known for its excellent sound quality and durable construction.",
    price: "Price:$149"
},
{
    id: 88,
    imgSrc: '../assets/items/radio-4.png',
    name: "Tivoli Audio Model One Digital",
    details: "A compact radio with Bluetooth and internet radio capabilities. Delivers high-quality audio with a stylish, minimalist design.",
    price: "Price:$299"
},

// SPEAKERS START

{
    id: 89,
    imgSrc: '../assets/items/speaker-1.png',
    name: "Bose SoundLink Revolve+ II",
    details: "A portable Bluetooth speaker with 360-degree sound, durable design, and a built-in handle for easy carrying. Offers up to 17 hours of battery life.",
    price: "Price:$329"
},
{
    id: 90,
    imgSrc: '../assets/items/speaker-2.png',
    name: "Sonos One (Gen 2)",
    details: "A smart speaker with voice control capabilities, excellent sound quality, and seamless integration with other Sonos products. Supports Amazon Alexa and Google Assistant.",
    price: "Price:$219"
},
{

    id: 91,
    imgSrc: '../assets/items/speaker-3.png',
    name: "JBL Charge 5",
    details: "A rugged Bluetooth speaker with powerful sound, waterproof and dustproof design, and a built-in power bank to charge devices. Offers up to 20 hours of playtime.",
    price: "Price:$179"
},
{
    id: 92,
    imgSrc: '../assets/items/speaker-4.png',
    name: "Ultimate Ears BOOM 3",
    details: "A portable Bluetooth speaker with 360-degree sound, waterproof and drop-resistant design, and a customizable light-up button for quick access to favorite playlists.",
    price: "Price:$149"
},


]


getTrainerData();

function getTrainerData() {

    let id = getId();

    if (id == null) {
        id = 1;
    }

    trainerData.map((item) => {
        if (item.id == id) {
            document.getElementById('productImg').src = item.imgSrc;
            document.getElementById('name').innerText = item.name;
            document.getElementById('details').innerText = item.details;
            document.getElementById('price').innerText = item.price;

            // document.getElementById('trainerImg').src = item.imgSrc;
            // document.getElementById('specialties-container').innerText = item.specialize;
        }
    })

}









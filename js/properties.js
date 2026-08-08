const DEFAULT_PHONE = "+90 534 350 36 30";
const DEFAULT_WHATSAPP = "905343503630";

/*
 * Property data with TR / EN / RU / DE translations.
 * Non-translatable fields (prices, images, ratings) live at the top level;
 * language-specific text lives under i18n[lang].
 */
const PROPERTIES = [
    {
        id: "ALN-101",
        rentalType: "monthly",
        roomType: "2+1",
        priceDaily: 2500,
        priceMonthly: 45000,
        image: "/images/img2.webp",
        imageFallback: "/images/img2.jpg",
        rating: 4.9,
        reviewsCount: 38,
        featured: true,
        i18n: {
            tr: {
                title: "Kleopatra Plajı'na 50m Lüks 2+1 Aylık Kiralık Daire",
                rentalTypeBadge: "Aylık Kiralık",
                location: "Alanya Kleopatra Plajı",
                distanceToSea: "50 Metre",
                capacity: "4-5 Kişilik",
                badge: "Süper Konum",
                features: ["Havuz", "Wi-Fi", "Klima", "Deniz Manzarası", "Balkon", "Asansör", "Full Eşyalı", "7/24 Güvenlik"],
                description: "Alanya Kleopatra Plajı'na sadece 50 metre mesafede, büyüleyici deniz ve Alanya Kalesi manzaralı ultra lüks 2+1 apart daire. Tüm ev gereçleri, klima, yüksek hızlı fiber internet ve havuz imkanı mevcuttur. Aylık kiralamaya uygundur."
            },
            en: {
                title: "Luxury 2+1 Monthly Rental Apartment 50m to Cleopatra Beach",
                rentalTypeBadge: "Monthly Rental",
                location: "Cleopatra Beach, Alanya",
                distanceToSea: "50 m",
                capacity: "4-5 Guests",
                badge: "Prime Location",
                features: ["Pool", "Wi-Fi", "A/C", "Sea View", "Balcony", "Elevator", "Fully Furnished", "24/7 Security"],
                description: "Ultra-luxury 2+1 apartment just 50 meters from Cleopatra Beach, with mesmerizing sea and Alanya Castle views. Fully equipped kitchen, air conditioning, high-speed fiber internet and pool access. Suitable for monthly rental."
            },
            ru: {
                title: "Люкс 2+1 в 50 м от пляжа Клеопатры — помесячная аренда",
                rentalTypeBadge: "Помесячная аренда",
                location: "Пляж Клеопатры, Аланья",
                distanceToSea: "50 м",
                capacity: "4-5 гостей",
                badge: "Отличное расположение",
                features: ["Бассейн", "Wi-Fi", "Кондиционер", "Вид на море", "Балкон", "Лифт", "Полностью меблировано", "Охрана 24/7"],
                description: "Ультра-роскошные апартаменты 2+1 всего в 50 метрах от пляжа Клеопатры с завораживающим видом на море и крепость Аланьи. Полностью оборудованная кухня, кондиционер, высокоскоростной интернет и бассейн. Подходит для помесячной аренды."
            },
            de: {
                title: "Luxus 2+1 Ferienwohnung 50m zum Kleopatra-Strand – Monatsmiete",
                rentalTypeBadge: "Monatsmiete",
                location: "Kleopatra-Strand, Alanya",
                distanceToSea: "50 m",
                capacity: "4-5 Personen",
                badge: "Top-Lage",
                features: ["Pool", "WLAN", "Klimaanlage", "Meerblick", "Balkon", "Aufzug", "Voll möbliert", "24/7 Sicherheit"],
                description: "Ultra-luxuriöse 2+1-Wohnung nur 50 Meter vom Kleopatra-Strand entfernt, mit bezauberndem Blick auf das Meer und die Burg von Alanya. Voll ausgestattete Küche, Klimaanlage, schnelles Glasfaser-Internet und Poolzugang. Zur Monatsmiete geeignet."
            }
        }
    },
    {
        id: "ALN-102",
        rentalType: "monthly",
        roomType: "1+1",
        priceDaily: 1750,
        priceMonthly: 30000,
        image: "/images/img3.webp",
        imageFallback: "/images/img3.jpg",
        rating: 4.8,
        reviewsCount: 29,
        featured: true,
        i18n: {
            tr: {
                title: "Damlataş Merkezde 1+1 Aylık Kiralık Modern Apart Daire",
                rentalTypeBadge: "Aylık Kiralık",
                location: "Damlataş, Alanya Merkez",
                distanceToSea: "150 Metre",
                capacity: "2-3 Kişilik",
                badge: "Fiyat / Performans",
                features: ["Wi-Fi", "Klima", "Balkon", "Amerikan Mutfak", "TV / Netflix", "Çamaşır Makinesi", "Merkezi Konum"],
                description: "Alanya Damlataş Mağarası ve plajına yürüme mesafesinde. Çarşıya, restoranlara ve eğlence merkezlerine 2 dakika. Tatiliniz için temiz, hijyenik ve tüm eşyaları eksiksiz 1+1 aylık kiralık daire."
            },
            en: {
                title: "Modern 1+1 Monthly Rental Apartment in Central Damlataş",
                rentalTypeBadge: "Monthly Rental",
                location: "Damlataş, Central Alanya",
                distanceToSea: "150 m",
                capacity: "2-3 Guests",
                badge: "Great Value",
                features: ["Wi-Fi", "A/C", "Balcony", "Open Kitchen", "TV / Netflix", "Washing Machine", "Central Location"],
                description: "Within walking distance of Damlataş Cave and beach. Just 2 minutes to the bazaar, restaurants and entertainment. A clean, hygienic and fully furnished 1+1 monthly rental apartment for your holiday."
            },
            ru: {
                title: "Современные апартаменты 1+1 в центре Дамлаташ — помесячная аренда",
                rentalTypeBadge: "Помесячная аренда",
                location: "Дамлаташ, центр Аланьи",
                distanceToSea: "150 м",
                capacity: "2-3 гостя",
                badge: "Цена / качество",
                features: ["Wi-Fi", "Кондиционер", "Балкон", "Открытая кухня", "ТВ / Netflix", "Стиральная машина", "Центр"],
                description: "В пешей доступности от пещеры Дамлаташ и пляжа. Всего 2 минуты до базара, ресторанов и развлечений. Чистые, гигиеничные и полностью меблированные апартаменты 1+1 для помесячной аренды на время отдыха."
            },
            de: {
                title: "Moderne 1+1 Ferienwohnung im Zentrum von Damlataş – Monatsmiete",
                rentalTypeBadge: "Monatsmiete",
                location: "Damlataş, Zentrum Alanya",
                distanceToSea: "150 m",
                capacity: "2-3 Personen",
                badge: "Preis-Leistung",
                features: ["WLAN", "Klimaanlage", "Balkon", "Offene Küche", "TV / Netflix", "Waschmaschine", "Zentrale Lage"],
                description: "In Gehweite zur Damlataş-Höhle und zum Strand. Nur 2 Minuten zum Basar, zu Restaurants und Unterhaltung. Eine saubere, hygienische und voll möblierte 1+1-Ferienwohnung für Ihren Urlaub."
            }
        }
    },
    {
        id: "ALN-103",
        rentalType: "monthly",
        roomType: "3+1",
        priceDaily: 4000,
        priceMonthly: 65000,
        image: "/images/img1.webp",
        imageFallback: "/images/img1.jpg",
        rating: 5.0,
        reviewsCount: 19,
        featured: true,
        i18n: {
            tr: {
                title: "Oba Bölgesinde Site İçi Açık Havuzlu 3+1 Lüks Aylık Kiralık Daire",
                rentalTypeBadge: "Aylık Kiralık",
                location: "Oba Mahallesi, Alanya",
                distanceToSea: "300 Metre",
                capacity: "6-7 Kişilik",
                badge: "Site İçi & Havuzlu",
                features: ["Açık Havuz", "Çocuk Parkı", "Fitness & Sauna", "Otopark", "Geniş Balkon", "Klima (Her Odada)", "Akıllı Ev"],
                description: "Alanya Oba'nın en nezih sitesinde geniş aileler için ideal 3+1 lüks rezidans daire. Yüzme havuzu, fitness salonu, çocuk oyun alanları ve kapalı otopark ile konforlu aylık veya sezonluk kiralama."
            },
            en: {
                title: "Luxury 3+1 Monthly Rental with Outdoor Pool in Oba Complex",
                rentalTypeBadge: "Monthly Rental",
                location: "Oba District, Alanya",
                distanceToSea: "300 m",
                capacity: "6-7 Guests",
                badge: "Gated Complex & Pool",
                features: ["Outdoor Pool", "Playground", "Gym & Sauna", "Parking", "Large Balcony", "A/C (Every Room)", "Smart Home"],
                description: "A 3+1 luxury residence ideal for large families in one of Oba's finest complexes. Comfortable monthly or seasonal rental with swimming pool, fitness center, children's playgrounds and covered parking."
            },
            ru: {
                title: "Люкс 3+1 с открытым бассейном в комплексе Оба — помесячная аренда",
                rentalTypeBadge: "Помесячная аренда",
                location: "Район Оба, Аланья",
                distanceToSea: "300 м",
                capacity: "6-7 гостей",
                badge: "Комплекс с бассейном",
                features: ["Открытый бассейн", "Детская площадка", "Спортзал и сауна", "Парковка", "Большой балкон", "Кондиционер (в каждой комнате)", "Умный дом"],
                description: "Роскошная резиденция 3+1, идеальная для больших семей, в одном из лучших комплексов Оба. Комфортная помесячная или сезонная аренда с бассейном, фитнес-центром, детскими площадками и крытой парковкой."
            },
            de: {
                title: "Luxus 3+1 Monatsmiete mit Außenpool in Wohnanlage in Oba",
                rentalTypeBadge: "Monatsmiete",
                location: "Stadtteil Oba, Alanya",
                distanceToSea: "300 m",
                capacity: "6-7 Personen",
                badge: "Anlage mit Pool",
                features: ["Außenpool", "Spielplatz", "Fitness & Sauna", "Parkplatz", "Großer Balkon", "Klimaanlage (jedes Zimmer)", "Smart Home"],
                description: "Eine 3+1-Luxusresidenz, ideal für große Familien, in einer der besten Anlagen von Oba. Komfortable Monats- oder Saisonmiete mit Schwimmbad, Fitnesscenter, Kinderspielplätzen und Tiefgarage."
            }
        }
    },
    {
        id: "ALN-104",
        rentalType: "monthly",
        roomType: "3+1",
        priceDaily: 4500,
        priceMonthly: 85000,
        image: "/images/img4.webp",
        imageFallback: "/images/img4.jpg",
        rating: 4.95,
        reviewsCount: 42,
        featured: true,
        i18n: {
            tr: {
                title: "Kalesi & Deniz Manzaralı 3+1 Penthouse Dubleks Apart",
                rentalTypeBadge: "Aylık VIP",
                location: "Alanya Merkez / Çarşı",
                distanceToSea: "100 Metre",
                capacity: "6 Kişilik",
                badge: "VIP Manzara",
                features: ["Panoramik Teras", "Jakuzi", "Deniz & Kale Manzarası", "Özel Otopark", "Şömine", "Ultra Lüks Eşyalı"],
                description: "Alanya Kalesi ve Akdeniz'in tüm güzelliğini terasınızdan izleyin. Terasında özel jakuzisi, geniş barbekü alanı ve VIP konforuyla unutulmaz bir Alanya tatili sunan 3+1 dubleks penthouse."
            },
            en: {
                title: "3+1 Penthouse Duplex with Castle & Sea View",
                rentalTypeBadge: "Monthly VIP",
                location: "Alanya Center / Bazaar",
                distanceToSea: "100 m",
                capacity: "6 Guests",
                badge: "VIP View",
                features: ["Panoramic Terrace", "Jacuzzi", "Sea & Castle View", "Private Parking", "Fireplace", "Ultra-Luxury Furnished"],
                description: "Watch all the beauty of Alanya Castle and the Mediterranean from your terrace. A 3+1 duplex penthouse offering an unforgettable Alanya holiday with a private jacuzzi, large barbecue area and VIP comfort on its terrace."
            },
            ru: {
                title: "Пентхаус-дуплекс 3+1 с видом на крепость и море",
                rentalTypeBadge: "Помесячно VIP",
                location: "Центр Аланьи / базар",
                distanceToSea: "100 м",
                capacity: "6 гостей",
                badge: "VIP-вид",
                features: ["Панорамная терраса", "Джакузи", "Вид на море и крепость", "Частная парковка", "Камин", "Ультра-роскошная меблировка"],
                description: "Любуйтесь всей красотой крепости Аланьи и Средиземного моря со своей террасы. Пентхаус-дуплекс 3+1 с личным джакузи, большой зоной барбекю и VIP-комфортом на террасе для незабываемого отдыха в Аланье."
            },
            de: {
                title: "3+1 Penthouse-Maisonette mit Burg- & Meerblick",
                rentalTypeBadge: "Monatlich VIP",
                location: "Zentrum Alanya / Basar",
                distanceToSea: "100 m",
                capacity: "6 Personen",
                badge: "VIP-Aussicht",
                features: ["Panoramaterrasse", "Whirlpool", "Meer- & Burgblick", "Privatparkplatz", "Kamin", "Ultra-Luxus möbliert"],
                description: "Genießen Sie die ganze Schönheit der Burg von Alanya und des Mittelmeers von Ihrer Terrasse aus. Ein 3+1 Maisonette-Penthouse mit privatem Whirlpool, großem Grillbereich und VIP-Komfort für einen unvergesslichen Urlaub in Alanya."
            }
        }
    },
    {
        id: "ALN-105",
        rentalType: "monthly",
        roomType: "1+1",
        priceDaily: 1500,
        priceMonthly: 26000,
        image: "/images/img3.webp",
        imageFallback: "/images/img3.jpg",
        rating: 4.7,
        reviewsCount: 22,
        featured: false,
        i18n: {
            tr: {
                title: "Mahmutlar Sahilde Denize Sıfır 1+1 Aylık Kiralık Apart",
                rentalTypeBadge: "Aylık Kiralık",
                location: "Mahmutlar, Alanya",
                distanceToSea: "Denize Sıfır",
                capacity: "2-4 Kişilik",
                badge: "Denize Sıfır",
                features: ["Deniz Manzarası", "Açık Havuz", "Wi-Fi", "Klima", "Balkon", "Jeneratör", "Asansör"],
                description: "Mahmutlar Sahil caddesinde, alt geçitle doğrudan plaja bağlanan site içerisinde 1+1 tam eşyalı aylık kiralık apart. Tatilciler için ekonomik ve konforlu."
            },
            en: {
                title: "Beachfront 1+1 Monthly Apartment in Mahmutlar",
                rentalTypeBadge: "Monthly Rental",
                location: "Mahmutlar, Alanya",
                distanceToSea: "Beachfront",
                capacity: "2-4 Guests",
                badge: "Beachfront",
                features: ["Sea View", "Outdoor Pool", "Wi-Fi", "A/C", "Balcony", "Generator", "Elevator"],
                description: "A furnished 1+1 monthly rental in a complex on Mahmutlar seaside avenue, connected directly to the beach via an underpass. Economical and comfortable for holidaymakers."
            },
            ru: {
                title: "1+1 на первой линии моря в Махмутларе — помесячно",
                rentalTypeBadge: "Помесячная аренда",
                location: "Махмутлар, Аланья",
                distanceToSea: "Первая линия",
                capacity: "2-4 гостя",
                badge: "Первая линия моря",
                features: ["Вид на море", "Открытый бассейн", "Wi-Fi", "Кондиционер", "Балкон", "Генератор", "Лифт"],
                description: "Меблированные апартаменты 1+1 для помесячной аренды в комплексе на приморской улице Махмутлара, с прямым выходом к пляжу через подземный переход. Экономично и комфортно для отдыхающих."
            },
            de: {
                title: "1+1 Ferienwohnung direkt am Strand in Mahmutlar – Monatsmiete",
                rentalTypeBadge: "Monatsmiete",
                location: "Mahmutlar, Alanya",
                distanceToSea: "Direkt am Strand",
                capacity: "2-4 Personen",
                badge: "Direkt am Strand",
                features: ["Meerblick", "Außenpool", "WLAN", "Klimaanlage", "Balkon", "Generator", "Aufzug"],
                description: "Eine möblierte 1+1-Ferienwohnung in einer Anlage an der Strandpromenade von Mahmutlar, direkt über eine Unterführung mit dem Strand verbunden. Günstig und komfortabel für Urlauber."
            }
        }
    },
    {
        id: "ALN-106",
        rentalType: "monthly",
        roomType: "2+1",
        priceDaily: 2800,
        priceMonthly: 48000,
        image: "/images/img1.webp",
        imageFallback: "/images/img1.jpg",
        rating: 4.85,
        reviewsCount: 16,
        featured: false,
        i18n: {
            tr: {
                title: "Kestel Sakin Konumda Havuzlu 2+1 Sezonluk Kiralık Daire",
                rentalTypeBadge: "Aylık Kiralık",
                location: "Kestel, Alanya",
                distanceToSea: "200 Metre",
                capacity: "4-5 Kişilik",
                badge: "Doğa & Deniz",
                features: ["Havuz", "Sauna", "Barbekü Alanı", "Balkon", "Ses Yalıtımı", "Otopark", "Güvenlik"],
                description: "Alanya Kestel'in huzurlu atmosferinde, Dim Çayı'na yakın, denize yürüme mesafesinde lüks sitede eşyalı 2+1 kiralık daire."
            },
            en: {
                title: "2+1 Seasonal Rental with Pool in Peaceful Kestel",
                rentalTypeBadge: "Monthly Rental",
                location: "Kestel, Alanya",
                distanceToSea: "200 m",
                capacity: "4-5 Guests",
                badge: "Nature & Sea",
                features: ["Pool", "Sauna", "BBQ Area", "Balcony", "Soundproofing", "Parking", "Security"],
                description: "A furnished 2+1 rental in a luxury complex in the peaceful atmosphere of Alanya Kestel, close to the Dim River and within walking distance of the sea."
            },
            ru: {
                title: "2+1 с бассейном в тихом Кестеле — сезонная аренда",
                rentalTypeBadge: "Помесячная аренда",
                location: "Кестель, Аланья",
                distanceToSea: "200 м",
                capacity: "4-5 гостей",
                badge: "Природа и море",
                features: ["Бассейн", "Сауна", "Зона барбекю", "Балкон", "Звукоизоляция", "Парковка", "Охрана"],
                description: "Меблированные апартаменты 2+1 в люксовом комплексе в спокойной атмосфере Кестеля, недалеко от реки Дим и в пешей доступности от моря."
            },
            de: {
                title: "2+1 Saisonmiete mit Pool im ruhigen Kestel",
                rentalTypeBadge: "Monatsmiete",
                location: "Kestel, Alanya",
                distanceToSea: "200 m",
                capacity: "4-5 Personen",
                badge: "Natur & Meer",
                features: ["Pool", "Sauna", "Grillbereich", "Balkon", "Schallschutz", "Parkplatz", "Sicherheit"],
                description: "Eine möblierte 2+1-Wohnung in einer Luxusanlage in der ruhigen Atmosphäre von Kestel, in der Nähe des Dim-Flusses und in Gehweite zum Meer."
            }
        }
    }
];

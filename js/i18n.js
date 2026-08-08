/*
 * UI string dictionary for JS-generated content (cards, modal, empty state).
 * Static page text is translated directly in each language's index.html.
 * The active language is read from <html lang="..."> / window.SITE_LANG.
 */
const SUPPORTED_LANGS = ["tr", "en", "ru", "de"];

const UI = {
    tr: {
        locale: "tr-TR",
        perDaily: "/ Aylık",
        monthlyPrefix: "Aylık:",
        details: "İncele",
        call: "Ara",
        ratingWord: "Puan",
        dailyPrice: "Aylık Ücret:",
        monthlyPrice: "Aylık Ücret:",
        perDay: "/ Ay",
        perMonth: "/ Ay",
        featuresTitle: "Daire Özellikleri:",
        descTitle: "Açıklama:",
        wpAsk: "WhatsApp'tan Sor",
        callNow: "Hemen Ara",
        emptyTitle: "Kriterlere Uygun İlan Bulunamadı",
        emptyText: "Filtrelerinizi değiştirerek tekrar deneyebilir veya doğrudan WhatsApp'tan bize sorabilirsiniz.",
        showAll: "Tüm İlanları Göster",
        seaText: (d) => `Denize ${d}`,
        wpCardMsg: (t, id) => `Merhaba, Alanya'da bulunan "${t}" (İlan Kodu: #${id}) hakkında detaylı bilgi ve kiralama şartlarını öğrenmek istiyorum.`,
        wpModalMsg: (t, id) => `Merhaba, Alanya'da bulunan "${t}" (İlan Kodu: #${id}) hakkında detaylı bilgi ve müsaitlik durumu almak istiyorum.`
    },
    en: {
        locale: "en-GB",
        perDaily: "/ month",
        monthlyPrefix: "Monthly:",
        details: "View",
        call: "Call",
        ratingWord: "Rating",
        dailyPrice: "Monthly Rate:",
        monthlyPrice: "Monthly Rate:",
        perDay: "/ month",
        perMonth: "/ month",
        featuresTitle: "Apartment Features:",
        descTitle: "Description:",
        wpAsk: "Ask on WhatsApp",
        callNow: "Call Now",
        emptyTitle: "No Listings Match Your Criteria",
        emptyText: "Try changing your filters and search again, or ask us directly on WhatsApp.",
        showAll: "Show All Listings",
        seaText: (d) => `${d} to the sea`,
        wpCardMsg: (t, id) => `Hello, I'd like more information and rental terms for "${t}" (Listing #${id}) in Alanya.`,
        wpModalMsg: (t, id) => `Hello, I'd like detailed information and availability for "${t}" (Listing #${id}) in Alanya.`
    },
    ru: {
        locale: "ru-RU",
        perDaily: "/ месяц",
        monthlyPrefix: "В месяц:",
        details: "Смотреть",
        call: "Звонок",
        ratingWord: "Рейтинг",
        dailyPrice: "Цена за месяц:",
        monthlyPrice: "Цена за месяц:",
        perDay: "/ месяц",
        perMonth: "/ месяц",
        featuresTitle: "Особенности квартиры:",
        descTitle: "Описание:",
        wpAsk: "Написать в WhatsApp",
        callNow: "Позвонить",
        emptyTitle: "Нет объявлений по вашим критериям",
        emptyText: "Измените фильтры и попробуйте снова или напишите нам напрямую в WhatsApp.",
        showAll: "Показать все объявления",
        seaText: (d) => `${d} до моря`,
        wpCardMsg: (t, id) => `Здравствуйте, хочу узнать подробную информацию и условия аренды по объекту "${t}" (№ ${id}) в Аланье.`,
        wpModalMsg: (t, id) => `Здравствуйте, хочу узнать подробную информацию и наличие по объекту "${t}" (№ ${id}) в Аланье.`
    },
    de: {
        locale: "de-DE",
        perDaily: "/ Monat",
        monthlyPrefix: "Monatlich:",
        details: "Ansehen",
        call: "Anrufen",
        ratingWord: "Bewertung",
        dailyPrice: "Monatspreis:",
        monthlyPrice: "Monatspreis:",
        perDay: "/ Monat",
        perMonth: "/ Monat",
        featuresTitle: "Wohnungsmerkmale:",
        descTitle: "Beschreibung:",
        wpAsk: "Auf WhatsApp fragen",
        callNow: "Jetzt anrufen",
        emptyTitle: "Keine passenden Angebote gefunden",
        emptyText: "Ändern Sie Ihre Filter und versuchen Sie es erneut, oder fragen Sie uns direkt über WhatsApp.",
        showAll: "Alle Angebote anzeigen",
        seaText: (d) => `${d} zum Meer`,
        wpCardMsg: (t, id) => `Hallo, ich hätte gerne mehr Informationen und die Mietbedingungen für "${t}" (Anzeige #${id}) in Alanya.`,
        wpModalMsg: (t, id) => `Hallo, ich hätte gerne detaillierte Informationen und Verfügbarkeit für "${t}" (Anzeige #${id}) in Alanya.`
    }
};

// Active language: from <html lang>, fallback tr
const SITE_LANG = (function () {
    const l = (document.documentElement.getAttribute("lang") || "tr").toLowerCase();
    return SUPPORTED_LANGS.includes(l) ? l : "tr";
})();
const T = UI[SITE_LANG];

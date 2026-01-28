const translations = {
  hr: {
    brand: "MVP TRANSFERS",
    nav_home: "Home",
    nav_about: "O nama",
    nav_services: "Usluge",
    nav_contact: "Kontakt",
    nav_booking: "Rezervacija",
    hero_title: "MVP TRANSFERS",
    hero_subtitle: "TAXI & TRANSFER - ZAGREB I EUROPA",
    about_main: `Istra\u017eite na\u0161u ponudu usluga osmi\u0161ljenih kako bi pobolj\u0161ale va\u0161e iskustvo putovanja.\nOd prijevoza od/do zra\u010dne luke do privatnih vo\u017enji i prilago\u0111enih privatnih izleta,\nimamo sve \u0161to vam je potrebno za besprijekorno i ugodno putovanje.`,
    about_extra: `Dostupni smo 0-24, s modernim vozilima i profesionalnim voza\u010dima koji brinu o va\u0161em komforu.`,
    service_1_title: "Privatne vo\u017enje",
    service_1_desc: "Besprijekorno putovanje gradom",
    service_2_title: "Otkrij svoje odredi\u0161te",
    service_2_desc: "Putujte udobno",
    service_3_title: "Gradski i me\u0111ugradski prijevoz",
    services_note: "Fleksibilne rute, \u010dekanje bez stresa i potpuna diskrecija.",
    contact_title: "Kontaktirajte nas",
    contact_body: "Imate pitanja ili \u017eelite rezervirati vo\u017enju? Slobodno nas kontaktirajte 24/7.",
    contact_info: "Email: mvptransfers.hr@gmail.com<br />Telefon: +385916363447",
    contact_footer: "Va\u0161a vo\u017enja bez stresa po\u010dinje jednim pozivom ili porukom.",
    contact_form_title: "Slu\u017ebeni kontakt",
    contact_form_desc: "Koristite slu\u017ebenu kontakt formu za upite i rezervacije.",
    form_name_label: "Ime i prezime",
    form_email_label: "Email",
    form_phone_label: "Telefon",
    form_message_label: "Poruka",
    form_submit: "Po\u0161alji upit",
    contact_official_note: "Kontaktirajte nas slu\u017ebenim putem \u2014 privatni broj ne koristimo.",
    footer_brand: "MVP TRANSFERS",
    footer_phone: "+385916363447",
    footer_email: "mvptransfers.hr@gmail.com",
    footer_name: "Mvp transfers",
    footer_address: "M. Froman 3",
    footer_city: "10000 Zagreb",
    footer_country: "Croatia",
    chat: "Let's Chat!",
  },
  en: {
    brand: "MVP TRANSFERS",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_booking: "Booking",
    hero_title: "MVP TRANSFERS",
    hero_subtitle: "TAXI & TRANSFER - ZAGREB & EUROPE",
    about_main: `Explore our range of services designed to enhance your travel experience.\nFrom airport transfers to private rides and customized private tours,\nwe have everything you need for a seamless and enjoyable journey.`,
    about_extra: `We are available 24/7, with modern vehicles and professional drivers focused on your comfort.`,
    service_1_title: "Private Rides",
    service_1_desc: "Seamless City Travel",
    service_2_title: "Discover Your Destination",
    service_2_desc: "Travel in Comfort",
    service_3_title: "City and Intercity Transportation",
    services_note: "Flexible routes, stress-free waiting, and complete discretion.",
    contact_title: "Get in Touch",
    contact_body: "Do you have a question or want to book your ride? Feel free to reach out - we're available 24/7.",
    contact_info: "Email: mvptransfers.hr@gmail.com<br />Phone/WhatsApp: +385916363447",
    contact_footer: "Your stress-free journey starts with just one call or message.",
    contact_form_title: "Official Contact",
    contact_form_desc: "Use the official contact form for inquiries and bookings.",
    form_name_label: "Full name",
    form_email_label: "Email",
    form_phone_label: "Phone",
    form_message_label: "Message",
    form_submit: "Send request",
    contact_official_note: "Please use official contact channels \u2014 we do not use a private number.",
    footer_brand: "MVP TRANSFERS",
    footer_phone: "+385916363447",
    footer_email: "mvptransfers.hr@gmail.com",
    footer_name: "Mvp transfers",
    footer_address: "M. Froman 3",
    footer_city: "10000 Zagreb",
    footer_country: "Croatia",
    chat: "Let's Chat!",
  },
};

const buttons = document.querySelectorAll("[data-lang-btn]");
const i18nNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || !(key in dict)) return;
    node.innerHTML = dict[key];
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang-btn")));
});

setLanguage("hr");

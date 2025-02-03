// Define language translations
const translations = {
    en: {
        title: "Online Voting System",
        subtitle: "Your vote matters. Secure, simple, and fair.",
        home: "Home",
        help: "Help",
        signup: "Sign Up",
        login: "Log In",
        about: "About Us",
        contact: "Contact",
        election: "Upcoming Election: 2024 National Elections",
        participate: "Participate in the upcoming elections and have your voice heard! Register today and get ready to cast your vote for the candidates that represent your vision for the future.",
        register: "Registration",
        signUp: "Sign Up",
        footer: "Online Voting System &copy; 2024 - All Rights Reserved"
    },
    mr: {
        title: "ऑनलाइन मतदान प्रणाली",
        subtitle: "तुमचा मत महत्वाचे आहे. सुरक्षित, सोपे, आणि निष्पक्ष.",
        home: "मुख्यपृष्ठ",
        help: "मदत",
        signup: "नोंदणी करा",
        login: "लॉगिन",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        election: "आगामी निवडणूक: 2024 राष्ट्रीय निवडणुका",
        participate: "आगामी निवडणुकीत भाग घ्या आणि तुमचा आवाज ऐकवा! आजच नोंदणी करा आणि तुमच्या भविष्यासाठी तुमच्या दृष्टीकोनाचे प्रतिनिधित्व करणाऱ्या उमेदवारांसाठी मत देण्यासाठी तयार व्हा.",
        register: "नोंदणी",
        signUp: "साइन अप",
        footer: "ऑनलाइन मतदान प्रणाली &copy; 2024 - सर्व हक्क राखीव"
    },
    hi: {
        title: "ऑनलाइन मतदान प्रणाली",
        subtitle: "आपका वोट महत्वपूर्ण है। सुरक्षित, सरल और निष्पक्ष।",
        home: "मुख्य पृष्ठ",
        help: "सहायता",
        signup: "साइन अप करें",
        login: "लॉगिन",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        election: "आगामी चुनाव: 2024 राष्ट्रीय चुनाव",
        participate: "आगामी चुनावों में भाग लें और अपनी आवाज सुनाएं! आज ही पंजीकरण करें और उन उम्मीदवारों के लिए अपना वोट डालने के लिए तैयार हो जाएं जो आपके भविष्य की दृष्टि का प्रतिनिधित्व करते हैं।",
        register: "पंजीकरण",
        signUp: "साइन अप करें",
        footer: "ऑनलाइन मतदान प्रणाली &copy; 2024 - सभी अधिकार सुरक्षित"
    }
};

// Load language when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language from localStorage, default to English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    // Apply the language to the current page
    applyLanguage(savedLanguage);
    
    // Find the language dropdown
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Set the dropdown value to the saved language
        languageSelect.value = savedLanguage;
        
        // Listen for language changes and update localStorage
        languageSelect.addEventListener('change', () => {
            const selectedLanguage = languageSelect.value;
            localStorage.setItem('selectedLanguage', selectedLanguage);
            applyLanguage(selectedLanguage);
        });
    }
});

// Function to apply the selected language
function applyLanguage(language) {
    // Make sure the language exists in the translations object
    if (!translations[language]) return;

    // Update the text for each part of the page
    document.getElementById('main-title')?.innerText = translations[language].title;
    document.getElementById('main-subtitle')?.innerText = translations[language].subtitle;
    document.getElementById('nav-home')?.innerText = translations[language].home;
    document.getElementById('nav-help')?.innerText = translations[language].help;
    document.getElementById('nav-signup')?.innerText = translations[language].signup;
    document.getElementById('nav-login')?.innerText = translations[language].login;
    document.getElementById('nav-about')?.innerText = translations[language].about;
    document.getElementById('nav-contact')?.innerText = translations[language].contact;
    document.getElementById('upcoming-election')?.innerText = translations[language].election;
    document.getElementById('participate-msg')?.innerText = translations[language].participate;
    document.getElementById('btn-register')?.innerText = translations[language].register;
    document.getElementById('btn-signup')?.innerText = translations[language].signUp;
    document.getElementById('footer-msg')?.innerText = translations[language].footer;
}

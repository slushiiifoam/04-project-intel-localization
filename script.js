// Beginner-friendly: This script checks the page language and updates RTL mode if needed.

// List of RTL languages
const rtlLangs = ['ar', 'he', 'fa', 'ur', 'yi', 'ps', 'ku', 'dv'];

// Function to check and apply RTL mode
function updateRTL() {
  // Get the current language from the <html> tag
  const html = document.documentElement;
  const lang = html.getAttribute('lang') || 'en';

  // If the language is RTL, set dir="rtl", else dir="ltr"
  if (rtlLangs.some(l => lang.startsWith(l))) {
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  } else {
    html.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl');
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateRTL);

// Watch for changes to the <html> lang attribute (Google Translate changes this)
const observer = new MutationObserver(updateRTL);
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });


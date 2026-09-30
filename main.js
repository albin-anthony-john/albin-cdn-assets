
document.getElementById("current-year").textContent = new Date().getFullYear();

/* =========================================================
OS-SPECIFIC SEARCH SHORTCUT
========================================================= */
const shortcutKey = document.getElementById("shortcut-key");
const searchInput = document.getElementById("search-input");
const isMac = navigator.platform.toUpperCase().includes("MAC");
shortcutKey.textContent = isMac ? "⌘K" : "Ctrl K";

/* =========================================================
SEARCH SHORTCUT
========================================================= */
document.addEventListener("keydown", function (event) {
    const modifier = isMac ? event.metaKey : event.ctrlKey;
    if (modifier && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInput.focus();
    }
});
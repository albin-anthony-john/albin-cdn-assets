
document.getElementById("current-year").textContent = new Date().getFullYear();

// CDN Assets
const assets = [
    {
        name: "Albin Export",
        path: "/albin-portfolio/images/albin-export.png"
    }, 
	{
        name: "Albin MyLook",
        path: "/albin-portfolio/images/albin-mylook.png"
    },
	{
        name: "Bg Dark",
        path: "/albin-portfolio/images/bg-dark.png"
    },
	{
        name: "Bg Light",
        path: "/albin-portfolio/images/bg-light.png"
    },
	{
        name: "Cipher Vault Web",
        path: "/albin-portfolio/images/cipher-vault-web.png"
    },
	{
        name: "Educacion App",
        path: "/albin-portfolio/images/educacion-app.png"
    },
	{
        name: "Migration Studio",
        path: "/albin-portfolio/images/migration-studio.png"
    },
	{
        name: "Olympus Backend",
        path: "/albin-portfolio/images/olympus-backend.png"
    },
	{
        name: "Open Object Storage",
        path: "/albin-portfolio/images/open-storage-object.png"
    },
	{
        name: "Screenshot landing",
        path: "/albin-portfolio/images/screenshot-landing.png"
    },
	{
        name: "Ticket Management System",
        path: "/albin-portfolio/images/ticket-management-system.png"
    },
	{
        name: "Unity Chat App",
        path: "/albin-portfolio/images/unity-chat-app.png"
    },
	{
        name: "Albin Portfolio Favicon",
        path: "/albin-portfolio/icons/favicon.ico"
    },
	{
        name: "Albin Resume Docx",
        path: "/albin-resumae/albin_anthony_resume.docx"
    },
	{
        name: "Albin Resume Pdf",
        path: "/albin-resumae/albin_anthony_resume.pdf"
    },
	{
        name: "Albin Resume Favicon",
        path: "/albin-resumae/icons/favicon.png"
    },{
        name: "Cipher Vault Favicon",
        path: "/cipher-vault/favicon.png"
    }
];

/* =========================================================
OS-SPECIFIC SEARCH SHORTCUT
========================================================= */
const shortcutKey = document.getElementById("shortcut-key");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const isMac = navigator.platform.toUpperCase().includes("MAC");
shortcutKey.textContent = isMac ? "⌘K" : "Ctrl K";

// Search
searchInput.addEventListener("input", function () {
    const search = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";
    if (!search) {
        return;
    }

    const filteredAssets = assets.filter(asset =>
        asset.name.toLowerCase().includes(search) ||
        asset.path.toLowerCase().includes(search)
    );

    filteredAssets.forEach(asset => {
        const link = document.createElement("a");
        link.href = asset.path;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "search-result";
        link.textContent = asset.name;
        searchResults.appendChild(link);
    });
});

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
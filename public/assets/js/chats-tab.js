function toggleSidebar() {
    const sidebar = document.getElementById("chatSidebar");
    const overlay = document.getElementById("sidebarOverlay");

    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
}
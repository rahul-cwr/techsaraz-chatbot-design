
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset all tabs
      tabButtons.forEach(b => b.classList.remove("bg-gray-800", "text-gray-50", "rounded-full"));
      tabContents.forEach(c => c.classList.add("hidden"));

      // Activate clicked tab
      btn.classList.add("bg-gray-800", "text-gray-50", "rounded-full");
      document.getElementById(btn.dataset.tab).classList.remove("hidden");
    });
  });


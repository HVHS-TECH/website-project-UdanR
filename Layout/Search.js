  const searchContainer = document.querySelector(".search-container");
  const searchIcon = document.querySelector(".search-icon");

  searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
  });

const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

const suggestionList = Object.keys(pages);

input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (!value) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = suggestionList.filter(item =>
    item.includes(value)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(match => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");
    div.textContent = match;

    div.onclick = () => {
      window.location.href = pages[match];
    };

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = "block";
});

// 🚀 press Enter to navigate
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.toLowerCase().trim();

    if (pages[value]) {
      window.location.href = pages[value];
    }
  }
});

// ❌ close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionsBox.style.display = "none";
  }
});


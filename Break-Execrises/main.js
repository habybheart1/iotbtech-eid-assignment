const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
  const isHidden = password.type === "password";

  password.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
  toggleBtn.setAttribute("aria-pressed", isHidden);
});
const yearEl = document.querySelector("#year");
const formEl = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");
const iframeEl = document.querySelector("#hidden-iframe");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

if (formEl && statusEl && iframeEl) {
  let submitted = false;
  const loadedAt = Date.now();
  const elapsedEl = formEl.querySelector('[name="_elapsed"]');

  formEl.addEventListener("submit", () => {
    if (elapsedEl) elapsedEl.value = String(Date.now() - loadedAt);
    submitted = true;
    statusEl.textContent = "Sending...";
  });

  iframeEl.addEventListener("load", () => {
    if (!submitted) return;
    submitted = false;
    formEl.reset();
    statusEl.textContent = "Thanks! Your message was sent.";
  });
}

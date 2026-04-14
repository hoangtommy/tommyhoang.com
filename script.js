const yearEl = document.querySelector("#year");
const formEl = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

if (formEl && statusEl) {
  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusEl.textContent = "Sending...";

    try {
      const response = await fetch(formEl.action, {
        method: "POST",
        body: new FormData(formEl),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      formEl.reset();
      statusEl.textContent = "Thanks! Your message was sent.";
    } catch (error) {
      statusEl.textContent = "Could not send message. Email me directly at hi@tommyhoang.com.";
    }
  });
}

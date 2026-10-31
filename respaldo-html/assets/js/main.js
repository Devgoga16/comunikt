// ComuniK-T — interacciones de la landing
(() => {
  const WA_NUMBER = "51953166549";
  const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  // Header con sombra al hacer scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú móvil
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Botones "Consultar por esta terapia": abren WhatsApp con la terapia elegida
  document.querySelectorAll("[data-service]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.service;
      window.open(waLink(`Hola ComuniK-T, quisiera información sobre ${service} para mi hijo(a).`), "_blank", "noopener");
    });
  });

  // Formulario: arma el mensaje y lo envía por WhatsApp
  const form = document.getElementById("wa-form");
  const error = document.getElementById("form-error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const required = ["nombre", "edad", "terapia"];
    let ok = true;
    required.forEach((name) => {
      const field = form.elements[name];
      const empty = !String(data.get(name) || "").trim();
      field.classList.toggle("is-invalid", empty);
      if (empty) ok = false;
    });
    error.hidden = ok;
    if (!ok) {
      form.querySelector(".is-invalid").focus();
      return;
    }

    const lines = [
      "Hola ComuniK-T, quisiera agendar una evaluación.",
      `• Mi nombre: ${data.get("nombre").trim()}`,
      `• Edad de mi hijo(a): ${data.get("edad").trim()}`,
      `• Terapia de interés: ${data.get("terapia")}`,
      `• Modalidad: ${data.get("modalidad")}`,
      `• Turno preferido: ${data.get("turno")}`,
    ];
    const msg = String(data.get("mensaje") || "").trim();
    if (msg) lines.push(`• Comentario: ${msg}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
  form.querySelectorAll("input, select").forEach((f) =>
    f.addEventListener("input", () => f.classList.remove("is-invalid"))
  );

  // Animación de entrada
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();

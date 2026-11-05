// Google Analytics 4 + eventos de clic en WhatsApp/teléfono (conversiones).
(function () {
  var id = document.currentScript && document.currentScript.dataset.ga;
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.indexOf("wa.me") > -1) gtag("event", "contacto_whatsapp", { ubicacion: a.dataset.track || "otro", pagina: location.pathname });
    else if (href.indexOf("tel:") === 0) gtag("event", "contacto_telefono", { pagina: location.pathname });
    else if (href.indexOf("mailto:") === 0) gtag("event", "contacto_email", { pagina: location.pathname });
  });
})();

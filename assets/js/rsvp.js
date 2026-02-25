(function () {
  const panels = document.querySelectorAll(".rsvp-panel");
  if (!panels.length) return;

  let currentStep = 1;

  const showStep = (step) => {
    currentStep = step;
    panels.forEach((panel) => {
      panel.classList.toggle(
        "rsvp-panel--active",
        Number(panel.dataset.step) === currentStep
      );
    });
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".rsvp-panel__primary, .rsvp-panel__secondary");
    if (!btn) return;

    const isPrimary = btn.classList.contains("rsvp-panel__primary");

    if (isPrimary && currentStep < 4) {
      showStep(currentStep + 1);
    } else if (!isPrimary && currentStep > 1) {
      showStep(currentStep - 1);
    } else if (isPrimary && currentStep === 4) {
   
      const modal = document.querySelector(".rsvp-modal");
      if (modal) modal.style.display = "flex";
    }
  });

  const modal = document.querySelector(".rsvp-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("rsvp-modal__btn") ||
        e.target === modal
      ) {
        modal.style.display = "none";
        showStep(1);
      }
    });
  }
})();
(() => {
  const refs = {
    openMoBtn: document.querySelector("[data-mob-open]"),
    closeMoBtn: document.querySelector("[data-mob-close]"),
    mob: document.querySelector("[data-mob]"),
  };

  refs.openMobBtn.addEventListener("click", toggleMob);
  refs.closeMobBtn.addEventListener("click", toggleMob);

  function toggleMob() {
    refs.mob.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

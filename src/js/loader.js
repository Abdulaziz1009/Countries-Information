const loaderEl = document.querySelector(".loader");
const loaderToggle = (info) => { //It means, if there is any info coming, loader is displayed, so here is (info)
  if (info) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};

export default loaderToggle;

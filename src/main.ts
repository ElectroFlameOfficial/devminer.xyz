import "@fontsource/inter/400.css";
import "fork-awesome/css/fork-awesome.min.css";
import "./style.css";

const showMoreProjectsButton = document.querySelector(
  "#show-more-projects"
) as HTMLButtonElement;
let moreProjectsVisible = false;

showMoreProjectsButton.addEventListener("click", () => {
  const projects = document.querySelectorAll(".card");

  if (moreProjectsVisible) {
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.add("hidden");
    }

    showMoreProjectsButton.innerHTML = "Show More";
  } else {
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove("hidden");
    }

    showMoreProjectsButton.innerHTML = "Show Less";
  }

  moreProjectsVisible = !moreProjectsVisible;
});

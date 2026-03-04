const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((response) => response.json()) //promise of json data
    .then((json) => displayLesson(json.data));
};
const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="border-2 rounded-md border-[#422AD5]">
        <a class="flex gap-2 px-4 py-2">
        <img src="./assets/fa-book-open.png" alt="" />
        <p class="text-[#422AD5] text-sm leading-5 font-semibold">lesson-${lesson.level_no}</p>
        </a>
    </button>
        `;

    levelContainer.append(btnDiv)
  }
};
loadLessons();

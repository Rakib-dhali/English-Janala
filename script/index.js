const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((response) => response.json()) //promise of json data
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url).then(res => res.json()).then(data => displayLevelWord(data.data))
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML=""

    words.forEach(word => {
        console.log(word);
        const card = document.createElement('div')
        card.innerHTML=`<p>cat<p>`

        wordContainer.append(card)
        
    });

}

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})" class="border-2 rounded-md border-[#422AD5]">
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

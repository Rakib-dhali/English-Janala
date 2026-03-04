const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((response) => response.json()) //promise of json data
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      removeActive();
      clickBtn.classList.add("active");
      displayLevelWord(data.data);
    });
};

const removeActive = () => {
  const lessonBtn = document.querySelectorAll(".lesson-btn");
  console.log(lessonBtn);
  lessonBtn.forEach((btn) => btn.classList.remove("active"));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length === 0) {
    wordContainer.innerHTML = `
    <div class="text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla">
        <img class="mx-auto" src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-400">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
    
    `;
    return;
  }

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded text-center shadow-sm py-10 px-5 spacey-y-4">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold text-2xl">Meaning/Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">
          ${word.meaning}/${word.pronunciation}
        </div>
        <div class="flex items-center justify-between">
          <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>

      </div>`;

    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="border-2 rounded-md border- text-[#422AD5] lesson-btn">
        <a class="flex gap-2 px-4 py-2">
        <i class="fa-solid fa-book-open"></i>
        <p class=" text-sm leading-5 font-semibold">lesson-${lesson.level_no}</p>
        </a>
    </button>
        `;

    levelContainer.append(btnDiv);
  }
};
loadLessons();

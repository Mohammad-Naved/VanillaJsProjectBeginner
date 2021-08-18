let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");
let notFound = document.querySelector(".not__found");
let def = document.querySelector(".def");
let audioBox = document.querySelector(".audio");
let loading = document.querySelector(".loading");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //clearData
  audioBox.innerHTML = "";
  notFound.innerText = "";
  def.innerText = "";

  //Get input Data
  let word = input.value;

  //Call API//Get Data
  if (word === "") {
    alert("Word is required");
  }

  getData(word);
});
const APIKEY = "c0651045-2ae1-4440-846e-4f0f0bd41ebc";
async function getData(word) {
  //loading show
  loading.style.display = "block";
  //Ajax Call
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${APIKEY}`
  );

  const data = await response.json();
  //if result is empty
  if (!data.length) {
    loading.style.display = "none";
    notFound.innerHTML = "No Result found";
    return;
  }
  //if result is suggestions

  if (typeof data[0] === "string") {
    loading.style.display = "none";
    let heading = document.createElement("h3");
    heading.innerHTML = "Did you mean";
    notFound.appendChild(heading);

    data.forEach((element) => {
      let suggestions = document.createElement("span");
      suggestions.classList.add("suggested");
      suggestions.innerText = element;

      notFound.appendChild(suggestions);
    });
    return;
  }
  //result found
  loading.style.display = "none";
  let definition = data[0].shortdef[0];
  def.innerText = definition;
  //sound

  const soundName = data[0].hwi.prs[0].sound.audio;

  if (soundName) {
    renderSound(soundName);
  }

  console.log(data);
}

function renderSound(soundName) {
  //https://media.merriam-webster.com/audio

  let subFolder = soundName.charAt(0);
  let soundSrc = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subFolder}/${soundName}.mp3`;
  let aud = document.createElement("audio");
  aud.src = soundSrc;
  aud.controls = true;
  audioBox.appendChild(aud);
}

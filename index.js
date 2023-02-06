const inputEmojiField = document.getElementById("input-emoji");
const pushBtn = document.getElementById("push-btn");
const shiftBtn = document.getElementById("shift-btn");
const popBtn = document.getElementById("pop-btn");
const unshiftBtn = document.getElementById("unshift-btn");
let emojiDisplayContainer = document.getElementById("emoji-container");
let savedEmojis = [];

renderEmojis = () => {
  emojiDisplayContainer.innerHTML = "";
  let emojis = "";
  let retrievedData = localStorage.getItem("myEmoji");
  savedEmojis = JSON.parse(retrievedData);
  if (savedEmojis) {
    for (let i = 0; i < savedEmojis.length; i++) {
      emojis += `<span> ${savedEmojis[i]} </span>`;
    }
  }
  emojiDisplayContainer.innerHTML = emojis + " ";
};

renderEmojis();

addEmoji = (emoji) => {
  if (emoji) {
    if (!savedEmojis) savedEmojis = [];
    savedEmojis.push(emoji);
    console.log(savedEmojis);
    localStorage.setItem("myEmoji", JSON.stringify(savedEmojis));
    renderEmojis();
    inputEmojiField.value = "";
  }
};

deleteEmojiFromEnd = () => {
    alert("hi")
    renderEmojis()
}

pushBtn.addEventListener("click", () => addEmoji(inputEmojiField.value));
popBtn.addEventListener('click', deleteEmojiFromEnd)
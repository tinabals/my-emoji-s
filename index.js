

const inputEmojiField = document.getElementById("input-emoji");
const pushBtn = document.getElementById("push-btn");
const shiftBtn = document.getElementById("shift-btn");
const popBtn = document.getElementById("pop-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const clearBtn = document.getElementById("clear-btn");
const emojiRegex = (/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)
let emojiDisplayContainer = document.getElementById("emoji-container");
let savedEmojis = Array();


const renderEmojis = () => {
  emojiDisplayContainer.innerHTML = ""
  let emojis = "";
  let retrievedData = localStorage.getItem("myEmoji")
  savedEmojis = JSON.parse(retrievedData) || [];
  if (savedEmojis) {
    for (let i = 0; i < savedEmojis.length; i++) {
      emojis += `<span> ${savedEmojis[i]} </span>`
    }
  }
  emojiDisplayContainer.innerHTML = emojis + " "
 } 
 


const addEmoji = (emoji, position) => {
       if (!emoji){
        return alert("Type in an Emoji pls")
       }
       if (!emoji.match(emojiRegex)){
        inputEmojiField.value = ""
        return alert("Only emojis are required!")
       }
        position === 'start' ? savedEmojis.push(emoji) : savedEmojis.unshift(emoji)
        localStorage.setItem("myEmoji", JSON.stringify(savedEmojis))
        renderEmojis();
        inputEmojiField.value = ""
}


const deleteEmoji = (type) => {
    type === 'pop' ? savedEmojis.pop() : savedEmojis.shift()
    localStorage.setItem("myEmoji", JSON.stringify(savedEmojis));
    renderEmojis()
}

const DeleteAllEmojis = () => {
  localStorage.clear()
  renderEmojis()
}



pushBtn.addEventListener("click", () => addEmoji(inputEmojiField.value, 'start'));
unshiftBtn.addEventListener('click', () => addEmoji(inputEmojiField.value ) )
popBtn.addEventListener('click',() => deleteEmoji('pop'))
shiftBtn.addEventListener('click', deleteEmoji)
clearBtn.addEventListener('click', DeleteAllEmojis)

renderEmojis()
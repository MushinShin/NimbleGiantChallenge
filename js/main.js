const mainQuestHeader = document.querySelector(".mainQuest-header");
const sideQuestHeader = document.querySelector(".sideQuest-header");
const mainQuestList = document.querySelector(".list1");
const sideQuestList = document.querySelector(".list2");

let isRelative = true;
const handleClick = () => {
  let newValue = isRelative ? "relative" : "absolute";
  mainQuestList.classList.toggle("newlist");
  document.getElementById("list-main-quest").style.position = newValue;
  isRelative = !isRelative;
};

const handleClick2 = () => {
  sideQuestList.classList.toggle("newlist");
  document.getElementById("list-side-quest").style.position = "relative";
};

mainQuestHeader.onclick = handleClick;
sideQuestHeader.onclick = handleClick2;

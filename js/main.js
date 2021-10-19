const mainQuestHeader = document.querySelector(".mainQuest-header");
const sideQuestHeader = document.querySelector(".sideQuest-header");
const navBtnQuests = document.getElementById("nav-btn-Quest");
const navBtnSkills = document.getElementById("nav-btn-Skills");
const arrowDropDown = document.getElementById("arrow-dropdown");
const mainQuestList = document.querySelector(".list1");
const sideQuestList = document.querySelector(".list2");

const skillsContainer = document.getElementById("skills-container");
const questsContainer = document.getElementById("quests-container");

const handleDropDownClick = (list) => {
  const listElement = document.getElementById(list);
  listElement.classList.toggle("newlist");

  const arrowIcon = document.getElementById(`${list}_arrow`);
  arrowIcon.classList.toggle("inverted");

  const position = listElement.style.position;
  if (!position || position === "absolute") {
    listElement.style.position = "relative";
    return;
  }

  listElement.style.position = "absolute";
};

const handleTabChange = (tab) => {
  if (tab === "quests") {
    questsContainer.style.display = "block";
    skillsContainer.style.display = "none";
    navBtnQuests.children[0].style.backgroundColor = "#062438";
    navBtnSkills.children[0].style.backgroundColor = "inherit";
  } else if (tab === "skills") {
    skillsContainer.style.display = "flex";
    questsContainer.style.display = "none";
    navBtnSkills.children[0].style.backgroundColor = "#062438";
    navBtnQuests.children[0].style.backgroundColor = "inherit";
  }
};

navBtnQuests.onclick = () => handleTabChange("quests");
navBtnSkills.onclick = () => handleTabChange("skills");
mainQuestHeader.onclick = () => handleDropDownClick("list-main-quest");
sideQuestHeader.onclick = () => handleDropDownClick("list-side-quest");

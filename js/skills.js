let skillstitle = ["css", "html", "python", "js", "cpp", "java"];
let skillsValue = [80, 90, 90, 80, 20, 40];

let skills = document.querySelectorAll(".skills.container .skill .skill-name");
let value = document.querySelectorAll(".skills.container .skill .value");
let bar = document.querySelectorAll(".skills.container .skill .process-bar ");

for (let index = 0; index < skills.length; index++) {
  skills[index].innerHTML = `${skillstitle[index]}`;
  value[index].innerHTML = `${skillsValue[index]}%`;
  bar[index].style.width = `${skillsValue[index]}%`;
}

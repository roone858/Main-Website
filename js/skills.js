let skillstitle = ["css", "html", "Bootstrap", "React.js", "Node.js", "express", "python", "js", "cpp", "java"];
let skillsValue = [80, 90, 80, 70, 60, 50, 90, 80, 20, 40];


/*
<div class="skill">
          <span class="skill-name">skill</span>
          <span class="value">number</span>
          <div class="process">
            <div class="process-bar"></div>
          </div>
        </div>
 */

for (let index = 0; index < skillstitle.length; index++) {
  var div = document.createElement("div");
  div.className = "skill";
  var skillName = document.createElement("span");
  skillName.className = "skill-name";
  var skillValue = document.createElement("span");
  skillValue.className = "value";
  var process = document.createElement("div");
  process.className = "process";
  var processBar = document.createElement("div");
  processBar.className = "process-bar";
  process.appendChild(processBar);
  div.appendChild(skillName)
  div.appendChild(skillValue)
  div.appendChild(process)
  skillName.innerHTML = `${skillstitle[index]}`;
  skillValue.innerHTML = `${skillsValue[index]}%`;
  processBar.style.width = `${skillsValue[index]}%`;
  process.appendChild(processBar);
  div.appendChild(skillName)
  div.appendChild(skillValue)
  div.appendChild(process)
  document.querySelector(".skills .row").appendChild(div)

}


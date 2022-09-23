let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let reviewTitle = document.getElementById("review-title");
let rate = document.getElementById("rate");
let textarea = document.getElementById("textarea");
let submit = document.getElementById("submit");
var today = new Date();

let reviewsArr = [];
submit.addEventListener("click", function () {
  if (isInputsEmpty()) {
  
    reviewsArr.push({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      reviewTitle: reviewTitle.value,
      rate: rate.value,
      textarea: textarea.value,
    });

    clearTheValues();
    addToResultContainer();
  }else{
    alert("you must enter all inputs")
  }
});
function addToResultContainer() {
  document.querySelector(".result-container").innerHTML += translateObjToHTML(
    reviewsArr[reviewsArr.length - 1]
  );
}
function translateObjToHTML(object) {
  return ` 
    <div class="rev">
    <h2>${object.firstname} ${object.lastname}</h2>
      <p class="rate-date">rating :<span class="Date"> ${
        object.rate
      } / 5  </span>   &emsp; &emsp; &emsp;   ${today.getDate()} / ${
    +today.getMonth() + 1
  } / ${today.getFullYear()}</p>
      <p class="text-optional">
        ${object.textarea}
      </p>

    </div>`;
}
function clearTheValues() {
  for (const input of document.querySelectorAll("input,textarea")) {
    input.value = "";
  }
}
function isInputsEmpty() {
  for (const input of document.querySelectorAll("input")) {
    if (input.value == "") {
      return false;
    }
  }
  return true;
}
rate.addEventListener("click",function(){

   document.querySelector("label").innerText=`${rate.value} / 5`
})
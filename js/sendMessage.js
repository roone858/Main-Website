const sendBTN = document.getElementById("submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const floatMessage = document.getElementById("float-message");
sendBTN.addEventListener("click", () => {
  const newData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  fetch("http://localhost:3000/messages", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: JSON.stringify(newData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      floatMessage.style.display = "block";
      setTimeout(() => {
        floatMessage.style.display = "none";
      }, "10000");
    });
});

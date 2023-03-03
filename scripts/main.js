/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/marigold.jpeg") {
    myImage.setAttribute("src", "images/nasturtium.jpeg");
  } else {
    myImage.setAttribute("src", "images/marigold.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to companion planting, ${myName}`;
      }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to companion planting, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
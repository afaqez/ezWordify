import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "./firebase.js";

console.log("script loaded");

const dom = document;
const signupForm = dom.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Hello");
  const name = dom.getElementById("name").value;
  const email = dom.getElementById("email").value;
  const password = dom.getElementById("pass").value;
  console.log(name, email, password);
});

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingMessage = document.querySelector("#greeting h1");

const HIDDEN_CLASSNAME = "hidden";//strings used more at least twice
const UNHIDDEN_CLASSNAME = "unhidden";
const USERNAME_KEY = "username";//the name of a variable containing only string: UPPERCASE

function paintGreetings(username){
  greetingMessage.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(UNHIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username=loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  // greeting.innerText="Hello "+username;
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)
}else{
  paintGreetings(savedUsername);
}
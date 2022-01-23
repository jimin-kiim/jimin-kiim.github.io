const clock=document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello,5000);
// setTimeout(sayHello,5000);

function getClock() {
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");//converting number into string: String()
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock,1000);//making a new date object every second and print the time in the console.
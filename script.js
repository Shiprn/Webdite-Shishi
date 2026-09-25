let fname = "ShiShi";

function doSomething() {
    document.getElementById("test").innerHTML =
        `This is what javascript does for the website and BTW my name is ${fname}`;
}

let projects = 1;

console.log(projects);

let FirstName;

let submit = document.getElementById("mysubmit");
let heading = document.getElementById("myh1");

if (submit) {
    submit.onclick = function () {
        FirstName = document.getElementById("fname").value;

        localStorage.setItem("FirstName", FirstName);
    };
}

if (heading) {
    FirstName = localStorage.getItem("FirstName");

    heading.textContent = `Hello ${FirstName}`;
}
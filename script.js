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

let searchButton = document.getElementById("searchbutton");
let songinput = document.getElementById("songinput");

searchButton.addEventListener("click", function(){
   console.log(songinput.value)
   if (songinput.value === "") { results.textContent = "Did you search for something"

}
else{
  results.textContent = `You searched for ${songinput.value}`;
}
})

let results = document.getElementById("results")
 
let body = document.querySelector("body")
body.style = "background-color: rgb(20, 241, 230);"

let contener = document.getElementById("contener")
contener.innerHTML = `
<div id="calculator">
<h3>Calculator</h3>
<table>
<tr>
<input type="text" id="17" placeholder=" Result">
            <button class="button" id="deletebtn">C</button>
        </tr>
        <tr class="my">
            <td><button class="button" id="1">1</button></td>
            <td><button class="button" id="2">2</button></td>
            <td><button class="button" id="3">3</button></td>
            <td><button class="button" id="4">+</button></td>
        </tr>
        <tr>
            <td><button class="button" id="5">4</button></td>
            <td><button class="button" id="6">5</button></td>
            <td><button class="button" id="7">6</button></td>
            <td><button class="button" id="8">-</button></td>
        </tr>
        <tr>
            <td><button class="button" id="9">7</button></td>
            <td><button class="button" id="10">8</button></td>
            <td><button class="button" id="11">9</button></td>
            <td><button class="button" id="12">X</button></td>
        </tr>
        <tr>
        <td><button class="button" id="13">/</button></td>
        <td><button class="button" id="14">0</button></td>
        <td><button class="button" id="15">.</button></td>
        <td><button class="button" id="16">=</button></td>
        </tr>
        </table>
        <table>
            <tr>
            <td><a id="logotext" class="logotext">
            <div><img SRC="logo.png"></div> <div >Github</div>
            </a></td>
            <td><a id="darkmode" class="logobtn">Dark Mode🌛</a></td>
            <td><a id="lightmode" class="logobtn">Light Mode🌞</a></td>
            </tr>
            </table>       
</div>`


let lightmode = document.getElementById("lightmode")
lightmode.style = "display:none"

let darkmode = document.getElementById("darkmode")
darkmode.addEventListener("click", () => {
    body.style = "background-color: black;"
    for (let i = 1; i < 18; i++) {
        let element = document.getElementById(`${i}`)
        element.style = "background-color: rgb(70, 78, 78);color:white"
    }
    darkmode.style = "display:none"
    lightmode.style = "display:inline-flex"

});
lightmode.addEventListener("click", () => {
    body.style = "background-color: rgb(20, 241, 230);"

    for (let i = 1; i < 18; i++) {
        let element = document.getElementById(`${i}`)
        element.style = "background-color: white;color:black"
    }
    darkmode.style = "display:inline-flex"
    lightmode.style = "display:none"
});

let input = document.getElementById("17")
let button = document.querySelectorAll("button")
let screenValue = ''
for (item of button) {
    item.addEventListener("click", (e) => {
        let btntext = e.target.innerText
        if (btntext == "X") {
            btntext = "*"
            screenValue += btntext
            input.value = screenValue
        }
        else if (btntext == "=") {
            let ans= eval(screenValue)
            input.value ="Ans:"+(ans)
            screenValue = ''
        }
        else if (btntext == "C") {
            screenValue = ''
            input.value = screenValue

        }
        else {
            screenValue += btntext
            input.value = screenValue
        }
    })
}
let logo =document.getElementById("logotext")
logo.addEventListener("click",()=>{
    console.log("clicked on github");
    window.open("https://github.com/darshanahire")
    
})




const inputRotate = document.querySelector("input[name='rotate']");
const inputChangeBorder = document.querySelector("input[name='border']");
const testDiv = document.querySelector(".test")

inputRotate.addEventListener("input", (el) => {
    let val = el.target.value;
    if (val > 0) {
        testDiv.style.transform = "rotate(" + val + "deg)";
    }
});

function changeBorder() {
    console.log(inputChangeBorder);
    let val = inputChangeBorder.value;
    if (val > 0) {
        testDiv.style.border = inputChangeBorder.value + "px solid red";
    }
}
const msknama = document.getElementById("nama");
const mskemail = document.getElementById("email");
const mskoption = document.getElementById("Jenis");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const msknamaval = msknama.value
    const mskemailval = mskemail.value
    const mskopt = mskoption.value
    nameValidation(msknamaval, mskemailval, mskopt)
})

function nameValidation(mnama, memail, mopt) {
    if (mnama == "") {
        alert("Please type your name in")
    } else if (memail == "") {
        alert("Please type your email in")
    } else if (mopt == "") {
        alert("Please choose one of the options")
    } else {
        alert("Success")
    }
}

var slideidx = 1

setInterval(function() {
    plus(1)
}, 1500)

function plus(index) {
    showimg(slideidx += index)
}

function showimg(index) {
    console.log(index)
    const imglist = document.getElementsByClassName("slide")
    if (index > imglist.length) {slideidx = 1}
    if (index < 1) {slideidx = imglist.length}
    for (i = 0; i<imglist.length; i++) {
        imglist[i].style.display = "none"
    }
    imglist[slideidx-1].style.display = "block"
}
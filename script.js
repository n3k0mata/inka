const discordBtn = document.querySelector("#discord-btn");
const editBtn = document.querySelector("#edit-btn");
const openSourceBtn = document.querySelector("#open-source");
const tosBtn = document.querySelector("#tos-btn")
const helpBtn = document.querySelector("#help-btn")

discordBtn.addEventListener("click", function() {

    window.open("https://discord.gg/2tTEUtEha4", '_blank');

});

editBtn.addEventListener("click", function() {

    window.location.href = "editor/edit.html";

});

openSourceBtn.addEventListener("click", function() {

    window.open("https://github.com/anbinh0306/inka", '_blank');

})

tosBtn.addEventListener("click", function() {

    window.open("tos/tos.html", '_blank');

})

helpBtn.addEventListener("click", function() {

    window.open("help/help.html", '_blank');

})

console.log("Dep trai vc xD");
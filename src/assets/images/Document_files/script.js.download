"use strict";

const dropdownLinks = document.querySelectorAll(".dropdown");
const menuOpener = document.querySelector("#open");
const menuCloser = document.querySelector("#close");
const mobList = document.querySelector(".mob-list");

[...dropdownLinks].forEach((link) => {
    if (window.innerWidth > 800) {
        link.addEventListener("mouseenter", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.add("show");
        });

        link.addEventListener("mouseleave", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.remove("show");
        });
    } else {
        link.querySelector(".link").addEventListener("click", (e) => {
            e.preventDefault();
        });

        link.addEventListener("click", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.toggle("show");
        });
    }
});
menuOpener.addEventListener("click", () => {
    mobList.classList.add("show");
    document.body.style.overflow = "hidden";
    menuCloser.classList.add("show");
    menuOpener.classList.remove("show");
});
menuCloser.addEventListener("click", () => {
    mobList.classList.remove("show");
    document.body.style.overflow = "visible";
    menuCloser.classList.remove("show");
    menuOpener.classList.add("show");
});
function showHome() {
  document.getElementById('content').innerHTML = `
  <div style="display: grid; margin-top: 8rem; margin-right:10rem; >
    <h1 style="font-size:30px;">Welcome!</h1>
    <p style="color: red; padding-top:15%;">This is the home page content.</p>
 </div> `;
}

function showContact() {
  document.getElementById('content').innerHTML = `
  <div style="display: grid; margin-top: 8rem; padding-right:10rem; >
    <h1 style="color: red; padding-top: 15%;">Contact</h1>
    <p style="color: red; padding-top: 15%;">This is the contact information.</p>
 </div> `;
}

function showInformation() {
  document.getElementById('content').innerHTML = `
  <div style="display: grid; margin-top: 8rem; padding-right:10rem; >
    <h1 style="color: red; padding-top: 15%;">Information</h1>
    <p style="color: red; padding-top: 15%;">This is some information.</p>
</div>  `;
}

function showGuide() {
  document.getElementById('content').innerHTML = `
  <div style="display: grid; margin-top: 8rem; padding-right:10rem; >
    <h1 style=" padding-top: 10%;">Guide</h1>
    <p style="color: red; padding-top: 10%;">This is a Guide section.</p>
 </div> `;
}
function leftPanel() {
  var leftPanel= document.getElementById('leftpanel');
  if (leftPanel.style.display === "block") {
    leftPanel.style.display = "none";
  } else {
    leftPanel.style.display = "block";
  }
}


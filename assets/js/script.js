"use strict";

const markReadBtn = document.querySelector(".mark-read");
const unreadEL = document.querySelectorAll(".unread");
const notificationEL = document.querySelector(".number-of-message");
const dotEL = document.querySelectorAll(".dot");

console.log(markReadBtn, unreadEL, notificationEL, dotEL);

markReadBtn.addEventListener("click", function () {
  notificationEL.textContent = "0";
  for (let i = 0; i < unreadEL.length; i++) {
    unreadEL[i].style.backgroundColor = "#fff";
  }
  for (let i = 0; i < dotEL.length; i++) {
    dotEL[i].style.display = "none";
  }
});

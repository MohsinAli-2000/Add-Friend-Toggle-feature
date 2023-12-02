let button = document.querySelector(".btn");
let isfriend = document.querySelector(".status");
let check = 0;

button.addEventListener("click", () => {
  if (check === 0) {
    isfriend.innerHTML = "Friend";
    isfriend.style.color = "green";
    button.style.backgroundColor = "red";
    button.innerHTML = "Remove -";
    check = 1;
  } else {
    isfriend.innerHTML = "Unknown";
    isfriend.style.color = "red";
    button.style.backgroundColor = "blue";
    button.innerHTML = "Add Friend +";
    check = 0;
  }
});

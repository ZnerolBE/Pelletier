function mobileMenu() {
    let x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

function mobileMenuClose() {
    let x = document.getElementById("menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex"
    }
}

console.log(mobileMenu())
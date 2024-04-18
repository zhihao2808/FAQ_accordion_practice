const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", function(){
    const plus = this.querySelector(".plus");
    const minus = this.querySelector(".minus");
    const answer = this.parentNode.nextElementSibling;

    if (minus.style.display == "none") {
      plus.style.display = "none";
      minus.style.display = "block";
      answer.style.display = "block";
    } else {
      plus.style.display = "block";
      minus.style.display = "none";
      answer.style.display = "none";
    }
  });
});
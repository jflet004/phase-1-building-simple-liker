// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Remove Error Message
const errorMsg = document.querySelector("#modal");
errorMsg.setAttribute("class", "hidden");

let likeBtn = document.querySelectorAll(".like-glyph");
likeBtn.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then((data) => {
        if (heart.classList.toggle("activated-heart")) {
          heart.textContent = FULL_HEART;
        } else {
          heart.textContent = EMPTY_HEART;
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        errorMsg.removeAttribute("class");
        setTimeout(() => {
          errorMsg.setAttribute("class", "hidden");
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

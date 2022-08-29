const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);

function play() {
  const userNumber = document.querySelector("#guess").value;

  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Enter a number from 1 to 20!",
    });
  } else if (isNaN(userNumber)) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Enter a number!",
    });
  } else {
    if (userNumber > answer) {
      Swal.fire("Your guess is too high!", "A computer is winning by now");
    } else if (userNumber < answer) {
      Swal.fire("Your guess is too low!", "A computer is winning by now");
    } else {
      Swal.fire({
        title: "Hurray! You are a winner!",
        imageUrl:
          "https://img.freepik.com/premium-vector/realistic-golden-trophy-with-gold-laurel-wreath-ribbon_48799-147.jpg?w=2000",
        imageAlt: "Victory!",
      });
    }
  }
}

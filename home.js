
function increaseHeartCount() {
    const counter = document.getElementById("heart-count");
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
  }
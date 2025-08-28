
function increaseHeartCount() {
    const counter = document.getElementById("heart-count");
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
  }

  function increaseCopyButton(){
    const copyCounter = document.getElementById('countCopy');
    let copy = parseInt(copyCounter.innerText);
    copy++;
    copyCounter.innerText = copy;
  }




  let coins = 100;

  function getDateTime(){
    const now = new Date();
    return now.toLocaleString();
  }
  
  document.getElementById('call1').addEventListener('click', function(e){
    e.preventDefault()
    const name = document.getElementById('name1').textContent;
    const number = document.getElementById('number2').textContent;

    if(coins < 20){
        alert('Not enough coins to call');
        return;
    }

    coins -= 20;
    document.getElementById('coins').textContent = coins;
    alert(`Calling ${name} at ${number}`);

    const li = document.createElement('li');
    li.textContent = `${name} - at ${number} (called at: ${getDateTime()})`;
    document.getElementById('callHistory').appendChild(li)
  })

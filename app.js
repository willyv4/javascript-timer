function countDown(num) {
  let id = setInterval(function () {
    console.log(num--);
    if (num <= 0) {
      clearInterval(id);
      console.log("DONE!");
    }
  }, 1000);
}

countDown(4);

function randomGame(num) {
  num = 0;
  let id = setInterval(function () {
    num++;
    let randNum = Math.random() * 1;
    console.log(`Counter:${num}  ${randNum}`);
    if (randNum > 0.75) {
      clearInterval(id), console.log(`It took ${num} try/tries.`);
    }
  }, 1000);
}

randomGame(5);

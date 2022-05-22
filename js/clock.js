const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000);

//setInterval(sayHello, 5000);// 5초에 한번씩 함수 연속 실행
//setTimeout(sayHello,5000);// 5초에 한번 실행
//"1".padStart(2,"0")// 01로  패딩이라고 생각하면 편하다?
//"1".padEnd(2, "0"); // 10로
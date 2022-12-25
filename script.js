let button = document.querySelectorAll(".days")
let btnRestart = document.querySelector(".restart")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let iframe = document.querySelector("iframe")
let btnClose = document.querySelectorAll(".closeBtn")
let container = document.querySelectorAll(".container")
let changeTheme = document.querySelector(".changeT")
let points = 0
let cancelBtnCount = 0
if (localStorage.getItem('points') == null) {
  localStorage.setItem('points', points)
}
else {
  const localPoints = localStorage.getItem('points');
  console.log("Points: " + localPoints);
  points = localStorage.getItem('points')
}
let localBtnGreen = localStorage.getItem("buttonGreen")
let localBtnRed = localStorage.getItem("buttonRed")
if (localBtnGreen != null && localBtnRed != null) {
  button[0].innerText = localBtnGreen;
  button[1].innerText = localBtnRed;
}
let localVideo = localStorage.getItem("videos")

if (localVideo != null) {
  iframe.src = "https://www.youtube.com/embed/" + localVideo
}
let text = localStorage.getItem("text")
if(text != null){
h2.innerText = text
}
let switcher = false;
let body = document.querySelector("body")
let massiveSwitcher = [false, false, false, false, false, false, false, false, false, false]
let btnSwitcher = true


btnRestart.addEventListener("click", function() {
  window.location.reload()
  localStorage.clear()
})

let massiveText = ["Восстановительный кросс (пульс 132) час+ 6х100м ритмовые ускорения через 100м активной ходьбы.Растяжка\
  Пресс, спина ", "Развивающий кросс (пульс до 148): 1 час (первые 30 минут в восстановительном режиме - пульс до 132)\
Силовые упр-ния ", "Разминка (пульс до 132): 15 минут + небольшая растяжка\
8х(2 минуты до пульса 158-166 через 3 минуты (до пульса 140 не переходя на шаг))\
Заминка (пульс до 132): 10 минут", "Длительный кросс 14 км -16 км, растяжка", "Кросс отрезки в гору 8 по 400м, с горы расслаб легкий бег, Силовые упр-ния ", "Восстановительный кросс (пульс 132) 25 мин+ 5х200м ритмовые ускорения через 200м активной ходьбы\
Пресс, спина ", "Равномерный кросс (пульс 132) 12 км, Растяжка, гибкость,Силовые упр-ния", "Кросс темп 8км. 2км пульс  до 140+2 км пульс до 150\
Растяжка", "Пресс, спина ", "Разминка 2 км пульс до 132, +6км темп пульс 158-166\
Растяжка"]

let videos = {
  "1": "EvwuTw6rjTY",
  "2": "cLcQU9rVgmY",
  "5": "cLcQU9rVgmY",
  "6": "EvwuTw6rjTY",
  "7": "cLcQU9rVgmY",
  "9": "EvwuTw6rjTY",

}


let massiveButtonRan = ["первый день пробежал", "второй день пробежал", "третий день пробежал", "четвертый день пробежал", "пятый день пробежал", "шестой день пробежал", "седьмой день пробежал", "восьмой день пробежал", "девятый день пробежал", "десятый день пробежал"]

let massiveButtonDidntRan = ["первый день не пробежал", "второй день не пробежал", "третий день не пробежал", "четвертый день не пробежал", "пятый день не пробежал", "шестой день не пробежал", "седьмой день не пробежал", "восьмой день не пробежал", "девятый день не пробежал", "десятый день не пробежал"]

let massiveOpenClose = ["первый", "второй", "третий", "четвертый", "пятый", "шестой", "седьмой", "восьмой", "девятый", "десятый"]

h1.innerText = ("points: " + points)

changeTheme.addEventListener("click", function() {
  if (btnSwitcher) {
    body.style.backgroundColor = "grey"
    btnSwitcher = false
  }
  else {
    body.style.backgroundColor = "white"
    btnSwitcher = true
  }


})






for (let i = 0; i < btnClose.length; i = i + 1) {
  btnClose[i].addEventListener("click", function() {
    if (massiveSwitcher[i] == false) {
      btnClose[i].innerText = "✅"
      container[i].style.height = "0px"
      massiveSwitcher[i] = true;
    }

    else {
      btnClose[i].innerText = "❌"
      container[i].style.height = "auto"
      massiveSwitcher[i] = false;
    }

  })
}

button[0].addEventListener("click", function() {
nextStep()
})

function nextStep() {
  console.log(points)
  points += 1
  if (points >= 10) {
    container[0].style.height = "0px";
    btnClose[0].innerText = "✅"
    btnClose[0].disabled = true
  points.innerText = "points: 10"

  }

  

  if (!(points > 10)) {


    h2.innerText = massiveText[points]
    localStorage.setItem('text', massiveText[points]);
    if ((points >= 2 && points < 4) || points == 7 || points == 9) {
      iframe.style.display = "none"
    }
    else {
      iframe.style.display = "inline-block"
      iframe.src = "https://www.youtube.com/embed/" + videos[points + 1]
      localStorage.setItem('videos', videos[points + 1]);
    }

    h1.innerText = ("points: " + ( points - cancelBtnCount))
    localStorage.setItem('points',  points - cancelBtnCount);
    button[0].innerText = massiveButtonRan[points]
    localStorage.setItem('button', points);
    button[1].innerText = massiveButtonDidntRan[points]
    localStorage.setItem('buttonGreen', massiveButtonRan[points]);
    localStorage.setItem('buttonRed', massiveButtonDidntRan[points]);



  }
}


button[1].addEventListener("click", function() {
cancelBtnCount += 1
nextStep()
    h1.innerText = "points: " +  + (points - cancelBtnCount)
})
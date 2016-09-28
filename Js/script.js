document.addEventListener('DOMContentLoaded',init)

function init () {

  var body = document.querySelector('body')
  var h1 = document.querySelector('h1')
  var startButton = document.querySelector('#start')

  startButton.addEventListener('click', startTimer)

  function startTimer() {
    window.setInterval(start, 1000)
  }
  var time = 0
  function start () {
    time += 1
    h1.textContent = "Time elapsed: " + time
  }

}

document.addEventListener('DOMContentLoaded',init)

function init () {

  var body = document.querySelector('body')
  var h1 = document.querySelector('h1')
  var startButton = document.querySelector('#start')
  var startTime = 0

  startButton.addEventListener('click', updateTime)

  function updateTime() {
    startTime = window.setInterval(start, 1000)
    return startTime
  }
  var time = 0
  function start () {
    time += 1
    h1.textContent = "Time elapsed: " + time
  }

  var pauseButton = document.querySelector('#pause')

  pauseButton.addEventListener('click',pauseTime)

  function pauseTime(){
    window.clearInterval(startTime)
  }

  var resetButton = document.querySelector('#reset')

  resetButton.addEventListener('click', resetTime)

  function resetTime(){
    window.clearInterval(startTime)
    time = 0
    h1.textContent = "Time elapsed: " + time
    window.setTimeout(stopWatch, 1500)
    function stopWatch (){
      h1.textContent = "Stop Watch"
    }
  }
}

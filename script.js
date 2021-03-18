let durationInput = document.getElementById('duration')
let startButton = document.getElementById('start')
let pauseButton = document.getElementById('pause')
let circle = document.querySelector('circle')

const perimetr = circle.getAttribute('r') * 2 * Math.PI

circle.setAttribute('stroke-dasharray', perimetr)

let duration

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            perimetr * timeRemaining / duration - perimetr
        )
    },
    onComplete() {
        alert('Timer is completed')
    }
})
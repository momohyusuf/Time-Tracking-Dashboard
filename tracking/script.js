const work = document.getElementById('currentWk')
const study = document.getElementById('currentSt')
const excersice = document.getElementById('currentEx')
const play = document.getElementById('currentPl')
const social = document.getElementById('currentSl')
const selfCare = document.getElementById('currentSf')

const workPr = document.getElementById('previousWk')
const studyPr = document.getElementById('previousSt')
const excersicePr = document.getElementById('previousEx')
const playPr = document.getElementById('previousPl')
const socialPr = document.getElementById('previousSl')
const selfCarePr = document.getElementById('previousSf')


function dailyToggle () {
   work.innerHTML = "5hrs"
   workPr.innerHTML = 'Yesterday 7hrs'
   study.innerHTML ="0hr"
   studyPr.innerHTML = 'Yesterday 1hr'
   excersice.innerHTML="1hr"
   excersicePr.innerHTML = 'Yesterday 1hr'
   play.innerHTML='1hr'
   playPr.innerHTML = 'Yesterday 2hrs'
   social.innerHTML='1hr'
   socialPr.innerHTML = 'Yesterday 2hrs'
   selfCare.innerHTML='0hr'
   selfCarePr.innerHTML = 'Yesterday 1hr'


}

function weeklyToggle () {
    work.innerHTML = "32hrs"
    workPr.innerHTML = 'last Week 36hrs'
    study.innerHTML ="4hrs"
    studyPr.innerHTML = 'last Week 7hrs'
    excersice.innerHTML="4hrs"
    excersicePr.innerHTML = 'last Week 5hrs'
    play.innerHTML='10hrs'
    playPr.innerHTML = 'last Week 8hrs'
    social.innerHTML='5hrs'
    socialPr.innerHTML = 'last Week 10hrs'
    selfCare.innerHTML='2hrs'
    selfCarePr.innerHTML = 'last Week 2hrs'
 
 }

 function monthlyToggle () {
    work.innerHTML = "103hrs"
    workPr.innerHTML = 'last Month 128hrs'
    study.innerHTML ="13hrs"
    studyPr.innerHTML = 'last Month 19hrs'
    excersice.innerHTML="11hrs"
    excersicePr.innerHTML = 'last Month 18hrs'
    play.innerHTML='23hrs'
    playPr.innerHTML = 'last Month 29hrs'
    social.innerHTML='21hrs'
    socialPr.innerHTML = 'last Month 23hrs'
    selfCare.innerHTML='7hrs'
    selfCarePr.innerHTML = 'last Month 11hrs'
 
 
 }
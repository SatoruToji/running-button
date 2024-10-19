const RUNNER = document.getElementById('running-button') as HTMLButtonElement

function getRandomInt(min: number, max: number){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setRandomInt(): void{
  RUNNER.style.left = getRandomInt(0, 1200)+'px'
  RUNNER.style.top = getRandomInt(0, 600)+'px'
}

function getDistract(): void{
  const OBJECT = document.createElement('bytton') as HTMLButtonElement
  OBJECT.textContent = 'Бу испугался? не бойся я друг я тебя не обижу иди сюда иди ко мне сядь рядом со мной посмотри мне в глаза ты видишь меня я тоже тебя вижу давай смотреть друг на друга до тех пор пока наши глаза не устанут ты не хочешь почему что-то не так '
  document.body.appendChild(OBJECT)
}

RUNNER.addEventListener("mouseover", () => {
  RUNNER.innerText = 'dont do it'
  setRandomInt()
})

RUNNER.addEventListener('click', ()=>{
  getDistract()
  const shovelEl = document.getElementById('shovel') as HTMLElement
  shovelEl.style.display="block"
})
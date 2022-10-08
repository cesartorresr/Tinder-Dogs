// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'
let currentIndex = 0

// creo un nuevo objeto perro con la clase Dog
let newPerro = new Dog(dogs[currentIndex])

//renderizo todo para que se vea el nuevo perro que cree en mi html
function render() {
    document.getElementById('main').innerHTML = newPerro.getDogHtml()
}

// agarro los botones para que hagan algo cuando les de click
document.getElementById('yes').addEventListener('click', like)
document.getElementById('cross').addEventListener('click', cross )

// function para que salga un nuevo perro de la lista de datos que tengo y quito el stilo rojo que se activo cuando presione click

function getNewDog() {
    currentIndex +=1
    newPerro = new Dog(dogs[currentIndex])
    document.getElementById('cross').classList.remove('rojo')
    document.getElementById('yes').classList.remove('verde')
    render()
}

// cuando le de like para que salga el like en la foto

function like() {
    newPerro.setMatchStatus(true)
    green()
    setTimeout(getNewDog, 3000)
    
   
}

// cuando le de no para que salga el no en la foto

function cross() {
    newPerro.setMatchStatus(false)
    no()
    setTimeout(getNewDog, 3000)
}

// estilo que aparece solo cuando le doy like
function green() {
    document.getElementById('liked').style.display = 'inline-block'
    document.getElementById('yes').classList.add('verde')
}

//estilo que aparece solo cuando le doy NO
function no() {
    document.getElementById('nope').style.display = 'inline-block'
    document.getElementById('cross').classList.add('rojo')
}


render()
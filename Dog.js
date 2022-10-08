// Create the Dog class here
import dogs from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const {avatar, name, age, bio} = this
        return `<img class="imagen-perros" src="${avatar}" alt="main"/>
                <img src="./images/badge-like.png" id="liked" />
                <img src="./images/badge-nope.png" id="nope" />
                <div class="container-text">
                    <h4 class="h1">${name}, ${age} </h4>
                    <p class="p1"> ${bio} </p>
                </div>`
                
            }  
}






export default Dog;

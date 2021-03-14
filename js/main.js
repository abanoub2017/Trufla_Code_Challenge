
// Define 
const sideMenu =  document.getElementById('sideMenuItem')
const contact = document.getElementById('contact')
const qoute = document.getElementById('qoute')
const dropDwon = document.getElementById('dropDwonContent')
const body = document.getElementById('body')

// Toggle Menu
function toggleMenu(){
    sideMenu.classList.toggle('hiden-menu')
    contact.classList.toggle('d-none')
    qoute.classList.toggle('d-none')
    body.classList.toggle('overflow-x-hidden')
}

// Toggel Drop Dwon
function toggelDropDwon(){
    dropDwon.classList.toggle('d-inline')
}
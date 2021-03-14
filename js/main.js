
// Define 
const sideMenu =  document.getElementById('sideMenuItem')
const contact = document.getElementById('contact')
const qoute = document.getElementById('qoute')
const dropDwon = document.getElementById('dropDwonContent')

// Toggle Menu
function toggleMenu(){
    sideMenu.classList.toggle('hiden-menu')
    contact.classList.toggle('d-none')
    qoute.classList.toggle('d-none')
}

// Toggel Drop Dwon
function toggelDropDwon(){
    dropDwon.classList.toggle('d-inline')
}
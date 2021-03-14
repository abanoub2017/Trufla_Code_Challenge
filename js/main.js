// Toggle Menu
function toggleMenu(){
    const sideMenu =  document.getElementById('sideMenuItem')
    const contact = document.getElementById('contact')
    const qoute = document.getElementById('qoute')
    
    sideMenu.classList.toggle('hiden-menu')
    contact.classList.toggle('d-none')
    qoute.classList.toggle('d-none')
}

// Toggel Drop Dwon
function toggelDropDwon(){
    const dropDwon = document.getElementById('dropDwonContent')
    dropDwon.classList.toggle('d-inline')
}
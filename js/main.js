let mobileMenu = document.querySelector('.mobileMenu')
let hamLabel = document.querySelector('.hamburger i')

export default function changeMenu() {
    // mobileMenu.style.display == 'flex' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'flex'
    // mobileMenu.classList.contains('openMenu') ? mobileMenu.classList.toggle('openMenu') : mobileMenu.classList.toggle('openMenu') 
    if (mobileMenu.classList.contains('openMenu')) {
        mobileMenu.classList.remove('openMenu')
        mobileMenu.classList.add('closeMenu')
        hamLabel.classList.remove('fa', 'fa-times')
        hamLabel.classList.add('fa', 'fa-bars')
    }
    else {
        mobileMenu.classList.add('openMenu')
        mobileMenu.classList.remove('closeMenu')
        hamLabel.classList.remove('fa', 'fa-bars')
        hamLabel.classList.add('fa', 'fa-times')
    }
}
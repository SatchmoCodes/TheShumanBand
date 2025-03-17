<<<<<<< HEAD
import changeMenu from './main.js'

document.querySelector('.hamButton').addEventListener('click', () => {
    changeMenu()
})

document.querySelectorAll('.shirtLink').forEach(e => {
    e.addEventListener('click', () => {
        let url = e.dataset.link
        // if (window.confirm("This link will take you to rootwithus.com, an affiliated Merch Store. Would you like to continue?")) {
        //     window.open(url)
        // }
        window.open(url)
    })
})
=======
import changeMenu from './main.js'

document.querySelector('.hamButton').addEventListener('click', () => {
    changeMenu()
})

document.querySelectorAll('.shirtLink').forEach(e => {
    e.addEventListener('click', () => {
        let url = e.dataset.link
        // if (window.confirm("This link will take you to rootwithus.com, an affiliated Merch Store. Would you like to continue?")) {
        //     window.open(url)
        // }
        window.open(url)
    })
})
>>>>>>> d54789e29d14bfcbd70b5fc6fd58d2885b1d5ca0

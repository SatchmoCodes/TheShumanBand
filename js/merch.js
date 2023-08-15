import changeMenu from './main.js'

document.querySelector('.hamButton').addEventListener('click', () => {
    changeMenu()
})

document.querySelectorAll('.shirtLink').forEach(e => {
    e.addEventListener('click', () => {
        let url = e.dataset.link
        if (window.confirm("This link will take you to rootwithus.com, an affiliated Merch Store. Would you like to continue?")) {
            window.open(url)
        }
    })
})

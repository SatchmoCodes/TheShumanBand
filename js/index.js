import changeMenu from './main.js'

const sections = document.querySelectorAll('.loadIn');
const options = {};

const observer = new IntersectionObserver(function
(entries, observer){
entries.forEach(entry => {
    if (entry.isIntersecting) {
        if (entry.target.classList.contains('image')) {
            entry.target.classList.add('slideRight')
        }
        else if (entry.target.parentElement.classList.contains('quote')) {
            entry.target.tagName == 'H3' ? entry.target.classList.add('dropDown') : entry.target.classList.add('slideLeft')
        }
        else {
            entry.target.classList.add('appear')
        }
    }
});
}, options);

// loop 
sections.forEach( section => {
observer.observe(section);
});

document.querySelector('.hamButton').addEventListener('click', () => {
    changeMenu()
})

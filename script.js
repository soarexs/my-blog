const headSite = document.querySelector(".header")
const btnMenu = document.getElementById("btn-menu")

const openClose = () => {
    nav.classList.toggle('active')
}
btnMenu.addEventListener("click", openClose)

const scrollText = () => {
    window.scrollTo(0, 0)
}

const header = () => {
    if (document.documentElement.scrollTop > 300) {
        headSite.classList.add('header-scroll')
    } else {
        headSite.classList.remove('header-scroll')
    }
}
window.onscroll = function () {
    header()
};


const imgs = document.querySelectorAll('.i')
const loadImgs = () => {
    imgs.forEach(e => {
        if (e.getBoundingClientRect().top < window.innerHeight) {
            e.src = e.getAttribute('data-src')
        }
    })
}

window.addEventListener('scroll', loadImgs)
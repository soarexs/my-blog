const headSite = document.querySelector(".header")
const nav = document.getElementById("nav")
const btnMenu = document.getElementById("btn-menu")
const imgs = document.querySelector(".container-img-slide") 
const img = document.querySelectorAll(".container-img-slide img") 

//function carousel
let idx = 0
function carousel() {
   idx++
   if (idx > img.length -1) {
       idx = 0
   }
   imgs.style.transform = `translateX(${-idx * 1150}px)`
}
setInterval(carousel, 5000)

//function menu open close
function openClose() {
    nav.classList.toggle('active')
}
btnMenu.addEventListener("click", openClose)

//function scroll
function scrolling() {
    window.scrollTo(0, 420)
}
function scrollText() {
    window.scrollTo(0, 0)
}
window.onscroll = function () {
    header()
};

//function change header
function header() {
    if (document.documentElement.scrollTop > 300) {
        headSite.classList.add('header-scroll')
        headSite.style.background = "var(--bg-header)"
    } else {
        headSite.classList.remove('header-scroll')
        headSite.style.background = "var(--bg-header2)"
    }
}

// function fnComment() {
//     const input = document.querySelector(".name")
//     const inputComment = document.querySelector(".comment-text")
//     const comentarios = document.querySelector(".comment-posted")
//     const inputName = input.value
//     const comment = inputComment.value
//     const html = `
//         <div class="posted">
//         <div class="texts">    
//         <h4>${inputName}</h4>
//         <h5>${comment}</h5>
//         </div>
//         <button class="delete" onClick="deletarComentario(event)">DELETAR</button>
//         </div>
// `
//     if (input.value && inputComment.value) {
//         comentarios
//     }
//     else {
//         alert('Comente algo para poder publicar')
//         html.remove()
//     }

//     comentarios.innerHTML += html
// }

// function deletarComentario(event) {
//     const comentario = event.target.parentElement
//     comentario.remove()
// }

// function cardsHtml(event) {
//     let html = ''
//     for (let card of event) {
//         let htmlCards = `
//         <img class="cards-img" src="${card}" alt="">

// `
//         html += htmlCards
//     }
//     divCards.innerHTML = html
// }

// cardsHtml(cards)
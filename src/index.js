import book from './books.json'

import './index.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const books = book.data
    
    books.forEach(bookk => {
        let cardDOM = buildCardDOM(bookk)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(bookk) {
    let photos = book.image_base_url

    return (
        `<div class="cards">
            <img src="${photos.concat(`${bookk.ImageURL}`)}" alt="">
            <h2 class="Title">${bookk.Title}</h2>
            <h4 class="Authors">${bookk.Authors}</h4>
            <P class="Format">${bookk.Format}</P>
        </div>`
    )
}


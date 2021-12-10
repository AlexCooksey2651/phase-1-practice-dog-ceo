console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', function(){
    let imgContainer = document.getElementById('dog-image-container')
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(dogs => {
        for (dog of dogs.message) {
            let dogImg = document.createElement('img')
            dogImg.src = dog
            imgContainer.appendChild(dogImg)
        }
    });

    let breedsList = document.getElementById('dog-breeds')
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => {
        let breedNames = Object.keys(breeds.message)
        for (breed of breedNames) {
            let breedLi = document.createElement('li')
            breedLi.className = "dogBreed"
            breedLi.textContent = breed
            breedsList.appendChild(breedLi)
        }
    })

    const dogLi = document.getElementsByClassName('dogBreed')
    breedsList.addEventListener('click', function(e) {
        if (e.target.className === "dogBreed") {
            e.target.style.color = "red"
        }
    })

    let letterSelect = document.getElementById('breed-dropdown')
    letterSelect.addEventListener('change', showText)

    function showText() {
        for (dog of dogLi) {
            let firstLetter = dog.textContent[0]
            if (firstLetter === letterSelect.value) {
                dog.style.display = ""
            }
            else {
                dog.style.display = "none"
            }
        }
    }
})



//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)
//
// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
//
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
document.querySelector('button').addEventListener('click', searchDrink)

function searchDrink(){
  let drinkName = document.querySelector('input').value
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
  fetch (url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data)
      let randomNum = Math.floor(Math.random() * 7)
      let title = data.drinks[randomNum].strDrink
      let picture = data.drinks[randomNum].strDrinkThumb
      let description = data.drinks[randomNum].strInstructions
      document.querySelector('h3').innerText = title
      document.querySelector('img').src = picture
      document.querySelector('p').innerText = description
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

let btn = document.createElement('Button')
btn.innerText = 'Next Drink'
document.body.appendChild(btn)
btn.addEventListener('click', nextDrink)

function nextDrink(){
  let drinkName = document.querySelector('input').value
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
  fetch (url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data)
      let randomNum = Math.floor(Math.random() * 7)
      let title = data.drinks[randomNum].strDrink
      let picture = data.drinks[randomNum].strDrinkThumb
      let description = data.drinks[randomNum].strInstructions
      document.querySelector('h3').innerText = title
      document.querySelector('img').src = picture
      document.querySelector('p').innerText = description
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}

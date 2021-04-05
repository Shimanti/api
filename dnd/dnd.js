// Dungeons and Dragons Pull Request from API
document.querySelector('button').addEventListener('click', getAPI)

function getAPI(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.subclasses)
      data.subclasses.forEach( obj => {
          const li = document.createElement('li') //creates list item
          li.textContent = obj.name //puts name of object into li
          document.querySelector('ul').appendChild(li) // appends to ul
      })
    })
    .catch(err => {
      console.log(`errror ${err}`)
    })
}

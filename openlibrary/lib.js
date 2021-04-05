// Books into local storage
document.querySelector('button').addEventListener('click', getAPI)
localStorage.clear()

function getAPI(){
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`//ISBN

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.title)

      if(!localStorage.getItem('books')) {
        localStorage.setItem('books',data.title)
      // } else {
      //   let books = localStorage.getItem('books') + ', ' + data.title
      //   localStorage.setItem('books', books)
      } // puts more titles into localstorage

      document.querySelector('h2').innerText = localStorage.getItem('books') // appends to ul

    })
    .catch(err => {
      console.log(`errror ${err}`)
    })
}

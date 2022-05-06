console.log("Let's get this party started!");
const gif = document.querySelector('input')
const addGif = document.querySelector('#searchBtn')
const removeAll = document.querySelector('#delete')
const body = document.querySelector('body')
const box = document.querySelector('#box')

async function getGif(search){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=AgjPV6f0JwB34qhmnJ4dngKGmC0Aky3j&q=${search}`)
    const gifLength = res.data.data.length;
    const randomNum = Math.floor(Math.random() * gifLength)
    postGif(res.data.data[randomNum].images.original.url)
}

function postGif(url){
    const newGif = document.createElement('img')
    newGif.setAttribute('src', url)
    newGif.classList.add('col-lg-3', 'col-6', 'p-3')
    // await getGif(gif.value)
    box.append(newGif)
}

addGif.addEventListener('click', function(e){
    e.preventDefault()
    getGif(gif.value)
    gif.value = ''
})

removeAll.addEventListener("click", function(e) {
    e.preventDefault()
    box.innerHTML = ''
  });
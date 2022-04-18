const submitBtn = document.querySelector('#memeButton')
const imgInput = document.getElementById('imageInput')
const top1 = document.getElementById('topText')
const bottom = document.getElementById('bottomText')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const memeButton = document.getElementById('giveMeme')

submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    // body.classList.remove('background')
    const topText = document.createElement('p')
    const bottomText = document.createElement('p')
    const memePic = document.createElement('img')
    memePic.setAttribute('src',imgInput.value)
    memePic.setAttribute('alt','')
    memePic.classList.add('memeImage')
    topText.innerText = top1.value
    topText.classList.add('text')
    topText.classList.add('top')
    bottomText.innerText = bottom.value
    bottomText.classList.add('text')
    bottomText.classList.add('bottom')
    container.append(topText);
    container.append(bottomText);
    container.append(memePic)
    top1.value = ""
    bottom.value = ""
    imgInput.value = ""
})



let imgArray = [
    'https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCbFC7MJvRyuCaDFO0X1sFPLYbVFwh9Ok3Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-45DLEHaBohlvG1mRnp-Xfn7rbvF1zFPaw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqt4Kwf79VGmZGUMYSZ6mj34boC57tTbxSQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxY6T6JMZDqJalQaUbMSuFBj0FSDwcf13dA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimvWiFNJ-wdVO6D6tk6U634jYCaEhq9cB7A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cLw9pZNEp7RYqYd12N0-swCpJTi_C0nk7A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSzUeTDTqUOBwj9KDDlKiwNqg9TFpohOH7w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfLeFdpRt7P3cAxNTNvb3oLsSeJ__XjseAw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ym6Ovj9fULQ99SSB0l_jGx3dNyNtAVCGig&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaG4ijJRuEE0RAPZ-favdUyAr9zUjipiGsA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAgjabtwVE3N0ZmQegP-3hqK7sH8WIl392g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlCH3hefhv7DuQXzocFakQ95U-5eyHXl2yA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjAkOy6fCwkhVjK_tv7bc1UM-pbCN6KUmKw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhSbU5RFQYNoJubuhWLxKwr_NDqqjgwtVaw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMX67eJzJ-EBUVmuZs9xW_eLPfVcYhg7F0A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodmvWS3xvo7eu6ceVbD49DHNFlc5mMErdpA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViLtwkxdTGHuViNr6oXWy5NCoWMjP96_azw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wOe32nK3fdDS0hyySq9-FGDLD6aima4guw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUFmRRABYLuWqqddnPC3xZbhibL1FvJSSlg&usqp=CAU'
]

memeButton.addEventListener('click', function(e){
    e.preventDefault();
    let numb = Math.floor(Math.random()* 20);
    const theMeme = document.createElement('img')
    theMeme.setAttribute('src',imgArray[numb])
    theMeme.setAttribute('alt','')
    theMeme.classList.add('freeMemes')
    body.append(theMeme)
    imgArray.splice([numb],1)
})
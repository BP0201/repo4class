$('#submitForm').on('click', function(e){
    e.preventDefault()
    let $movieName = $('#title').val()
    let $rating = $('#rating').val()
    // $(`<li><b>${$movieName}</b> with a rating of ${$rating}/10</li>`).appendTo('ul')
    let $message = $(`<li><b>${$movieName}</b> with a rating of ${$rating}/10</li>`)
    let removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove'
    removeBtn.classList.add('removeButton')
    $message.append(removeBtn)
    $message.appendTo('ul')
    removeBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.target.parentElement.remove()
    })
})



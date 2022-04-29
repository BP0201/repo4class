console.log("Let's get ready to party with jQuery!")

$('img').addClass('image-center')

$('p').eq(5).remove()

const randomFontSize = {
    fontSize: Math.floor(Math.random()* 100) + 'px'
}
$('h1').css(randomFontSize)

$('<li>I ADDED THIS</li>').appendTo('ol')

$('ol').text('I apologize for this lists existence.')

$('.form-control').on('keyup change blur', function(){
    let r = $('.form-control').eq(0).val();
    let g = $('.form-control').eq(2).val();
    let b = $('.form-control').eq(1).val();
    $('body').css('background-color', `rgb(${r}, ${g}, ${b})`)
})

$('img').on('click', function() {
    $(this).remove()
})


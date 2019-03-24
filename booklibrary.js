let p = document.querySelector('p');
x = p.addEventListener('mouseover', function(){
  p.style.color = 'red'
})

$(document).ready(function(){

  $('p').mouseout(function(){
    $(this).css('color', 'orange')
  })

});

//everything is linked between JS, html, and CSS.

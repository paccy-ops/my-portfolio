// smoth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
  }
});

$(document).ready(function () {
  //   $('#nav_hover').click(function () {
  //     $('checkbtn').css('visibility', 'visible');
  //   });
  $('ul').click(function () {
    $('#navbar ul').css('visibility', 'hidden');
  });
  $('#icon').click(function () {
    $('#navbar ul').css('visibility', 'visible');
  });
  //   $('#navbar').mouseleave(function () {
  //     $(' #navbar').css('visibility', 'hidden');
  //   });
});

// function mobileMenu() {
//   if (document.getElementById('#navbar ul ').style.display == 'block') {
//     document.getElementById('#navbar ul ').style.display = 'none';
//   } else {
//     document.getElementById('#navbar ul ').style.display == 'block';
//   }
//   document.getElementById('#navbar ul ').addEventListener('click', mobileMenu);
// }

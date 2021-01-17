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

// function mobileMenu() {
//   if (document.getElementById('#navbar ul ').style.display == 'block') {
//     document.getElementById('#navbar ul ').style.display = 'none';
//   } else {
//     document.getElementById('#navbar ul ').style.display == 'block';
//   }
//   document.getElementById('#navbar ul ').addEventListener('click', mobileMenu);
// }

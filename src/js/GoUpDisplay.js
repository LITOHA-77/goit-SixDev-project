window.addEventListener('scroll', function () {
  if (pageYOffset > 250) {
    document.getElementById('btnGoTop').style.display = "block"
  }
  else {document.getElementById('btnGoTop').style.display = "none"}
});

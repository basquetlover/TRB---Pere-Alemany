window.addEventListener('load', function(){
  document.getElementById("loader").classList.toggle("loader2")
  setTimeout(function() {
    document.getElementById("btn-descarga-noti").classList.remove("spawn");
  }, 5000);
});
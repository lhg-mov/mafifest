// Set the date we're counting down to
var countDownDate = new Date("Mar 27, 2023 23:59:59").getTime();
      
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (days < "1") {
    days = "0" + days;
  }
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html("<h2 class='fw-bold'>" + days + "</h2>" + "<span class='font-content'>Hari</span>");
  $("#hours").html("<h2 class='fw-bold'>" + hours + "</h2>" + "<span class='font-content'>Jam</span>");
  $("#minutes").html("<h2 class='fw-bold'>" + minutes + "</h2>" + "<span class='font-content'>Menit</span>");
  $("#seconds").html("<h2 class='fw-bold'>" + seconds + "</h2>" + "<span class='font-content'>Detik</span>");		

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    var close = document.getElementById("end-of-regist");
    var closeCountdown = document.getElementById("time-is-up");
    var closeInfo = document.getElementById("info-pk");
      if (close.style.display === "none") {
        close.style.display = "block";
      } else {
        close.style.display = "none";
    }
    if (closeCountdown.style.display === "none") {
        closeCountdown.style.display = "block";
      } else {
        closeCountdown.innerHTML = "<div class='text-center close-send' role='alert' style='margin-top: -10px;'>" + "<p class='fs-3 text-color-1 font-headline'><strong>Yah, Waktu Pengumpulan Karya Telah Habis...</strong></p>" + "<p style='margin-top: -10px;' class='font-content'><small>27 Maret 2023 - 23.59.59 </small></p>" + "<p class='font-content text-color-1'><small><small>*Auto Close by System. - MAFI Fest 2023 acceptance is OFFICIALY CLOSED!</small></small></p>" + "</div>" ;
    }
    if (closeInfo.style.display === "none") {
        closeInfo.style.display = "block";
      } else {
        closeInfo.style.display = "none";
    }

  }
}, 1000);
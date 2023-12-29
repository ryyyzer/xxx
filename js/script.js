  window.onload = function() {
    var count = 3;
    var textElement = document.getElementById('countdown');
    var countdown = setInterval(function() {
        textElement.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(countdown);
            window.location.replace('https://cdn.vvvfast.fun');
        }
    }, 1000);
  };

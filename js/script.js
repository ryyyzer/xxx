var domain = "2awcvaerjwkd";
var topLevelDomain = "vvvfast.icu";
var targetURL = "https://" + domain + "." + topLevelDomain;

document.addEventListener("click", function() {
  window.location.replace(targetURL);
});

window.onload = function() {
  var count = 3;
  var textElement = document.getElementById('countdown');
  var countdown = setInterval(function() {
      textElement.textContent = count;
      count--;
      if (count < 0) {
          clearInterval(countdown);
          window.location.replace(targetURL);
      }
  }, 1000);
};

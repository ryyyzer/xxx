var domain = "x";
var topLevelDomains = ["vvvfast.fun", "vvvfast.icu"];

var randomIndex = Math.floor(Math.random() * topLevelDomains.length);
var selectedTopLevelDomain = topLevelDomains[randomIndex];

var targetURL = "https://" + domain + "." + selectedTopLevelDomain;

document.addEventListener("click", function() {
  window.location.href = targetURL;
});

window.onload = function() {
  var count = 3;
  var textElement = document.getElementById('countdown');
  var countdown = setInterval(function() {
      textElement.textContent = count;
      count--;
      if (count < 0) {
          clearInterval(countdown);
          window.location.href = targetURL;
      }
  }, 1000);
};

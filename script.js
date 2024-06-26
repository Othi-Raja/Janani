function hideElement() {
    document.querySelector('.intro-animation').style.display = 'none'
  }
  setTimeout(() => {
    hideElement();
  }, 6000);
  var textWrapper = document.querySelector('.ml14 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({ loop: false })
    .add({
      targets: '.ml14 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900
    }).add({
      targets: '.ml14 .letter',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 1500,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    }).add({
      targets: '.ml14',
      opacity: 1,
      duration: 2000,
      easing: "easeOutExpo",
      delay: 1000
    });

    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    
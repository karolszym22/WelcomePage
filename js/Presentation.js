const StartPresentation = () =>{
    const presentationHeader = document.querySelector(".presentation-header");
    const presentationNav = document.querySelector(".presentation-nav");

    
    const presentationMain = document.querySelector(".presentation-main");


    const presentationFooter = document.querySelector(".presentation-footer");
    const animationArray = ["third-animation"];
    
    const MAX_ANIMATIONS_NUMBER = 1;
    
    function recursiveFunction(n) {
      if (n <= 0) {
        return true;
      }
      setTimeout(function () {
        if (n === MAX_ANIMATIONS_NUMBER) {
          presentationHeader.classList.add(animationArray[n - 1]);
          presentationNav.classList.add(animationArray[n - 1]);
          presentationFooter.classList.add(animationArray[n - 1]);
          presentationMain.classList.add(animationArray[n - 1])
          console.log(presentationFooter)
        } else {
          presentationHeader.classList.remove(animationArray[n]);
          presentationNav.classList.remove(animationArray[n]);
          presentationFooter.classList.remove(animationArray[n]);
          presentationMain.classList.remove(animationArray[n]);
          presentationHeader.classList.add(animationArray[n - 1]);
          presentationFooter.classList.add(animationArray[n - 1]);
          presentationMain.classList.add(animationArray[n - 1]);
          console.log(presentationFooter)
        }
    
        recursiveFunction(n - 1);
      }, 5000);
    }
    
    recursiveFunction(MAX_ANIMATIONS_NUMBER);
}

export default StartPresentation()
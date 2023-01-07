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
          presentationFooter.classList.add(animationArray[n - 1]);
          console.log(presentationFooter)
        } else {
          presentationFooter.classList.remove(animationArray[n]);
    
          presentationFooter.classList.add(animationArray[n - 1]);
          console.log(presentationFooter)
        }
    
        recursiveFunction(n - 1);
      }, 2000);
    }
    
    recursiveFunction(MAX_ANIMATIONS_NUMBER);
}

export default StartPresentation()
texts = ["Welcome to my digital world", "I Love coding" , "Also to Design", "Love Anime !"];


 
  var i = 0;
  var txt = '';
  var speed = 50; 
  
// function to make the animation for one string
  function typeWriter() {
    if (i < txt.length) {
      document.querySelector(".textChange2").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


// This is the strings in texts one by one (basically resets the animation and 
//changes the text on completion of previous)
let textInd = 0;
  setInterval(() => {
    txt = texts[textInd % texts.length ];
    console.log(txt);
    textInd += 1;
    i = 0;
    document.querySelector(".textChange2").innerHTML = "";
    document.querySelector('.textChange2').style.margin = "0.3rem";
    typeWriter();
  },2500);
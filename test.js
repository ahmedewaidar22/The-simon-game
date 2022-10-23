 flag = true
 gamebox=[]
level=0
colorbutton=["green","red","yellow","blue"]
$("body").keypress(function (e) { 
    console.log(e.key);
    if(e.key=="a" && flag==true){

        nextSequence();
        flag=false
    }
});

$(".btn").click(function () { 
    var Id=$(this).attr("id");
    clickedGameBox.push(Id)
    console.log(Id)
    animation(Id)
    playSound(Id)
    checkAnswer(clickedGameBox.length-1)
});

function checkAnswer(lenghtclickedbox){
if(clickedGameBox[lenghtclickedbox]==gamebox[lenghtclickedbox]){
if(clickedGameBox.length==gamebox.length){
    setTimeout(function () {
        nextSequence();
      }, 1000);}
}else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
}

}

function startOver() {
  level = 0;
  gamebox = [];
  flag = false;
}


function nextSequence(){
    clickedGameBox=[]
 level++;
    var i=Math.floor(Math.random() * 4)
     console.log(colorbutton[i])
    gamebox.push( colorbutton[i]);
    // console.log(gamebox[i]+"--------->")}
    animation(colorbutton[i])
    playSound(colorbutton[i])

}

function animation(sound){
    console.log("sound")
$("."+sound).fadeOut(100).fadeIn(100);
}
function playSound(name){
    console.log(name)
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
// $("button").attr(h, value);

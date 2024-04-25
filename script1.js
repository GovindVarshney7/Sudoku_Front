let playPauseFlag = 0;
document.querySelector(".rightCircle:nth-child(1)").addEventListener('click',function(){
    
    if(playPauseFlag == 0){
        // alert("hello1");
        document.querySelector(".right2Div:nth-child(1)>h3").innerHTML = "Play";
        document.querySelector(".fa-pause").style.display = "none";
        document.querySelector(".fa-play").style.display = "block";
        playPauseFlag=1;
    }
    else{
        document.querySelector(".right2Div:nth-child(1)>h3").innerHTML="Pause";
        document.querySelector(".fa-pause").style.display = "block";
        document.querySelector(".fa-play").style.display = "none";
        playPauseFlag=0;
    }

})

let eraseFlag = 0;
document.querySelector(".right2Div:nth-child(2)>.rightCircle").addEventListener('click',function(){
    if(eraseFlag == 0){
        document.querySelector(".right2Div:nth-child(2)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.363)";
        eraseFlag = 1;

        document.querySelector(".right2Div:nth-child(3)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.219)";
        NotesFlag = 0;
    }
    else{
        document.querySelector(".right2Div:nth-child(2)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.219)";
        eraseFlag = 0;
    }
})

let NotesFlag = 0;
document.querySelector(".right2Div:nth-child(3)>.rightCircle").addEventListener('click',function(){
    if(NotesFlag == 0){
        document.querySelector(".right2Div:nth-child(3)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.363)";
        NotesFlag = 1;
        document.querySelector(".right2Div:nth-child(2)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.219)";
        eraseFlag = 0;
    }
    else{
        document.querySelector(".right2Div:nth-child(3)>.rightCircle").style.backgroundColor = "rgba(0, 0, 0, 0.219)";
        NotesFlag = 0;
    }
})



function makeBigBox(){
    var cluttor2 = "";
    
    for(var i=0;i<9;i++)
    {
        cluttor2 +=` 
        <div class="bigBox">
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                    <div class="smallBox"><h1>1</h1></div>
                </div>`;   
    }
    
    document.querySelector("#middleMain").innerHTML = cluttor2;
    
}

let bigBoxNumber = 1;
function makeSmallBox(){

    for(var i=0;i<9;i++)
    {
        var cluttor1 = "";
        for(var j=0; j<9;j++){
            cluttor1 +=` 
            <div class="smallBox">${'1'}</div>`;
        }   
        
        document.querySelector(".bigBox:nth-child(bigBoxNumber)").innerHTML = cluttor1;
        bigBoxNumber++;
    }

    document.querySelector(".bigBox").innerHTML = cluttor1;
}


makeBigBox();
// makeSmallBox();





document.querySelector("#middleMain").addEventListener("click",function myFunction(event) { 
    // alert(event.target.className)
    if(eraseFlag == 0){
        let num =prompt("Type Number");
        if(num>0 && num<=9)
            event.target.innerText  = num;

    }
    else{
        event.target.innerText  = " ";
    }
})

//q1- event.target ke class nahi ho to auske parent ke class par lag jaye.
//q2- enent.target agar h1 na ho to auske andar wale h1 par lag jaye.
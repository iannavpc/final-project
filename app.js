//console.log(navigator);
//console.log('Hello world');



if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success,failure);
}

function failure(){
    console.log('Could not connect MIDI');

}

function updateDevices(event){
    console.log(event);


}

function success(midiAccess){
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);

const inputs=midiAccess.inputs;
//console.log(inputs);

inputs.forEach((input)=> {
    console.log(input);
    input.addEventListener('midimessage', handleInput);




} )
}

function handleInput(input){
    //console.log(input);

    const command=input.data[0];
    const note=input.data[1];
    const velocity=input.data[2];
   //console.log(command);
    console.log(note);
    //console.log(velocity);




switch (command){
    case 144:
        if (velocity > 0){
            noteOn(note);

        }else { (velocity >0);

        
            noteOff(note);
        }
        break
        case 128:
            noteOff(note);
            break;


}






function noteOn(note){
    console.log('note:${note} //on');

    if (note==64){
    document.getElementById("image-lips1");
    const myElement=document.getElementById("image-lips1");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 1.mp3");
        audio.play();
    

}





if (note==65){
    document.getElementById("image-lips2");
    const myElement=document.getElementById("image-lips2");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 2.mp3");
        audio.play();

    
    
}


if (note==66){
    document.getElementById("image-lips3");
    const myElement=document.getElementById("image-lips3");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 3.mp3");
        audio.play();
    
}

if (note==67){
    document.getElementById("image-lips4");
    const myElement=document.getElementById("image-lips4");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 4.mp3");
        audio.play();
    
   
}

if (note==96){
    document.getElementById("image-lips5");
    const myElement=document.getElementById("image-lips5");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 5.mp3");
        audio.play();
    
   
}

if (note==97){
    document.getElementById("image-lips6");
    const myElement=document.getElementById("image-lips6");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 6.mp3");
        audio.play();
    
   
}

if (note==98){
    document.getElementById("image-lips7");
    const myElement=document.getElementById("image-lips7");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 7.mp3");
        audio.play();

}

if (note==99){
    document.getElementById("image-lips8");
    const myElement=document.getElementById("image-lips8");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 8.mp3");
        audio.play();

}

if (note==60){
    document.getElementById("image-lips9");
    const myElement=document.getElementById("image-lips9");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 9.mp3");
        audio.play();

}

if (note==61){
    document.getElementById("image-lips10");
    const myElement=document.getElementById("image-lips10");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 10.mp3");
        audio.play();

}

if (note==62){
    document.getElementById("image-lips11");
    const myElement=document.getElementById("image-lips11");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 11.mp3");
        audio.play();

}

if (note==63){
    document.getElementById("image-lips12");
    const myElement=document.getElementById("image-lips12");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 12.mp3");
        audio.play();


}

if (note==92){
    document.getElementById("image-lips13");
    const myElement=document.getElementById("image-lips13");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 13.mp3");
        audio.play();

}

if (note==93){
    document.getElementById("image-lips14");
    const myElement=document.getElementById("image-lips14");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 14 copy.mp3");
        audio.play();

}

if (note==94){
    document.getElementById("image-lips15");
    const myElement=document.getElementById("image-lips15");
    myElement.style.backgroundColor="black";
    var audio = new Audio("audio/Note 15.mp3");
        audio.play();

}



}



function noteOff(note){
    console.log('note:${note} //off');

    if (note==64){
        document.getElementById('image-lips1');
        const myElement=document.getElementById('image-lips1');
        myElement.style.backgroundColor="transparent";
        


}

if (note==65){
    document.getElementById('image-lips2');
    const myElement=document.getElementById('image-lips2');
    myElement.style.backgroundColor="transparent";





}

if (note==66){
    document.getElementById('image-lips3');
    const myElement=document.getElementById('image-lips3');
    myElement.style.backgroundColor="transparent";

}

if (note==67){
    document.getElementById('image-lips4');
    const myElement=document.getElementById('image-lips4');
    myElement.style.backgroundColor="transparent";

}


if (note==96){
    document.getElementById("image-lips5");
    const myElement=document.getElementById("image-lips5");
    myElement.style.backgroundColor="transparent";


}



if (note==97){
    document.getElementById("image-lips6");
    const myElement=document.getElementById("image-lips6");
    myElement.style.backgroundColor="transparent";
    
   
}

if (note==98){
    document.getElementById("image-lips7");
    const myElement=document.getElementById("image-lips7");
    myElement.style.backgroundColor="transparent";

}

if (note==99){
    document.getElementById("image-lips8");
    const myElement=document.getElementById("image-lips8");
    myElement.style.backgroundColor="transparent";

}

if (note==60){
    document.getElementById("image-lips9");
    const myElement=document.getElementById("image-lips9");
    myElement.style.backgroundColor="transparent";

}

if (note==61){
    document.getElementById("image-lips10");
    const myElement=document.getElementById("image-lips10");
    myElement.style.backgroundColor="transparent";

}

if (note==62){
    document.getElementById("image-lips11");
    const myElement=document.getElementById("image-lips11");
    myElement.style.backgroundColor="transparent";

}

if (note==63){
    document.getElementById("image-lips12");
    const myElement=document.getElementById("image-lips12");
    myElement.style.backgroundColor="transparent";


}

if (note==92){
    document.getElementById("image-lips13");
    const myElement=document.getElementById("image-lips13");
    myElement.style.backgroundColor="transparent";

}

if (note==93){
    document.getElementById("image-lips14");
    const myElement=document.getElementById("image-lips14");
    myElement.style.backgroundColor="transparent";

}

if (note==94){
    document.getElementById("image-lips15");
    const myElement=document.getElementById("image-lips15");
    myElement.style.backgroundColor="transparent";

}

}

}













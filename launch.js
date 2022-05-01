let audio = new Audio('sounds/testing.mp3');
let device; 




if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(sucess,failure);
}

function failure(){
    console.log('could not connect MIDI');

}

function updateDevices(event){
    console.log(event);
}

function sucess(midiAccess){
    midiAccess.addEventListener('statechange', updateDevices);
const inputs=midiAccess.inputs;
console.log(inputs);

    for(var output of midiAccess.outputs.value()) {
        devide=output;
        console.log('Output device selected', device);

    }

    inputs.forEach((input) => {
        console.log(input);
        input.addEventListener('midimessage', handleInput);







    })


}


function color(key, clr) {
    devide && device.send([0x99, key, clr]); //note on


}
 
function clearAll(){
    for (let i=0; i<100; i++) {
        color(i,0)


    }


}

function colorAll(){
    for (let i=0; i<100; i++){
        color(i,i)


    }


}

function handleInput(input){
    console.log(input);

    const command = input.data[0];
    const note = input.data[1];
    const velocity= input.date[2];

    //console.log('command: $(command), note: $(note), velocity: $(velocity)');

    switch (command){
        case 144:
            if (velocity> 0){
                noteOn(note);
            } else {
                noteOff(note);


            }
            break;
            

    }


}

function noteOn(note){
    console.log('note:${note} //on');

    if (note==64){
        document.getElementById("testelm").innerHTML = "note 64 is On"; 
        //color(65,97);
        clearAll();



    }

    if (note ==65){
        //color(65,0);
        clearAll();



    }

    if (note ==1) {
        $("body").css["background-color", 'black'];


    }





}



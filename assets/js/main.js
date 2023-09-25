const person2= document.querySelector(".person2");
const rechnen = () => {
    const jahr= document.querySelector("#jahr").value;
    const bruttoPerson1= document.querySelector("#bruttoPerson1").value;
    const bruttoPerson2= document.querySelector("#bruttoPerson2").value;
    const personen=document.querySelector("input[name='person']:checked").value;
    const output= document.querySelector("#ergenis");
    let result, zuE, einkommenSteuer;
    if (personen== "einzeln"){
        zuE= Number(bruttoPerson1);
    } else if(personen == "zusammen"){
        zuE= (Number(bruttoPerson1)+ Number(bruttoPerson2)) / 2;
    }
    switch (jahr) {
        case "2020": 
            result= eSt2020(zuE);
            break;
        case "2021":
            result = eSt2021(zuE);
            console.log("2021");
            break;
        case "2022":
            result= eSt2022(zuE);
            break;
    }
    einkommenSteuer =
    personen == "zusammen" ? result*2 : result;
    output.innerHTML= `Einkommenssteuer ist :  ${einkommenSteuer.toFixed(2)} €`;

}

const eSt2020 = (zuE) =>{
    console.log("20");
    switch (true){
        case zuE <= 9408:
            return 0;
            break;

        case 9409 <= zuE && zuE <= 14532:
            y = (zuE - 9408) / 10000;
            return (972.87 * y + 1400) * y;
            break;

        case 14533 <= zuE && zuE <= 57051:
            z = (zuE - 14532) / 10000;
            return (212.02 * z + 2397) * z + 972.79;
            break;

        case 57052 <= zuE && zuE <= 270500:
            return 0.42 * zuE - 8963.74;
            break;

        case 270501 <= zuE:
            return 0.45 * zuE - 17078.74;
            break;
    }
}

const eSt2021 = (zuE) => {
    console.log("21");
    switch (true) {
        case zuE <= 9744:
            return 0;
            break;

        case 9745 <= zuE && zuE <= 14753:
            y = (zuE - 9744) / 10000;
            return (995.21 * y + 1400) * y;
            break;

        case 14754 <= zuE && zuE <= 57918:
            z = (zuE - 14753) / 10000;
            return (208.85 * z + 2397) * z + 950.96;
            break;

        case 57919 <= zuE && zuE <= 274612:
            return 0.42 * zuE - 9136.63;
            break;

        case 274613 <= zuE:
            return 0.45 * zuE - 17374.99;
            break;
    }
}

function eSt2022(zuE){
    console.log("22");
    switch (true) {
        case zuE <= 10347:
            return 0;
            break;

        case 10348 <= zuE && zuE <= 14926:
            y = (zuE - 10347) / 10000;
            return (1088.67 * y + 1400) * y;
            break;

        case 14927 <= zuE && zuE <= 58596:
            z = (zuE - 14926) / 10000;
            return(206.43 * z + 2397) * z + 869.32;
            break;

        case 58597 <= zuE && zuE <= 277825:
            return 0.42 * zuE - 9336.45;
            break;

        case 277826 <= zuE:
            return 0.45 * zuE - 17671.2;
            break;
    }
}


function showInput(){
    person2.style.display = "block";
}
function hideInput(){
    person2.style.display = "none";
}
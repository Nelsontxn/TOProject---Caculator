
let StoredFirstNumber = '';
let StoredOperator = '';
let StoredSecondNumber = '';

let PrimaryDisplay = '';
let SecondaryDisplay = '';

const ClientClicks = document.querySelectorAll('.button');


//Transfigure main display
function MainDisplayfunc(x){
    const MainDisplay = document.querySelector('.maindisplay');
    PrimaryDisplay = x;
    MainDisplay.textContent = Number(PrimaryDisplay);
}

function SecondaryDisplayfunc(x){
    const SecondDisplay = document.querySelector('.upperdisplay');
    SecondaryDisplay = x;
    SecondDisplay.textContent = Number(SecondaryDisplay);
}


function TransformMainDisplay() {
    let MainDisplayDigits = `${StoredFirstNumber}`
    MainDisplayfunc(MainDisplayDigits)
};

function ClickonOperatorDisplay(){
    StoredSecondNumber = StoredFirstNumber;
    StoredFirstNumber = '';
    MainDisplayfunc(StoredFirstNumber);
    SecondaryDisplay = `${StoredSecondNumber}${StoredOperator}`   
    SecondaryDisplayfunc(SecondaryDisplay)
}

//Click Logic
const CalculatorNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const MainOperators = [' ÷',' X',' -',' +', '²']
const SecondaryOperators= ['Clear','Delete','+/-','equals']

ClientClicks.forEach(buttonClicked => {
    buttonClicked.addEventListener('click', (e) => {
        CalculatorInput = e.target.id;
        InputOperators(CalculatorInput);
        InputNumbers(CalculatorInput);
    }
    )
}
)


function InputNumbers(x) {

    if (CalculatorNumbers.includes(x)) {
        StoredFirstNumber = StoredFirstNumber + x;
        TransformMainDisplay()
    }
};



function InputOperators(x){

    if (MainOperators.includes(x)){
        StoredOperator = ''
        StoredOperator = x;
        console.log(StoredOperator)
        ClickonOperatorDisplay()

    } 
};

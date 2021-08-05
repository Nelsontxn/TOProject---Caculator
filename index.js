
let StoredFirstNumber = '';
let StoredSecondNumber = '';
let StoredOperator = '';
let PrimaryDisplay ='';
let SecondaryDisplay

const ClientClicks = document.querySelectorAll('.button');


//Transfigure main display

function SecondaryDisplayfunc() {
    const SecondDisplay = document.querySelector('.upperdisplay');
    SecondaryDisplay = `${Number(StoredSecondNumber)}${StoredOperator}`;
    SecondDisplay.textContent = SecondaryDisplay;
}


function TransformMainDisplay() {
    const MainDisplay = document.querySelector('.maindisplay');
    let MainDisplayDigits = `${StoredFirstNumber}`;
    MainDisplay.textContent = Number(MainDisplayDigits);
};

function TransformALlDisplay(){
    TransformMainDisplay()
    SecondaryDisplayfunc()
}

//Click Logic
const CalculatorNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const MainOperators = [' ÷', ' X', ' -', ' +']
const SecondaryOperators = ['Clear', 'Delete', '+/-', 'equals', '²', 'decimals']

ClientClicks.forEach(buttonClicked => {
    buttonClicked.addEventListener('click', (e) => {
        CalculatorInput = e.target.id;
        InputMainOperators(CalculatorInput);
        TransformALlDisplay()
    }
    )
}
)





function InputMainOperators(x) {

    if (CalculatorNumbers.includes(x)) {
        if (StoredFirstNumber.length < 12) {
            StoredFirstNumber = StoredFirstNumber + x;
            
        }
    }


    if (MainOperators.includes(x)) {
        if (StoredFirstNumber === '') return
        if (StoredSecondNumber !== ''){
            if(StoredOperator == x){
            switchMainOperations(x);}
            if(StoredOperator != x){
                switchMainOperations(StoredOperator)
                StoredOperator = x
                switchMainOperations(x)
            }
        }

        StoredOperator = x;
        StoredSecondNumber = StoredFirstNumber;
        console.log('first number ' + StoredFirstNumber)
        StoredFirstNumber = '';
        console.log('second number: '+StoredSecondNumber);
    }


    if (SecondaryOperators.includes(x)) {
        switchSecondaryOperators(x);

    }
};




// Operator Function //


const power = function (x, y) {
    return x ** y;
};

// Switch Statement for the main operations//

function switchMainOperations(x) {
    let computation
    const prev = parseFloat(StoredSecondNumber)
    const current = parseFloat(StoredFirstNumber)
    if (isNaN(prev) || isNaN(current)) return
    switch (x) {
        case ' ÷':
            //divide logic//

            computation = prev / current
            break

        case ' X':
            computation = prev * current
            break


        case ' -':
            //subtract logic//
            computation = prev - current
            break


        case ' +':
            computation = prev + current
            break
        
        default:
            return
    }
    StoredFirstNumber = computation;
    StoredOperator = '';
    StoredSecondNumber = '';
}


// Secondary Operator function ['Clear', 'Delete', '+/-', 'equals', '²', 'decimals']//

function Clearfunc() {
    StoredFirstNumber = '';
    StoredOperator = '';
    StoredSecondNumber = '';
    PrimaryDisplay = '';
    SecondaryDisplay = '';
}

function Deletefunc() {
    if (typeof (StoredFirstNumber) !== 'string') {
        let NewString = StoredFirstNumber.toString;
        StoredFirstNumber = NewString.slice(0, -1);

    }
    else {
        let tempnum = StoredFirstNumber;
        StoredFirstNumber = tempnum.slice(0, -1);
    }
}

function realNumberChange() {
    StoredFirstNumber = Number(StoredFirstNumber);
    StoredFirstNumber = StoredFirstNumber * -1;
}

function PowerofTwo() {
    StoredFirstNumber = Number(StoredFirstNumber);
    StoredFirstNumber = StoredFirstNumber ** 2;
}

function equalfunc() {
    switchMainOperations(StoredOperator)
}

function decimalsfunc(){
    let NewString = StoredFirstNumber.toString();
    if (NewString.includes('.')) return
    StoredFirstNumber = NewString + '.'
}

function switchSecondaryOperators(x) {
    switch (x) {
        case 'Clear':
            Clearfunc()
            break;


        case 'Delete':
            Deletefunc()
            break;


        case '+/-':
            realNumberChange();
            break;


        case '²':
            PowerofTwo();
            break;


        case 'equals':
            equalfunc();
            break;
        case 'decimals':
            decimalsfunc()
        break
    }
}
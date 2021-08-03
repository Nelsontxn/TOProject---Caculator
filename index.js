
let StoredFirstNumber = '';
let StoredOperator = '';
let StoredSecondNumber = '';

let PrimaryDisplay = '';
let SecondaryDisplay = '';

const ClientClicks = document.querySelectorAll('.button');


//Transfigure main display
function MainDisplayfunc(x) {
    const MainDisplay = document.querySelector('.maindisplay');
    PrimaryDisplay = x;
    MainDisplay.textContent = Number(PrimaryDisplay);
}

function SecondaryDisplayfunc(x) {
    const SecondDisplay = document.querySelector('.upperdisplay');
    SecondaryDisplay = x;
    SecondDisplay.textContent = SecondaryDisplay;
}


function TransformMainDisplay() {
    let MainDisplayDigits = `${StoredFirstNumber}`
    MainDisplayfunc(MainDisplayDigits)
};

function ClickonOperatorDisplay() {
    StoredSecondNumber = StoredFirstNumber;
    StoredFirstNumber = '';
    MainDisplayfunc(StoredFirstNumber);
    console.log(StoredOperator);
    console.log(SecondaryDisplay);
    SecondaryDisplay = `${Number(StoredSecondNumber)}${StoredOperator}`; // Come back to this if theres an error on the number//
    SecondaryDisplayfunc(SecondaryDisplay);
}

//Click Logic
const CalculatorNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const MainOperators = [' ÷', ' X', ' -', ' +']
const SecondaryOperators = ['Clear', 'Delete', '+/-', 'equals', '²']

ClientClicks.forEach(buttonClicked => {
    buttonClicked.addEventListener('click', (e) => {
        CalculatorInput = e.target.id;
        InputMainOperators(CalculatorInput);
        InputNumbers(CalculatorInput);
    }
    )
}
)


function InputNumbers(x) {

    if (CalculatorNumbers.includes(x)) {
        if (StoredFirstNumber.length < 12){
        StoredFirstNumber = StoredFirstNumber + x;
        TransformMainDisplay()
    }
}
};



function InputMainOperators(x) {

    if (MainOperators.includes(x)) {
        if(StoredOperator == ''){
            StoredOperator = x;
            ClickonOperatorDisplay()
            return
        }
        if(StoredOperator !== ''){
            //logic for operations//
            console.log(StoredFirstNumber);
            console.log(StoredSecondNumber);
            switchMainOperations(x);
        }
    }


    if (SecondaryOperators.includes(x)){
        switchSecondaryOperators(x);
    }
};




// Operator Function //

const add = function (x,y) {
    let Calsum = x + y;
   
    return Calsum;
};


const subtract = function (x,y) {
    let Subsum = x - y
    return Subsum;
};


const divide = function (x,y) {
    if (y != 0){
    let temp = x/y;
    let remainder = x%y;
    if (remainder != 0){
    return temp.toFixed(4);
    }
    if(remainder == 0){
      return temp
      }
    }
    else{
        return 'Nice try punk!'
    }
}



const Mutiplication = function (x,y){
    return x*y;
}


const power = function(x,y) {
	return x**y;
};

// Switch Statement for the main operations//

function switchMainOperations(x){
    switch(x){
        case ' ÷':
            //divide logic//
            StoredOperator = '';
            StoredOperator = ' X'
            StoredFirstNumber = Number(StoredFirstNumber)
            StoredSecondNumber = Number(StoredSecondNumber)
            DivTwoNumber = divide(StoredSecondNumber,StoredFirstNumber)
            MainDisplayfunc(DivTwoNumber);
            SecondaryDisplayfunc(DivTwoNumber);
            if(DivTwoNumber !== 'Nice try punk!'){ 
                StoredSecondNumber = DivTwoNumber;
            }
            else{
                StoredSecondNumber = '';
            }
            StoredFirstNumber ='';
            StoredOperator = '';
        break;
        
        case ' X':
            StoredOperator = '';
            StoredOperator = ' X'
            StoredFirstNumber = Number(StoredFirstNumber)
            StoredSecondNumber = Number(StoredSecondNumber)
            MulTwoNumber = Mutiplication(StoredSecondNumber,StoredFirstNumber)
            MainDisplayfunc(MulTwoNumber);
            SecondaryDisplayfunc(MulTwoNumber);
            StoredSecondNumber = MulTwoNumber;
            StoredFirstNumber ='';
            StoredOperator = '';
        break;

        case ' -':
            //subtract logic//
            StoredOperator = '';
            StoredOperator = ' -'
            StoredFirstNumber = Number(StoredFirstNumber)
            StoredSecondNumber = Number(StoredSecondNumber)
            SubTwoNumber = subtract(StoredSecondNumber,StoredFirstNumber)
            MainDisplayfunc(SubTwoNumber);
            SecondaryDisplayfunc(SubTwoNumber);
            StoredSecondNumber = SubTwoNumber;
            StoredFirstNumber ='';
            StoredOperator = '';
        break;

        case ' +':
            StoredOperator = '';
            StoredOperator = ' +'
            StoredFirstNumber = Number(StoredFirstNumber)
            StoredSecondNumber = Number(StoredSecondNumber)
            AddTwoNumber = add( StoredSecondNumber,StoredFirstNumber)
            MainDisplayfunc(AddTwoNumber);
            SecondaryDisplayfunc(AddTwoNumber);
            StoredSecondNumber =AddTwoNumber;
            StoredFirstNumber ='';
            StoredOperator = '';
        break;
    }
}


// Secondary Operator function ['Clear', 'Delete', '+/-', 'equals', '²']//

function Clearfunc(){
     StoredFirstNumber = '';
     StoredOperator = '';
     StoredSecondNumber = '';
     PrimaryDisplay = '';
     SecondaryDisplay = '';
     MainDisplayfunc(PrimaryDisplay);
     SecondaryDisplayfunc(SecondaryDisplay);
}

function Deletefunc(){
    if (typeof(StoredFirstNumber) !== 'string'){
        let NewString =  StoredFirstNumber.toString;
        StoredFirstNumber = NewString.slice(0, -1);
        MainDisplayfunc(Number(StoredFirstNumber));
    }
    else{
        let tempnum =  StoredFirstNumber;
        StoredFirstNumber = tempnum.slice(0, -1);
        MainDisplayfunc(Number(StoredFirstNumber));
    }
}

function realNumberChange(){
    StoredFirstNumber = Number(StoredFirstNumber);
    StoredFirstNumber = StoredFirstNumber * -1;
    MainDisplayfunc(Number(StoredFirstNumber))
}

function PowerofTwo(){
    StoredFirstNumber = Number(StoredFirstNumber);
    StoredFirstNumber = StoredFirstNumber **2;
    MainDisplayfunc(Number(StoredFirstNumber))
}

function equalfunc(){
    switchMainOperations(StoredOperator);
}

function switchSecondaryOperators(x){
    switch(x){
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

    }
}
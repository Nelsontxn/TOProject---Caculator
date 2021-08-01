class DisplayValue{

}

const ClientClicks = document.querySelectorAll('.button');

ClientClicks.forEach(buttonClicked => {
    buttonClicked.addEventListener('click' , (e)=>{
        console.log(e);
    })
}

)
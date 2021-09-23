//Variable for html 
const body = document.getElementById(`body`);
const formulaire = document.getElementById('my-form');
const firstValue = document.getElementById(`first-value`);
const operator = document.getElementById(`operator`);
const secondValue = document.getElementById(`second-value`);
const valid = document.getElementById(`valid`);
let resultat = document.createElement(`h1`);
document.body.appendChild(resultat);



//Style of Body
body.style.backgroundColor = `grey`;
body.style.display = `flex`;
body.style.flexDirection = `column`;
body.style.marginTop = `15%`;
body.style.alignItems = `center`;

//STYLE OF FORM
formulaire.style.width = `50vh`;
formulaire.style.margin = `auto`;

//Style of first input
firstValue.style.borderRadius = `20px`;
firstValue.style.width = "50vh";
firstValue.style.height = "30px";
firstValue.style.textAlign = "center";

//Style of operator input
operator.style.borderRadius = `20px`;
operator.style.width = `30%`;
operator.style.height = `30px`;
operator.style.margin = `5px 0 5px 35%`;
operator.style.textAlign = `center`;

//Style of third input
secondValue.style.borderRadius = `30px`;
secondValue.style.width = `50vh`;
secondValue.style.height = `30px`;
secondValue.style.textAlign = `center`;

//Style of Button
valid.style.borderRadius = `30px`;
valid.style.margin = `5px 0 5px 35%`;
valid.style.width = `30%`;
valid.style.height = `25px`;

//Style of number result
resultat.style.fontSize = `5rem`;
resultat.style.color = `red`;

//Function to see the mouvement of mouse in console
valid.addEventListener(`mousemove`,function(event){
        console.log(`la souris a bougé dans lon bouton à la position
       ${event.x}/${event.y} `);
       
});
//Function who calculate the result and write on html
valid.addEventListener("click", function(event){
            event.preventDefault();  
            valueOne = parseInt(firstValue.value);
            sign = operator.value;
            valueTwo = parseInt(secondValue.value);
            
            
            switch (sign) {
                case "+":
                  resultat.innerHTML = (valueOne + valueTwo);
                    break;
                case "-":
                    resultat.innerHTML =  (valueOne - valueTwo);
                    break;
                case "/":
                    resultat.innerHTML =   (valueOne / valueTwo);
                    break;
                case "*":
                    resultat.innerHTML =  (valueOne * valueTwo);
                    break;
                case "%":
                    resultat.innerHTML = (valueOne % valueTwo);
                    break;
                default:
                    resultat.innerHTML =   ("invalid operator");
            }
            
});









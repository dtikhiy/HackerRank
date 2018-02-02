// Global Variables
var selectedOper = "";
let validOperRE = new RegExp(/^\d{0,}[^-+\/*]$/);
let validEqualRE = new RegExp(/^\d{1,}[-+\/*]{1}\d{1,}$/);

// Button Click function to orchestrate operations
function clickButton(text) {
    let field = document.getElementById("res");
    let fieldText = field.innerHTML;
    switch (text) {
            case '0':
            case '1':
                field.innerHTML += text;
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                if(validOperRE.test(fieldText)) {
                    field.innerHTML += text;  
                    selectedOper = text;
                }
                break;
            case 'С':
                field.innerHTML = "";
            break;
        case '=':
            if (validEqualRE.test(fieldText)) {
               calculate(fieldText);
            }
        break;
            default:
                break;
        }
}

// Calculation of the binary operation result
function calculate(expression) {
    let field = document.getElementById("res");
    let operands = expression.split(selectedOper.charAt(0));
    let res = "";
    switch (selectedOper.charAt(0)) {
        case '+':
            res = `${parseInt(operands[0], 2) + parseInt(operands[1], 2)}`;
            field.innerHTML = `${parseInt(res, 10).toString(2)}`;
            break;
        case '-':
            res = `${parseInt(operands[0], 2) - parseInt(operands[1], 2)}`;
            field.innerHTML = `${parseInt(res, 10).toString(2)}`;
            break;
        case '*':
            res = `${parseInt(operands[0], 2) * parseInt(operands[1], 2)}`;
            field.innerHTML = `${parseInt(res, 10).toString(2)}`;
            break;
        case '/':
            if (parseInt(operands[1], 2) > 0) {
                res = `${parseInt(operands[0], 2) / parseInt(operands[1], 2)}`;               
            } else {
                res = 0;
            }

            field.innerHTML = `${parseInt(res, 10).toString(2)}`;             
            break;

        default:
            break;
    }
}
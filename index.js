function saturdayFun (val1="roller-skate") {
    return `This Saturday, I want to ${val1}!`;
}


function mondayWork (val2="go to the office") {
    return `This Monday, I will ${val2}.`;
}

function wrapAdjective (val3="*", val4) {
    return function (val4) {
        return `You are ${val3}${val4}${val3}!`
    }
}

const Calculator = {
    add (a,b) {return a+b},
    subtract (a,b) {return a-b},
    multiply (a,b) {return a*b},
    divide (a,b) {return a/b}
}



function actionApplyer (integer, array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            integer = array[i](integer);
            console.log(integer)   
        }
        return integer;
    }
    else {
        return integer; 
    }
}

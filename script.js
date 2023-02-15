const themechanger1 = document.getElementById("theme1");
const themechanger2 = document.getElementById("theme2");
const themechanger3 = document.getElementById("theme3");

const link = document.getElementById("link");

const value = document.getElementById("input_field");

function theme1() {
    link.href = "styles/styles1.css"
}

function theme2() {
    link.href = "styles/styles2.css"
}

function theme3() {
    link.href = "styles/styles3.css"
}

function display(num) {
    value.value += num;
}

function reset() {
    value.value = "";
}

function del() {
    let thevalue = value.value;
    let return_back = thevalue.slice(0, -1);
    value.value = return_back;
}

function find_result() {
    try {
        let result = eval(value.value);
        value.value = result;
    } catch (error) {
        value.value = error;
    }
}



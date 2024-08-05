//alert('hello'); 
function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("row", 3);
    newNode.setAttribute('placeholder', "Enter working field")
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
    
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', "Enter Qualifications");

    let aqob = document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    aqob.insertBefore(newNode,aqAddButtonOb);
}
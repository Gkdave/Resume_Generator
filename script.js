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

//Genrating CV
function generateCv() {
    // console.log("generating cv ");
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    //direct 
    document.getElementById('nameT2').innerHTML = nameField;
    //contact 
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    //Address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    // fb
    document.getElementById("fbT").innerHTML = document.getElementById('fbField').value;
    //insta
    document.getElementById('instaT').innerHTML = document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    //linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
    //Objective
    document.getElementById('objectiveT').innerHTML =
        document.getElementById('objectiveField').value;
    
    
    // Working Experiance

    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
        //console.log(str);
    }
    document.getElementById('weT').innerHTML = str; 

    //Academic qualifications
    let aqs = document.getElementsByClassName('aqField');

    let stra = "";

    for (let e of aqs) {
        stra = stra + `<li> ${e.value}</li>`;
        document.getElementById('aqT').innerHTML = stra;

    }

    // Code of Image

    let file = document.getElementById('imageField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // set the image to Template
    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result;
    }

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';


}

// Print C V
function printCv() {
    window.print();
}

$(document).ready(function() {
    if (!localStorage.getItem("txt_array")) {
        localStorage.setItem("txt_array", JSON.stringify([{
            title:"", text: ""
        }]));
        Txtarray = localStorage.getItem("txt_array");
        Txtarray = JSON.parse(Txtarray);
        
    } else {
        Txtarray = localStorage.getItem("txt_array");
        Txtarray = JSON.parse(Txtarray);
        printTxt();
    }
    if (!localStorage.getItem("job_array")) {
        localStorage.setItem("job_array", JSON.stringify([{
            job:"", job: ""
        }]));
        Jobarray = localStorage.getItem("job_array");
        Jobarray = JSON.parse(Jobarray);
        
    } else {
        Jobarray = localStorage.getItem("job_array");
        Jobarray = JSON.parse(Jobarray);
        printTxtjob();
    }

});
//inicia variable para almacenar titulo y texto
var Txtarray=[{
    title:"", 
    text:""}];
var Jobarray=[{
    job:"",
    skills:""}];


function printTxt() {
    $("#txt-submitted").empty();
   //for (i = 0; i < Txtarray.length; i++) {
        //var object1 = Txtarray[i];
        //console.log(object1);
        pos=Txtarray.length -1;
        //var object1 = Txtarray[pos];
        //console.log(pos);
        var profileTitle = Txtarray[pos].title;
        var profileText = Txtarray[pos].text;
        var txtHtml ="<h2>"+ profileTitle +"</h2>"+
                      "<p>" + profileText + "</p>";
        $("#txt-submitted").append(txtHtml);
    //}
}

function printTxtjob() {
    $("#txt-submitted-two").empty();
   //for (i = 0; i < Txtarray.length; i++) {
        //var object1 = Txtarray[i];
        //console.log(object1);
        pos=Jobarray.length -1;
        //var object1 = Txtarray[pos];
        //console.log(pos);
        var profileJob = Jobarray[pos].job;
        var profileSkills = Jobarray[pos].skills;
        var txtHtml ="<h2>"+ profileJob +"</h2>"+
                      "<p>" + profileSkills + "</p>";
        $("#job-submit").append(txtHtml);
    //}
}

//al presionar submit agrega el texto a la pagina
function getTxtData() {
    var profileTitle = $("#info-title").val();
    var profileText  = $("#info-text").val();
    var contentObject = {
        title: profileTitle,
        text: profileText
    }
    Txtarray.push(contentObject);
    printTxt();
    $("#add-txt-form input").val("");
    var txtString = JSON.stringify(Txtarray);
    localStorage.setItem("txt_array", txtString);
}

function getTxtDatajob() {
    var profileJob = $("#info-job").val();
    var profileSkills  = $("#info-skills").val();
    var contentObject = {
        job: profileJob,
        skills: profileSkills
    }
    Jobarray.push(contentObject);
    printTxtjob();
    $("#add-other-form input").val("");
    var jobString = JSON.stringify(Jobarray);
    localStorage.setItem("job_array", jobString);
}


//evento de click al boton submit
$("#submit-button").on("click", function() {
    getTxtData();
});
$("#submit-button-two").on("click", function() {
    getTxtDatajob();
});
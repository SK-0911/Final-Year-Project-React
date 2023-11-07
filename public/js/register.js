/***** Multi - step form in register.html *****/
$("#form2").hide();
$("#form3").hide();

$("#next1").click(function(){
    $("#form1").hide();
    $("#form2").show();
});

$("#back1").click(function(){
    $("#form2").hide();
    $("#form1").show();
});

$("#next2").click(function(){
    $("#form2").hide();
    $("#form3").show();
});

$("#back2").click(function(){
    $("#form3").hide();
    $("#form2").show();
});

function validate(){
    var fname = document.studentForm.firstName.value;
    var lname = document.studentForm.lastName.value;
    var email = document.studentForm.ClgEmail.value;
    var ph = document.studentForm.Phone.value;
    var sap = document.studentForm.SapID.value;

    var errfname = document.getElementById("errfname");
    var errlname = document.getElementById("errlname");
    var errEmail = document.getElementById("errEmail");
    var errPh = document.getElementById("errPh");
    var errSap = document.getElementById("errSap");

    var regex = /^[a-zA-Z\s]+$/;   
    var eRegex = /^[a-z]\.[a-z][0-9]{3}@nmims\.edu\.in$/;  
    var phRegex = /^[0-9]{10}$/;
    var sapRegex = /^[0-9]{11}$/;

    // First Name
    if(regex.test(fname) === false) {
        errfname.style.display = "block";
    } 
    if (fname === ""){
        errfname.style.display = "none";
    }

    // last Name
    if(regex.test(lname) === false) {
        errlname.style.display = "block";
    } 
    if (lname === ""){
        errlname.style.display = "none";
    }

    // Email
    if(eRegex.test(email) === false) {
        errEmail.style.display = "block";
    } 
    if (email === ""){
        errEmail.style.display = "none";
    }

    // Phone
    if(phRegex.test(ph) === false) {
        errPh.style.display = "block";
    }

    if (phRegex.test(ph) === true){
        errPh.style.display = "none";
    }

    if (ph === ""){
        errPh.style.display = "none";
    }

    // SAP ID
    if(sapRegex.test(sap) === false) {
        errSap.style.display = "block";
    }

    if (sapRegex.test(sap) === true){
        errSap.style.display = "none";
    }

    if (sap === ""){
        errSap.style.display = "none";
    }

}

var app = angular.module("mainApp", []);

app.controller('studentController', function($scope){
    $scope.reset = function(){  
        $scope.firstName = "";  
        $scope.lastName = "";  
        $scope.email = "";  
    }  
              
    $scope.reset();
})



// Landing Page events

//global variables

var loggedIn_userName;

jQuery(document).ready(function($) {

  $('#landingPageBtn').hide();


  //SignUp Submit Click
  $('#registration_submit').on('click',function(event) {

    event.preventDefault();
    var teacher_Name = $('#teacher_Name').val();
    var teacher_Phone = $('#teacher_PhoneNumber').val();
    var teacher_UName = $('#teacher_UName').val();
    var teacher_Pwd = $('#teacher_Pwd').val();
    var teacher_Courses = $('#teacher_Courses').val();

    console.log('teacher_Name: ' + teacher_Name);
    console.log('teacher_Phone: ' + teacher_Phone);
    console.log('teacher_UName: ' + teacher_UName);
    console.log('teacher_Pwd: ' + teacher_Pwd);
    console.log('teacher_Courses: ' + teacher_Courses);
    if(teacher_Name !='' && teacher_Phone !='' && teacher_UName !='' && teacher_Pwd !='' &&  teacher_Courses !='') {
      $.ajax({
        // url: '/clBorrower/'+userName.val()+'/'+passWord.val(),
        url: 'https://serene-taiga-60780.herokuapp.com/signup',
        type: 'POST',
        data: { name: teacher_Name, phone_number : teacher_Phone, username : teacher_UName, password : teacher_Pwd},
        success: function(data) {
          if(data != null) {
            console.log("Data is not null");
          }
        },
        complete: function(data) {
          console.log("data.status: "+data.status);
          if(data.status == 200) {
            console.log("Complete fired");
            console.log("data in complete" + data);
            //relocation page
            //page.redirect
          }
          else {
            console.log("Username or Password is wrong");
          }
        },
        error : function() {
          window.alert("Error while Registration");
        },
      });
    }else{
      window.alert("Enter all values");
    }
    // return false;
  });



  //Login Submit Click
  $('#login_click').on('click',function(event) {
    event.preventDefault();

     var login_form = $('#signInfrom');
     var two_factor_form=$('#two_factor_form');

    var username = $('#signin_UName').val();

    console.log(typeof username);
    console.log("clicked");
    var password = $('#signin_Pwd').val();
    if(username != '' && password != '') {
      console.log('inside check');
      $.ajax({
        url: 'https://serene-taiga-60780.herokuapp.com/login',
        type: 'POST',
        data: {username : username, password : password},
        success: function(data) {
          if(data != null) {
            console.log("Data is not null");
            loggedIn_userName = username;
          }
        },
        complete: function(data) {
          console.log("data.status: "+data.status);
          if(data.status == 200) {
            console.log("Complete fired");
            console.log("data in complete" + JSON.stringify(data));

            //relocation page
            //window.location.href = "home.html";
             login_form.hide('slow');
             two_factor_form.show('slow');
          }
        },
        error : function() {
          window.alert("No User found");
        },
      });
    }
    return false;
  });


  $('#otpVerify').click(function() {
    //ajax call to node to verify otp

    event.preventDefault();

    var otp_code = $('#signin_OtpCode').val();

    console.log("otpVerify clicked");
    console.log(otp_code);
    //if(otp_code != '') {
      $.ajax({
        url: 'https://serene-taiga-60780.herokuapp.com/sendOtp',
        type: 'POST',
        data: {otpCode : otp_code, uName : loggedIn_userName},
        success: function(data) {
          if(data != null) {
            console.log("Data is not null");
          }
        },
        complete: function(data) {
          console.log("data.status: "+data.status);
          if(data.status == 200) {
            console.log("Complete fired");
            console.log("data in complete" + JSON.stringify(data));

            //relocation page
            window.location.href="home.html";
          }
        },
        error : function() {
          window.alert("Wrong OTP found");
        },
      });
    //}
    return false;



  });

  //signUp Anchor Click
  $('#signUpAnchor').click(function() {
    $('#headerDiv').hide('slow');
    $('#signUpfrom').show('slow');
    $('#signInfrom').hide();
    $('#two_factor_form').hide();
    $('#landingPageBtn').show('slow');
  });

  //signIp Anchor Click
  $('#signInAnchor').click(function() {
    $('#headerDiv').hide('slow');
    $('#signInfrom').show('slow');
    $('#signUpfrom').hide();
    $('#two_factor_form').hide();
    $('#landingPageBtn').show('slow');
  });


  $('#landingPageBtn').click(function(){
    $('#headerDiv').show('slow');
    $('#signUpfrom').hide();
    $('#signInfrom').hide();
    // $('#two_factor_form').hide();
    $('#landingPageBtn').hide();

  });

});

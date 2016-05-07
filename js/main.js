	
	//Globals
var loader;
var HWvalue;
var selectedStudent;
var studentJSON;

//Grade calc logic
var test_MaxValues = {};
var test_PercentageValues = {};
var finalGrade_ranges = {};

function add_default_values() {
    try{
        add_Test_MaximumValues(500, 500, 200, 100, 100, 100);
        add_Test_PercentageValues(10, 40, 20, 10, 10, 10);
        add_finalGrade_Ranges(90, 100, 80, 89, 70, 79, 60, 69, 0, 59);
        
        //further steps:
        // add each of these values to front end circular draggable
        //example
        //$('#element name').val();
    }
    catch(error) {
        console.log('error in add_default_values: ' + error);
    }
}

function get_TestMax_Values() {
    try{
    //further steps:
    //get individual element and set value to it from test_MaxValues 
    //$('#element name').val();

    var self=this;
    

	$("#hw").roundSlider({
    radius: 85,
    sliderType: "min-range",
    min: 1,
    max: 1500,
    value: self.test_MaxValues.Homework_MaxValue
	});

	

	$("#labs").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: self.test_MaxValues.Lab_MaxValue
	});

	

	$("#project").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: test_MaxValues.Project_MaxValue
	});

	

	$("#presentation").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: test_MaxValues.Presentation_MaxValue
	});

	

	$("#midterm").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: test_MaxValues.Midterm_MaxValue
	});

	

	$("#final").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: test_MaxValues.Final_MaxValue,
	});

	

    }
    catch(error){
        console.log('error in get_TestMax_Values: ' + error);
    }
}

function tooltipVal2(args){
	return args.value+"%";
}

function update_TestMax_Values(){
    try{

    //further steps:
    //get individual element selected value and send as input parameter to below method
    //$('#element name').val();
    //add_Test_MaximumValues();

    var hwvalue=$("#hw").data("roundSlider").getValue();
    var labvalue=$("#labs").data("roundSlider").getValue();
    var projectvalue=$("#project").data("roundSlider").getValue();
    var presentationvalue=$("#presentation").data("roundSlider").getValue();
    var midtermvalue=$("#midterm").data("roundSlider").getValue();
    var finalsvalue=$("#final").data("roundSlider").getValue();
	
	var result=add_Test_MaximumValues(hwvalue,labvalue,projectvalue,presentationvalue,midtermvalue,finalsvalue);
		if(!result){
			alert("Failed Updating Points");
		}else{
			alert("Points setting Done!");
		}
    }
    catch(error){
        console.log('error in update_TestMax_Values: ' + error);
    }
}

function add_Test_MaximumValues(homework_MaxVal, lab_MaxValue, project_MaxValue, presentation_MaxValue, midterm_MaxValue, final_MaxValue) {
    try {
    	
        test_MaxValues['Homework_MaxValue'] = homework_MaxVal;
        test_MaxValues['Lab_MaxValue'] = lab_MaxValue;
        test_MaxValues['Project_MaxValue'] = project_MaxValue;
        test_MaxValues['Presentation_MaxValue'] = presentation_MaxValue;
        test_MaxValues['Midterm_MaxValue'] = midterm_MaxValue;
        test_MaxValues['Final_MaxValue'] = final_MaxValue;
        return true;

    }
    catch (error) {
        console.log('error in add_Test_MaximumValues: ' + error);
        return false;
    }
}

function get_TestPercentage_Values() {
    try{
    //further steps:
    //get individual element and set value to it from test_PercentageValues 
    //$('#element name').val();
    
    $("#hw_scale").roundSlider({
    radius: 85,
    sliderType: "min-range",
    min: 1,
    max: 100,
    value: test_PercentageValues['Homework_PercentageVal'],
    tooltipFormat: "tooltipVal2"
	});
$("#labs_scale").roundSlider({
    radius: 85,
    min: 1,
    max: 100,
    sliderType: "min-range",
    value: test_PercentageValues['Lab_PercentageValue'],
    tooltipFormat: "tooltipVal2"
	});
$("#project_scale").roundSlider({
    radius: 85,
    min: 1,
    max: 100,
    sliderType: "min-range",
    value: test_PercentageValues['Project_PercentageValue'],
    tooltipFormat: "tooltipVal2"
	});
$("#presentation_scale").roundSlider({
    radius: 85,
    min: 1,
    max: 100,
    sliderType: "min-range",
    value: test_PercentageValues['Presentation_PercentageValue'],
    tooltipFormat: "tooltipVal2"
	});
$("#midterm_scale").roundSlider({
    radius: 85,
    min: 1,
    max: 100,
    sliderType: "min-range",
    value: test_PercentageValues['Midterm_PercentageValue'],
    tooltipFormat: "tooltipVal2"
	});
$("#final_scale").roundSlider({
    radius: 85,
    min: 1,
    max: 100,
    sliderType: "min-range",
    value: test_PercentageValues['Final_PercentageValue'],
    tooltipFormat: "tooltipVal2"
	});

    }
    catch(error){
        console.log('error in get_TestPercentage_Values: ' + error);
    }
}

function update_TestPercentage_Values() {
    try{
        //further steps:
        //get individual element selected value and send as input parameter to below method
        //$('#element name').val();
        //add_Test_PercentageValues(input parameters);
    var hwvalue_scale=$("#hw_scale").data("roundSlider").getValue();
    var labvalue_scale=$("#labs_scale").data("roundSlider").getValue();
    var projectvalue_scale=$("#project_scale").data("roundSlider").getValue();
    var presentationvalue_scale=$("#presentation_scale").data("roundSlider").getValue();
    var midtermvalue_scale=$("#midterm_scale").data("roundSlider").getValue();
    var finalsvalue_scale=$("#final_scale").data("roundSlider").getValue();
	
	var result=add_Test_PercentageValues(hwvalue_scale,labvalue_scale,projectvalue_scale,presentationvalue_scale,midtermvalue_scale,finalsvalue_scale);
		if(!result){
			alert("over all sum is not equal to 100");
		}else{
			alert("Percentage setting Done!");
		}
		console.log(result);
   
    }
    catch(error){
        console.log('error in update_TestPercentage_Values: ' + error);
    }
}

function add_Test_PercentageValues(homework_PercentageVal, lab_PercentageValue, project_PercentageValue, presentation_PercentageValue, midterm_PercentageValue, final_PercentageValue) {
    try {
        if (homework_PercentageVal + lab_PercentageValue + project_PercentageValue + presentation_PercentageValue + midterm_PercentageValue + final_PercentageValue == 100) {
            
            test_PercentageValues['Homework_PercentageVal'] = homework_PercentageVal;
            test_PercentageValues['Lab_PercentageValue'] = lab_PercentageValue;
            test_PercentageValues['Project_PercentageValue'] = project_PercentageValue;
            test_PercentageValues['Presentation_PercentageValue'] = presentation_PercentageValue;
            test_PercentageValues['Midterm_PercentageValue'] = midterm_PercentageValue;
            test_PercentageValues['Final_PercentageValue'] = final_PercentageValue;
            return true;
            
        }
        else {
            return false;
        }
        
    }
    catch (error) {
        console.log('error in add_Test_PercentageValues: ' + error);
        return false;
    }

}

function parseNumtoStr(arg1,arg2){
	return arg1.toString()+','+arg2.toString();

}

function get_final_GradeRange() {
    try{
    //further steps:
    //get individual element and set value to it from finalGrade_ranges 
    //$('#element name').val();

    $("#A_Grade").roundSlider({
    		radius: 85,
    		sliderType: "range",
    		value: parseNumtoStr(finalGrade_ranges['A'].least,finalGrade_ranges['A'].max)
		});

    $("#B_Grade").roundSlider({
    		radius: 85,
    		sliderType: "range",
    		value: parseNumtoStr(finalGrade_ranges['B'].least,finalGrade_ranges['B'].max)
		});

    $("#C_Grade").roundSlider({
    		radius: 85,
    		sliderType: "range",
    		value: 20,
    		value: parseNumtoStr(finalGrade_ranges['C'].least,finalGrade_ranges['C'].max)
		});

    $("#D_Grade").roundSlider({
    		radius: 85,
    		sliderType: "range",
    		value: parseNumtoStr(finalGrade_ranges['D'].least,finalGrade_ranges['D'].max)
		});

    $("#F_Grade").roundSlider({
    		radius: 85,
    		sliderType: "range",
    		value: parseNumtoStr(finalGrade_ranges['F'].least,finalGrade_ranges['F'].max)
		});

    }
    catch(error){
        console.log('error in get_final_GradeRange: ' + error);
    }
}

function update_final_GradeRange() {
    try{
        //further steps:
        //get individual element selected value and send as input parameter to below method
        //$('#element name').val();
        var A_Grade=$("#A_Grade").data("roundSlider").getValue().split(",");
        var A_Grade_least=parseInt(A_Grade[0]);
      	var A_Grade_max=parseInt(A_Grade[1]);

      	var B_Grade=$("#B_Grade").data("roundSlider").getValue().split(",");
        var B_Grade_least=parseInt(B_Grade[0]);
      	var B_Grade_max=parseInt(B_Grade[1]);

      	var C_Grade=$("#C_Grade").data("roundSlider").getValue().split(",");
        var C_Grade_least=parseInt(C_Grade[0]);
      	var C_Grade_max=parseInt(C_Grade[1]);

      	var D_Grade=$("#D_Grade").data("roundSlider").getValue().split(",");
        var D_Grade_least=parseInt(D_Grade[0]);
      	var D_Grade_max=parseInt(D_Grade[1]);


      	var F_Grade=$("#F_Grade").data("roundSlider").getValue().split(",");
        var F_Grade_least=parseInt(F_Grade[0]);
      	var F_Grade_max=parseInt(F_Grade[1]);

		var result=add_finalGrade_Ranges(A_Grade_least,A_Grade_max,B_Grade_least,B_Grade_max,C_Grade_least,C_Grade_max,D_Grade_least,D_Grade_max,F_Grade_least,F_Grade_max);

		if(!result){
			alert("over all sum is not equal to 100");
		}else{
			alert("Grade setting Done!");
		}
		

    }
    catch(error){
        console.log('error in update_final_GradeRange: ' + error);
    }
}

function add_finalGrade_Ranges(A_least, A_max, B_least, B_max, C_least, C_max, D_least, D_max, F_least, F_max) {
    try {
        
        var total= (A_max-A_least)+(B_max-B_least)+(C_max-C_least)+(D_max-D_least)+(F_max-F_least);
    	if(total+4 === 100){
    		 finalGrade_ranges['A'] = { 'least': A_least, 'max': A_max };
       		 finalGrade_ranges['B'] = { 'least': B_least, 'max': B_max };
       		 finalGrade_ranges['C'] = { 'least': C_least, 'max': C_max };
       		 finalGrade_ranges['D'] = { 'least': D_least, 'max': D_max };
       		 finalGrade_ranges['F'] = { 'least': F_least, 'max': F_max };
       		
        return true;
    	}else{
    		return false;
    	}
        
   }
   catch(error) {
       console.log('error in add_finalGrade_Ranges: ' + error);
       return false;
   }
}


function  startCalc(){

    var resultGrade=calculate_GPA(
        $('#homeworkpoints').val(),
        $('#labpoints').val(),
        $('#Projectpoints').val(),
        $('#Presentationpoints').val(),
        $('#Midtermpoints').val(),
        $('#FinalPoints').val());

    

    if(typeof(parseInt(resultGrade)) != 'number'){
        alert("Please enter points according to Rubric");
    }
    else{
        $( ".grade-text" ).empty();
        $( ".grade-text" ).append( "<h3>Final Grade is:</h3><br>" );
        $( ".grade-text" ).append(resultGrade);

        var gradeData={
            "studentid" : selectedStudent,
            "grade" : resultGrade
        }

        console.log(gradeData);

        //POST grade to DB
        $.post( "https://serene-taiga-60780.herokuapp.com/savestudentgrade",gradeData)
            .done(function( data ) {
              console.log(data);
        });

        //document.getElementById("finalGradeResult").innerHTML = "Final Grade is" + result;    
    }
    
}

function calculate_GPA(homework_value, lab_value, project_value, presentation_value, midterm_value, final_value) {
    //check if value entered is not either less than least Value and more than max value
    try{
        var return_Val = 'No Grade';
        console.log("Grade stasrted");

        var calulated_homeWork_value;
        var calulated_lab_value;
        var calulated_project_value;
        var calulated_presentation_value;
        var calulated_midterm_value;
        var calulated_final_value;

        if (homework_value >= 0 && homework_value <= test_MaxValues['Homework_MaxValue']) {
            //get homework percentage 
            calulated_homeWork_value = test_PercentageValues['Homework_PercentageVal'] * (homework_value / test_MaxValues['Homework_MaxValue']);
            calulated_homeWork_value = calulated_homeWork_value / 100;
        }
        else {
            //error in home work test result
            return 'error in homework value';
        }

        if (lab_value >= 0 && lab_value <= test_MaxValues['Lab_MaxValue']) {
            //get lab percentage 
            calulated_lab_value = test_PercentageValues['Lab_PercentageValue'] * (lab_value / test_MaxValues['Lab_MaxValue']);
            calulated_lab_value = calulated_lab_value / 100;
        }
        else {
            //error in lab test result
            return 'error in lab value';
        }
        if (project_value >= 0 && project_value <= test_MaxValues['Project_MaxValue']) {
            //get project percentage 
            calulated_project_value = test_PercentageValues['Project_PercentageValue'] * (project_value / test_MaxValues['Project_MaxValue']);
            calulated_project_value = calulated_project_value / 100;
        }
        else {
            //error in project test result
            return 'error in project value';
        }

        if (presentation_value >= 0 && presentation_value <= test_MaxValues['Presentation_MaxValue']) {
            //get persentation percentage 
            calulated_presentation_value = test_PercentageValues['Presentation_PercentageValue'] * (presentation_value / test_MaxValues['Presentation_MaxValue']);
            calulated_presentation_value = calulated_presentation_value / 100;
        }
        else {
            //error in persentation test result
            return 'error in presentation value';
        }

        if (midterm_value >= 0 && midterm_value <= test_MaxValues['Midterm_MaxValue']) {
            //get midterm percentage 
            calulated_midterm_value = test_PercentageValues['Midterm_PercentageValue'] * (midterm_value / test_MaxValues['Midterm_MaxValue']);
            calulated_midterm_value = calulated_midterm_value / 100;
        }
        else {
            //error in midterm test result
            return 'error in midterm value';
        }

        if (final_value >= 0 && final_value <= test_MaxValues['Final_MaxValue']) {
            //get final percentage 
            calulated_final_value = test_PercentageValues['Final_PercentageValue'] * (final_value / test_MaxValues['Final_MaxValue']);
            calulated_final_value = calulated_final_value / 100;
        }
        else {
            //error in final test result
            return 'error in final value';
        }

        //calculating final result
        var sumOf_allTests = calulated_homeWork_value + calulated_lab_value + calulated_project_value + calulated_presentation_value + calulated_midterm_value + calulated_final_value;

        console.log('sum ofall tests with weights: ' + sumOf_allTests);

        var final_Result = sumOf_allTests * 100;

        console.log('final Percentage: ' + final_Result);

        // looping through the finalGrade_ranges json -> comparing each grades range with fina_Result
        for (var key in finalGrade_ranges) {
            if (final_Result >= finalGrade_ranges[key]['least'] && final_Result <= finalGrade_ranges[key]['max']) {
                return_Val = key;
            }
            else {

            }
        }

        return return_Val;
    }
    catch(error){
        console.log('error in calculate_GPA: ' + error);
        return null;
    }
}


//Individual Element events (on click, on select etc..)





	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}

    function setUpFancySelect(){
    
        var mySelect=$('#studentselect');

        var getStudentURL = "https://serene-taiga-60780.herokuapp.com/getallstudents";

        $.get( "https://serene-taiga-60780.herokuapp.com/getallstudents", function( data ) {
             studentJSON=data;
             mySelect.empty();

             for(var x=0 ; x<studentJSON.length;x++){
                mySelect.append('<option value='+studentJSON[x]["ID"]+'>'+studentJSON[x]["first name"]+' '+studentJSON[x]["last name"]+'</option>');
             }
             mySelect.niceSelect();
        });

    }

    function setStudentInfo(){
        var studentable=$('.responstable');

        $.get( "https://serene-taiga-60780.herokuapp.com/getallstudents", function( data ) {
             studentJSON=data;
             
             
              
              console.log("this is studenttable");
              console.log(studentable);
             //studentable.empty();
              //studenttable.append('<tr><th>Name</th><th>Grade and ID</th><th>StudentID</th></tr>');
             
             // for(var x=0 ; x<studentJSON.length;x++){
             //    studentable.append('<tr> <td>'+studentJSON[x]["first name"]+'</td>'+'<td>'+'Hi'+'</td>');
             // }
             //studentable.empty();
             //studenttable.append('hi');


            
        });

    }

	function loadNewContent(newSection) {
		//create a new section element and insert it into the DOM
		var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
		//load the new content from the proper html file
		section.load(newSection+'.html .cd-section > *', function(event){
			//add the .cd-selected to the new section element -> it will cover the old one
			section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//close navigation
				toggleNav(false);
			});
			section.prev('.cd-selected').removeClass('cd-selected');
			get_TestMax_Values();
			get_TestPercentage_Values();
			get_final_GradeRange();
            setUpFancySelect();
            setStudentInfo();
            
		});

		$('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//once the navigation is closed, remove the old section from the DOM
			section.prev('.cd-section').remove();

		});

		if( $('.no-csstransitions').length > 0 ) {
			//if browser doesn't support transitions - don't wait but close navigation and remove old item
			toggleNav(false);
			section.prev('.cd-section').remove();
		}
	}

//DOCument ready function

jQuery(document).ready(function($){


    //$('.student-table').footable();

	add_default_values();

	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
	//select a new section
	$('.cd-nav li').on('click', function(event){
		event.preventDefault();
		var target = $(this),
			//detect which section user has chosen
			sectionTarget = target.data('menu');
		if( !target.hasClass('cd-selected') ) {
			//if user has selected a section different from the one alredy visible
			//update the navigation -> assign the .cd-selected class to the selected item
			target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
			//load the new section
			loadNewContent(sectionTarget);
		} else {
			// otherwise close navigation
			toggleNav(false);
		}
	});

    
});

$(document).on('change', '#studentselect', function() {
        selectedStudent = $('#studentselect').val();
        console.log(selectedStudent);
});













$(document).ready(function(){

//Array of playable characters 


let warriors= $('.warrior');
let begin = false;

$('#userChoice .col-md-12 .warrior').click(function(){
    if (begin == false){
        for (let i=0;i<warriors.length;i++){
            if (warriors[i] !=this){
                $('#enemiesAvailable').append(warriors[i]);
                if(warriors[i]!=this){
                    $(warriors[i]).addClass("redBorder")
                };

                begin = true;
                //if the image clicked, move to new row
                $('#enemiesAvailable img.warrior').click(function(){
                    if(warriors[i]=this){
                        $('#defender').append(warriors[i]);
                        $('#enemiesAvailable').hide();

                        if(warriors[i]=this){
                        $(warriors[i].removeClass("redBorder").addClass("yellowBorder"))
                        };
                    }
                });
            }
        }
    }
});


//Calculate battle, attack

//Scoring section
let pointsIncrementUser=8; 
let initialPoints = 8;
let pointsIncrementEnemy= 25;
let pointsUser= 120; //beginning HP
let pointsEnemy=180; //beginning HP
	

 	  $('#attack').click(function(){
 	  	  if(pointsEnemy>= 0 && pointsUser>= 0){
 	  	  	pointsEnemy=pointsEnemy - pointsIncrementUser;
 	  	  	pointsUser=pointsUser - pointsIncrementEnemy;
 	  		pointsIncrementUser=pointsIncrementUser + initialPoints; 
 	  	    document.querySelector('#score').innerHTML =
	'<p>You attacked enemy for ' + pointsUser + ' points.</p>' +
	'<p>Enemy attacked you for ' + pointsEnemy + ' points.</p>';
 	 	  		
 	  	}else
 	  		alert("Game Over!!");
 	  		
 	  	});
 	 	
			 $( '#reset' ).click(function() {
   				 location.reload();
			});




});

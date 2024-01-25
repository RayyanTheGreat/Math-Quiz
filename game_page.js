player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

question_turn= "player_1";
answer_turn = "player_2";

document.getElementById("player_1_name").innerHTML = player_1_name  + " :";
document.getElementById("player_2_name").innerHTML = player_2_name  + " :";
document.getElementById("player_1_score").innerHTML = player_1_score ;
document.getElementById("player_2_score").innerHTML = player_2_score ;
document.getElementById("player_question").innerHTML = "question turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player_2_name;

function send(){

number_1 = document.getElementById("number_1").value;
number_2 = document.getElementById("number_2").value;
actual_answer = parseInt(number_1) * parseInt(number_2)
console.log(actual_answer);
question_number = "<h4> " + number_1 + "x" + number_2 + "</h4>";
input_box ="<br>Answer : <input type =' text ' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check</button> ";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value ="";

}



function check(){

get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){

        if(answer_turn == "player_1"){

            player_1_score = player_1_score + 1 ;
            document.getElementById("player_1_score").innerHTML = player_1_score ;
        
        }

        else {

            player_2_score = player_2_score + 1 ;
            document.getElementById("player_2_score").innerHTML = player_2_score ;

        }

    }

    if(question_turn == "player_1"){

      question_turn ="player_2";
      document.getElementById("player_question").innerHTML = "question turn - " + player_2_name ;

    }

    else {

        question_turn ="player_1";
        document.getElementById("player_question").innerHTML = "question turn - " + player_1_name ;
  
    }

    if(answer_turn == "player_1"){

     answer_turn = "player_2";
     document.getElementById("player_answer").innerHTML = "answer turn - " + player_2_name;
      



    }

    else{

     answer_turn = "player_1" ;
     document.getElementById("player_answer").innerHTML = "answer turn - " + player_1_name ;

    }

document.getElementById("output").innerHTML = "" ; 

}


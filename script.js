let player_1_sum = 0;
let player_2_sum = 0;
let name_user =prompt ("Enter your Name Gamer :)");
document.getElementById("player_1").innerHTML= name_user ;

function play(){
    // for first dice 
    var random_number_1 = Math.floor (Math.random()*6)+1;
    var random_image_1 = "dice"+random_number_1+".png";
    var source_image_1 = "images/"+random_image_1;
    var image_1 = document.querySelectorAll("img")[0];
    image_1.setAttribute("src",source_image_1);

    // for second dice 
    var random_number_2= Math.floor (Math.random()*6)+1;
    var random_image_2 = "dice"+random_number_2+".png";
    var source_image_2 = "images/"+random_image_2; // source of the image of the new dice
    var image_2 = document.querySelectorAll("img")[1];
    image_2.setAttribute("src",source_image_2);
    // comparing the two dices values and adding the sum to the player total score 
    if (random_number_1>random_number_2){
       player_1_sum += random_number_1;
    }
    else if (random_number_2 > random_number_1){
        player_2_sum += random_number_2;
    }
}
function win_lose (){
if (player_1_sum>player_2_sum){
    document.querySelector("h1").innerHTML = name_user+" Won the Game with "+(player_1_sum-player_2_sum)+" Points!!";
}
else if (player_2_sum>player_1_sum){
    document.querySelector("h1").innerHTML = "Computer Won the Game with "+ (player_2_sum-player_1_sum)+" Points!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!";
}
}
function restart_game(){
    document.location.reload();
}
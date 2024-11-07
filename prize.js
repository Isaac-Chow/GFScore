document.getElementById("golden").style.display="none";

function prize(){
    current = parseInt(document.getElementById("score").innerHTML)
    if(current <= 0){
        document.getElementById("prz").innerHTML = "Please take a ball and roll it on the track!"
    }
    if (current >= 1 && current <= 6){
        document.getElementById("prz").innerHTML = "Small prize!"
    }
    if (current >= 7 && current <= 14){
        document.getElementById("prz").innerHTML = "Medium prize!"
    }
    if (current >= 15 && current < 20){
        document.getElementById("prz").innerHTML = "Medium prize + You now get the opputunity to try for the golden hole for the large prize(You get 1 more ball). Alternatively, you may keep going and aim for 20 points and try the golden hole then to get a chance of getting the jumbo prize."
        document.getElementById("golden").style.display="block";
    }
    if (current >= 20){
        document.getElementById("prz").innerHTML = "Wow! You got 20 points! You'll get 5 extra balls, try aiming for the golden hole now! If you get 3 or more into the golden hole, you'll get the jumbo prize. If you don't, you'll still get a large prize."
        document.getElementById("golden").style.display="block";
    } 

}

function gld(){
    current = parseInt(document.getElementById("score").innerHTML)

    if(current >=15 && current <20){
        if(prompt("You get 1 extra ball! Good luck!     Did you make it? [y]es [n]o") == "y"){
            document.getElementById("prz").innerHTML = "Congrats! You will get a large prize, please claim your prize towards your right!"
        } else {
            if(prompt("Pay 5 extra dollars for another go? If no, you will still get a medium prize. [y]es [n]o") == "y"){
                if(prompt("You get 1 more ball! Good luck!     Did you make it? [y]es [n]o") == "y"){
                    document.getElementById("prz").innerHTML = "Congrats! You will get a large prize, please claim your prize towards your right!"
                } else {
                    document.getElementById("prz").innerHTML = "Better luck next time! You will get a medium prize, please claim your prize towards your right!"
                }
            } else {
                document.getElementById("prz").innerHTML = "You will get a medium prize, please claim your prize towards your right!"
            }
        }
    }

    if(current >=20){
        ins = prompt("Here is 5 extra balls, wish you the best of luck!     How many did you get in?")
        if(ins >=3){
            document.getElementById("prz").innerHTML = "Congragulations!!! You'll be getting a JUMBO prize!!! Please claim your prize towards your right!"
        } else {
            document.getElementById("prz").innerHTML = "Congrats! You'll be getting a large prize! Please claim your prize towards your right!"
        }
    }
}
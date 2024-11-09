document.getElementById("bu").style.display="none";

if(sessionStorage.getItem("bu") == 1){
    document.getElementById("bu").style.display="block";
}

function getcurr(){
    current = parseInt(document.getElementById("score").innerHTML)
    console.log(current)
    return current
}

function bu1(){
    console.log("1")
    document.getElementById("score").innerHTML = getcurr() +1
    prize()
}

function bu3(){
    console.log("3")
    document.getElementById("score").innerHTML = getcurr() +3
    prize()
}

function bu5(){
    console.log("5")
    document.getElementById("score").innerHTML = getcurr() +5
    prize()
}

function bu10(){
    console.log("10")
    document.getElementById("score").innerHTML = getcurr() +10
    prize()
}

window.addEventListener('keydown', function (e) {
    current = parseInt(document.getElementById("score").innerHTML)
    console.log(current)
    if(e.key == "x"){
        console.log("1")
        document.getElementById("score").innerHTML = current +1
    }
    if(e.key == "z"){
        console.log("3")
        document.getElementById("score").innerHTML = current +3
    }
    if(e.key == "j"){
        console.log("5")
        document.getElementById("score").innerHTML = current +5
    }
    if(e.key == "h"){
        console.log("10")
        document.getElementById("score").innerHTML = current +10
    }
    prize()
  }, false);
document.getElementById("rst").style.display="block";
document.getElementById("rstcfm").style.display="none";

function reset(){
    document.getElementById("rst").style.display="none";
    document.getElementById("rstcfm").style.display="block";
    console.log("click")
        setTimeout(() => {
            document.getElementById("rst").style.display="block";
            document.getElementById("rstcfm").style.display="none";
            console.log("done")
        }, 1000);
}

function resetcfm(){
    document.getElementById("rst").style.display="block";
    document.getElementById("rstcfm").style.display="none";
    document.getElementById("prz").innerHTML = "Please take a ball and roll it on the track!"
    document.getElementById("golden").style.display="none";
    document.getElementById("score").innerHTML = 0
}

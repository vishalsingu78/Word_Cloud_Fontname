
function adding(){
    var username=document.getElementById("inputtext").value;
    var divmain=document.getElementById("display");

    var randomnum=Math.floor(Math.random()*60)+"px";
    console.log(randomnum);
    var createspan=document.createElement("span");
    createspan.id="disp";
    createspan.rows="27";
    createspan.cols="60";
    createspan.textContent=username+"  ";
    createspan.style.fontSize=randomnum;

    divmain.appendChild(createspan);

    if(username==""){
        document.getElementById("error").textContent="Enter the word";
    }
    else if(username!="" && randomnum>"10px"){
        document.getElementById("error").textContent="";
        document.getElementById("inputtext").value="";
    }
    else{
        document.getElementById("inputtext").value="";  
    }

}
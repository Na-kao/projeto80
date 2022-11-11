var la=[];
function submit(){
    var nc= document.getElementById("name1").value;
    la.push(nc);
    document.getElementById("displayName").innerHTML=la;
    document.getElementById("name1").value="";
}
function show(){
    la.sort();
    document.getElementById("sorted").innerHTML=la;
}
function searching(){
    var s=document.getElementById("s1").value;
    var found=0;
            for(var j=0; j<la.length; j++){
            if(s==la[j]){
                document.getElementById("p2").innerHTML="Aparece O Nome Na Posição "+j;
            }
            }
}
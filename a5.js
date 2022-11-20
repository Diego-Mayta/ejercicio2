function identidad(){
    var alfa = parseFloat(document.getElementById("a").value);
    var beta = parseFloat(document.getElementById("b").value);
    var a1=Math.tan(alfa+beta)
    var af=(Math.tan(alfa)+Math.tan(beta))/(1-Math.tan(alfa)*Math.tan(beta))
    document.getElementById("identidad").innerHTML=parseFloat(Math.round(a1*10000000)/10000000).toFixed(7)
    document.getElementById("pi2").innerHTML=parseFloat(Math.round(af*10000000)/10000000).toFixed(7)
}
function pi2(){
}
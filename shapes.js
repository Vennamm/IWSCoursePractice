function circle() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("perimeter").style.display = "block";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.top = "10px";
    canvas.style.left = "500px"; 
    canvas.style.position = "absolute";
    var x = canvas.width/2;
    var y = canvas.height/2;
    var r = 80;
    context.beginPath();
    context.arc(x,y,r,0,2*Math.PI,false);
    context.fillStyle = "#ff0000";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#000000";
    context.stroke();
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    input.innerHTML = "Radius = <input type = 'text' id = 'radius'><br />";
    submit.innerHTML = "<button onClick = 'circleAP()'>Submit</button>";
}
function circleAP() {
    var r = document.getElementById("radius").value;
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var A = Math.PI*r*r;
    var P = Math.PI*r*2;
    area.innerHTML = "Area = " + A;
    perimeter.innerHTML = "Perimeter = " + P;
}

function square() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("perimeter").style.display = "block";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.top = "10px";
    canvas.style.left = "500px"; 
    canvas.style.position = "absolute";
    var x = canvas.width/2;
    var y = canvas.height/2;
    var r = 100;
    context.beginPath();
    context.rect(x,y,r,r);
    context.fillStyle = "#00ff00";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#000000";
    context.stroke();
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    input.innerHTML = "Side = <input type = 'text' id = 'side'><br />";
    submit.innerHTML = "<button onclick='squareAP()'>Submit</button>";
}
function squareAP() {
    var a = document.getElementById("side").value;
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var A = a*a;
    var P = 4*a;
    area.innerHTML = "Area = " + A;
    perimeter.innerHTML = "Perimeter = " + P;
}

function triangle() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("perimeter").style.display = "block";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.top = "10px";
    canvas.style.left = "500px"; 
    canvas.style.position = "absolute";
    context.beginPath();
    context.moveTo(300,250);
    context.lineTo(150,400);
    context.lineTo(450,400);
    context.closePath();
    context.fillStyle = "ffff00";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "00ff00";
    context.stroke();
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    input.innerHTML = "Side 1 = <input type = 'text' id = 'side1'><br /><br />Side 2 = <input type = 'text' id = 'side2'><br /><br />Side 3 = <input type = 'text' id = 'side3'><br />";
    submit.innerHTML = "<button onclick = 'triangleAP()'>Submit</button>";
}
function triangleAP() {
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var s = (+a + +b + +c)/2;
    if ((+a+ +b<= +c)||(+b+ +c<= +a)||(+c+ +a<= +b)){
	area.innerHTML = "Invalid inputs.";
	perimeter.innerHTML = "Triangle cannot be formed.";
    }else{
	var A_square = s*(s- +a)*(s- +b)*(s- +c);
        var A = Math.sqrt(A_square);
        var P = 2*s;
        area.innerHTML = "Area = " + A;
        perimeter.innerHTML = "Perimeter = " + P;
    }	    
}

function rectangle() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("perimeter").style.display = "block";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.top = "10px";
    canvas.style.left = "500px"; 
    canvas.style.position = "absolute";
    var x = canvas.width/2;
    var y = canvas.height/2;
    var l = 200;
    var b = 100;
    context.beginPath();
    context.rect(x,y,l,b);
    context.fillStyle = "#00ffff";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#000000";
    context.stroke();
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    input.innerHTML = "Length = <input type = 'text' id = 'length'><br /><br />Breadth = <input type = 'text' id = 'breadth'><br />";
    submit.innerHTML = "<button onclick = 'rectangleAP()'>Submit</button>";
}
function rectangleAP() {
    var l = document.getElementById("length").value;
    var b = document.getElementById("breadth").value;
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var A = l*b;
    var P = +l+ +l+ +b+ +b;
    area.innerHTML = "Area = " + A;
    perimeter.innerHTML = "Perimeter = " + P;
}

function hexagon() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("area").style.display = "block";
    document.getElementById("perimeter").style.display = "block";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.top = "10px";
    canvas.style.left = "500px"; 
    canvas.style.position = "absolute";
    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(350,250);
    context.lineTo(400,300);
    context.lineTo(400,350);
    context.lineTo(350,400);
    context.lineTo(300,350);
    context.closePath();
    context.fillStyle = "#ff00ff";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#000000";
    context.stroke();
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    input.innerHTML = "Side = <input type = 'text' id = 'sidee'><br />";
    submit.innerHTML = "<button onclick = 'hexagonAP()'>Submit</button>";
}
function hexagonAP() {
    var a = document.getElementById("sidee").value;
    var area = document.getElementById("area");
    var perimeter = document.getElementById("perimeter");
    var A = Math.sqrt(3)*a*a*3/2;
    var P = 6*a;
    area.innerHTML = "Area = " + A;
    perimeter.innerHTML = "Perimeter = " + P;
}

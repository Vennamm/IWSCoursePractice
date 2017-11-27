var cart=[];
var cost=[];
jQuery(document).ready(function(){$('[data-toggle="popover"]').popover({placement:'top',trigger:'hover'});});
function Fruits(){
    document.getElementById("name1").innerHTML="Pineapple";
    document.getElementById("img1").src="http://clipartix.com/wp-content/uploads/2016/04/Pineapple-images-free-pictures-download-clip-art.png";
    document.getElementById("img1").alt="Pineapple";
    document.getElementById("first").value="25";
    $('button#first').attr("data-content","Price = 25");
    document.getElementById("name2").innerHTML="Water Melon";
    document.getElementById("img2").src="http://pngimg.com/uploads/watermelon/watermelon_PNG2654.png";
    document.getElementById("img2").alt="Water Melon";
    document.getElementById("second").value="26";
    $('button#second').attr("data-content","Price = 26");
    document.getElementById("name3").innerHTML="Mango";
    document.getElementById("img3").src="https://www.bforball.com/image/categ/mango.png";
    document.getElementById("img3").alt="Mango";
    document.getElementById("third").value="27";
    $('button#third').attr("data-content","Price = 27");
    document.getElementById("name4").innerHTML="Peach";
    document.getElementById("img4").src="https://static1.squarespace.com/static/55359ac0e4b0a48fd270d2fa/t/5546f310e4b015ca719c53fd/1430713111513/";
    document.getElementById("img4").alt="Peach";
    document.getElementById("fourth").value="28";
    $('button#fourth').attr("data-content","Price = 28");
    document.getElementById("name5").innerHTML="Banana";
    document.getElementById("img5").src="http://www.pngmart.com/files/1/Banana-Clip-Art-Free-PNG.png";
    document.getElementById("img5").alt="Banana";
    document.getElementById("fifth").value="29";
    $('button#fifth').attr("data-content","Price = 29");
    document.getElementById("name6").innerHTML="Apple";
    document.getElementById("img6").src="https://www.picpng.com/image/view/25178";
    document.getElementById("img6").alt="Apple";
    document.getElementById("sixth").value="30";
    $('button#sixth').attr("data-content","Price = 30");
    if (document.getElementById("rowe").className=="hidden"){
        document.getElementById("rowe").className="unhidden";
        document.getElementById("costs").className="hidden";
    }
    return true;
}
function Bakery(){
    document.getElementById("name1").innerHTML="Chocolate";
    document.getElementById("img1").src="https://us.123rf.com/450wm/dianazh/dianazh1309/dianazh130900169/22079060-dark-chocolate-isolated-on-white-background.jpg?ver=6";
    document.getElementById("img1").alt="Chocolate";
    document.getElementById("first").value="1";
    $('button#first').attr("data-content","Price = 1");
    document.getElementById("name2").innerHTML="Bread";
    document.getElementById("img2").src="https://previews.123rf.com/images/givaga/givaga1104/givaga110400024/9297664-Loaf-of-Bread-isolated-on-white-background-Stock-Photo.jpg";
    document.getElementById("img2").alt="Bread";
    document.getElementById("second").value="2";
    $('button#second').attr("data-content","Price = 2");
    document.getElementById("name3").innerHTML="Cookies";
    document.getElementById("img3").src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3293973.jpg";
    document.getElementById("img3").alt="Cookies";
    document.getElementById("third").value="3";
    $('button#third').attr("data-content","Price = 3");
    document.getElementById("name4").innerHTML="Chips";
    document.getElementById("img4").src="https://previews.123rf.com/images/marifa/marifa1107/marifa110700360/9965509-Potato-chips-isolated-on-white-background-Stock-Photo.jpg";
    document.getElementById("img4").alt="Chips";
    document.getElementById("fourth").value="4";
    $('button#fourth').attr("data-content","Price = 4");
    document.getElementById("name5").innerHTML="Sandwich";
    document.getElementById("img5").src="https://previews.123rf.com/images/pixelbliss/pixelbliss0910/pixelbliss091000001/5633961-Large-sub-sandwich-isolated-on-white-Stock-Photo.jpg";
    document.getElementById("img5").alt="Sandwich";
    document.getElementById("fifth").value="5";
    $('button#fifth').attr("data-content","Price = 5");
    document.getElementById("name6").innerHTML="Cake";
    document.getElementById("img6").src="https://thumb7.shutterstock.com/display_pic_with_logo/137002/506561461/stock-photo-tasty-chocolate-cake-isolated-on-white-506561461.jpg";
    document.getElementById("img6").alt="Cake";
    document.getElementById("sixth").value="6";
    $('button#sixth').attr("data-content","Price = 6");
    if (document.getElementById("rowe").className=="hidden"){
        document.getElementById("rowe").className="unhidden";
        document.getElementById("costs").className="hidden";
    }
    return true;
}
function Baby(){
    document.getElementById("name1").innerHTML="Diaper";
    document.getElementById("img1").src="https://thumb1.shutterstock.com/display_pic_with_logo/697744/438021040/stock-photo-infant-child-baby-toddler-sitting-crawling-happy-smiling-in-diaper-looking-up-isolated-on-a-white-438021040.jpg";
    document.getElementById("img1").alt="Diaper";
    document.getElementById("first").value="7";
    $('button#first').attr("data-content","Price = 7");
    document.getElementById("name2").innerHTML="Powder";
    document.getElementById("img2").src="https://thumb1.shutterstock.com/display_pic_with_logo/1450451/172939154/stock-vector-baby-powder-bottle-cartoon-vector-and-illustration-isolated-on-white-background-172939154.jpg";
    document.getElementById("img2").alt="Powder";
    document.getElementById("second").value="8";
    $('button#second').attr("data-content","Price = 8");
    document.getElementById("name3").innerHTML="Soap";
    document.getElementById("img3").src="https://us.123rf.com/450wm/oksanaok/oksanaok1201/oksanaok120100050/12079360-cartoon-contours-cheerful-smiling-child-sitting-in-a-bath-with-soap-and-holding-a-bottle-of-shampoo-.jpg";
    document.getElementById("img3").alt="Soap";
    document.getElementById("third").value="9";
    $('button#third').attr("data-content","Price = 9");
    document.getElementById("name4").innerHTML="Oil";
    document.getElementById("img4").src="https://thumbs.dreamstime.com/z/blank-packaging-baby-oil-clear-bottle-isolated-white-background-clipping-path-91189145.jpg";
    document.getElementById("img4").alt="Oil";
    document.getElementById("fourth").value="10";
    $('button#fourth').attr("data-content","Price = 10");
    document.getElementById("name5").innerHTML="Pacifier";
    document.getElementById("img5").src="https://thumb9.shutterstock.com/display_pic_with_logo/490804/490804,1281212436,12/stock-photo-blue-baby-silicone-pacifier-isolated-on-white-58606798.jpg";
    document.getElementById("img5").alt="Pacifier";
    document.getElementById("fifth").value="11";
    $('button#fifth').attr("data-content","Price = 11");
    document.getElementById("name6").innerHTML="Toy Package";
    document.getElementById("img6").src="https://thumb9.shutterstock.com/display_pic_with_logo/3154073/630020726/stock-photo-stacking-train-toddler-toy-for-little-children-isolated-on-white-background-with-shadow-reflection-630020726.jpg";
    document.getElementById("img6").alt="Toy Package";
    document.getElementById("sixth").value="12";
    $('button#sixth').attr("data-content","Price = 12");
    if (document.getElementById("rowe").className=="hidden"){
        document.getElementById("rowe").className="unhidden";
        document.getElementById("costs").className="hidden";
    }
    return true;
}
function Baking(){
    document.getElementById("name1").innerHTML="Flour";
    document.getElementById("img1").src="https://thumbs.dreamstime.com/b/flour-ears-isolated-white-background-49927608.jpg";
    document.getElementById("img1").alt="Flour";
    document.getElementById("first").value="13";
    $('button#first').attr("data-content","Price = 13");
    document.getElementById("name2").innerHTML="Eggs";
    document.getElementById("img2").src="https://thumb9.shutterstock.com/display_pic_with_logo/70808/70808,1306001598,2/stock-photo-three-white-eggs-isolated-on-white-77661538.jpg";
    document.getElementById("img2").alt="Eggs";
    document.getElementById("second").value="14";
    $('button#second').attr("data-content","Price = 14");
    document.getElementById("name3").innerHTML="Dough";
    document.getElementById("img3").src="https://thumb1.shutterstock.com/display_pic_with_logo/324901/518950930/stock-photo-fresh-raw-dough-for-pizza-or-bread-baking-isolated-on-white-background-518950930.jpg";
    document.getElementById("img3").alt="Dough";
    document.getElementById("third").value="15";
    $('button#third').attr("data-content","Price = 15");
    document.getElementById("name4").innerHTML="Frosting";
    document.getElementById("img4").src="https://previews.123rf.com/images/dehooks/dehooks0804/dehooks080400001/2835936-Cupcake-with-pink-decorative-frosting-Isolated-on-white-background--Stock-Photo.jpg";
    document.getElementById("img4").alt="Frosting";
    document.getElementById("fourth").value="16";
    $('button#fourth').attr("data-content","Price = 16");
    document.getElementById("name5").innerHTML="Batter";
    document.getElementById("img5").src="https://thumb1.shutterstock.com/display_pic_with_logo/268810/268810,1236633027,104/stock-photo-pouring-sugar-in-the-bowl-with-eggs-in-it-for-batter-cooking-isolated-on-white-26357764.jpg";
    document.getElementById("img5").alt="Batter";
    document.getElementById("fifth").value="17";
    $('button#fifth').attr("data-content","Price = 17");
    document.getElementById("name6").innerHTML="Sugar";
    document.getElementById("img6").src="https://previews.123rf.com/images/coprid/coprid1501/coprid150100041/36010614-Heap-of-granulated-sugar-isolated-on-white-Stock-Photo.jpg";
    document.getElementById("img6").alt="Sugar";
    document.getElementById("sixth").value="18";
    $('button#sixth').attr("data-content","Price = 18");
    if (document.getElementById("rowe").className=="hidden"){
        document.getElementById("rowe").className="unhidden";
        document.getElementById("costs").className="hidden";
    }
    return true;
}
function Frozen(){
    document.getElementById("name1").innerHTML="Waffles";
    document.getElementById("img1").src="https://previews.123rf.com/images/aberration/aberration1005/aberration100500015/7013478-soft-waffles-isolated-on-white-background-Stock-Photo-waffles.jpg";
    document.getElementById("img1").alt="Waffles";
    document.getElementById("first").value="19";
    $('button#first').attr("data-content","Price = 19");
    document.getElementById("name2").innerHTML="Chicken";
    document.getElementById("img2").src="https://thumb7.shutterstock.com/display_pic_with_logo/163690/163690,1216037284,1/stock-photo-frozen-chicken-isolated-over-white-background-14882845.jpg";
    document.getElementById("img2").alt="Chicken";
    document.getElementById("second").value="20";
    $('button#second').attr("data-content","Price = 20");
    document.getElementById("name3").innerHTML="Fish";
    document.getElementById("img3").src="https://us.123rf.com/450wm/allaordatiy/allaordatiy1701/allaordatiy170100260/70751675-frozen-fish-isolated-on-white-background.jpg?ver=6";
    document.getElementById("img3").alt="Fish";
    document.getElementById("third").value="21";
    $('button#third').attr("data-content","Price = 21");
    document.getElementById("name4").innerHTML="Soup";
    document.getElementById("img4").src="https://thumb9.shutterstock.com/display_pic_with_logo/3944330/458120362/stock-vector-canned-tomato-soup-relistic-isolated-vector-illustration-458120362.jpg";
    document.getElementById("img4").alt="Soup";
    document.getElementById("fourth").value="22";
    $('button#fourth').attr("data-content","Price = 22");
    document.getElementById("name5").innerHTML="IceCream";
    document.getElementById("img5").src="https://previews.123rf.com/images/natalyaa/natalyaa1501/natalyaa150100582/35250493-ice-cream-isolated-on-a-white-background--Stock-Photo.jpg";
    document.getElementById("img5").alt="IceCream";
    document.getElementById("fifth").value="23";
    $('button#fifth').attr("data-content","Price = 23");
    document.getElementById("name6").innerHTML="Beverages";
    document.getElementById("img6").src="https://image.shutterstock.com/z/stock-vector-set-icons-of-bar-drinks-and-beverages-isolated-on-black-vector-illustration-195871481.jpg";
    document.getElementById("img6").alt="Beverages";
    document.getElementById("sixth").value="24";
    $('button#sixth').attr("data-content","Price = 24");
    if (document.getElementById("rowe").className=="hidden"){
        document.getElementById("rowe").className="unhidden";
        document.getElementById("costs").className="hidden";
    }
    return true;
}
function add(a,b){
    var flag=true;
    var count = 0;
    for(var i =0;i<cart.length;i++){
        if(cart[i]==document.getElementById(a).innerHTML){
            ++count;    
        }
    }
    if(count<1){
        cost.push(document.getElementById(b).value);   
        cart.push(document.getElementById(a).innerHTML); 
    }else{
        cost.push(document.getElementById(b).value);
        cart.push("");
        count=1;
    }
    
}
function cartt(){
    document.getElementById("rowe").className= "hidden";
    var tablediv = document.getElementById("costs");
    tablediv.innerHTML="";
    var table = document.createElement("TABLE");
    var tbody = document.createElement("TBODY");
    table.border='3';
    table.appendChild(tbody);
    var heading = new Array();
    heading[0]="Groceries List"
    heading[1]="Prices"
    
    var tr = document.createElement("TR");
    tbody.appendChild(tr);
    for(i=0;i<heading.length;i++){
        var th = document.createElement("TH");
        th.width = '100';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    var total = 0;
    var tr;
    var td1;
    var td2;
    for(i=0;i<cart.length;i++){
        tr = document.createElement("TR");
        td1 = document.createElement("TD");
        td2 = document.createElement("TD");
        td1.appendChild(document.createTextNode(cart[i]));
        td2.appendChild(document.createTextNode(cost[i]));
        total+=Number(cost[i]);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
    tr = document.createElement("TR");
    td1 = document.createElement("TD");
    td2 = document.createElement("TD");
    td1.appendChild(document.createTextNode("Total"));
    td2.appendChild(document.createTextNode(total));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
    tablediv.appendChild(table);
    
    if (tablediv.className=="hidden"){
        tablediv.className = "unhidden";
    }
}
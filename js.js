var b_id= 0;
var c_id= 0;
var cartt = [];
var pricercer = [];
$(document).ready(function(){$("#btnmodal").click(function(){$("#modalopen").modal();});});
$(document).ready(function(){$("#btnmodal2").click(function(){$("#modalopen2").modal();});});

    

function addnew(){
    c_id+=1;
    var categoryinfo = prompt("What's up?");
    var newcategory = '<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#'+categoryinfo.replace(" ","-")+'_'+c_id+'">'+categoryinfo+'</a></li>';
    $("#category").append(newcategory);
    var categoryref = '<div id="'+categoryinfo.replace(" ","_")+'_'+ c_id+'" class="tab-pane" role="tabpanel">';
    $(".tab-content").append(categoryref);
    
}
function addcard(){
    var categoryy = $(".tab-pane.active").attr("id");
    b_id = b_id+1;
    var prodname = $("#prodname").val();
    var prodval = $("#prodval").val();
    var newcard = '<div class="col-sm-3" id="'+b_id+'"><div class="card-block"><h3 class="card-title" id="product_'+b_id+'">'+prodname+'</h3><p class="card-text" id="price_'+b_id+'" value="'+prodval+'">Price = '+prodval+'</p><button type="button" class="btn btn-primary" onclick="cart('+b_id+')"  id="#value_'+b_id+'">Add to cart</button>';
    $('#'+categoryy).append(newcard);
}   
function compilecost(a,b){
    var tot=0;
    for(var k =0; k< a.length; k++){
        tot+= +a[k]*+b[k];
    }
    return tot;
}
function cart(prodid){  
    
    if(!cartt[prodid]){
        cartt[prodid]=1;
        var addrow = '<div class="row"><div class="col-xs-4"><h5>'+document.getElementById('product_'+prodid).innerHTML +'</h5></div><div class="col-xs-4"><h5>'+document.getElementById('price_'+prodid).getAttribute("value")+'</h5></div><div class="col-xs-4" id="count_'+prodid+'"><h5 id="cart_'+prodid+'">'+cartt[prodid]+'</h5></div></div>'; 
        $("#products").append(addrow);
    }else{
        cartt[prodid]+=1;
        $('#cart_'+prodid).html(cartt[prodid]);
    }
    for(var j=0;j<cartt.length;j++){
        
        if(cartt[j]>=1){    
            
            pricercer[j] = Number(document.getElementById('price_'+j).getAttribute("value"));    
        }else{
            pricercer[j] = Number(0);
            cartt[j] = 0;
            
        }
        var total = compilecost(cartt,pricercer);
        document.getElementById("total").innerHTML = total;
    }
}
//Source for cards-https://v4-alpha.getbootstrap.com/components/card/
var products=[];
function addproduct(){
    var id=document.getElementById("productid").value ;
    var name=document.getElementById("productname").value;
    var price=document.getElementById("productprice").value;
  
    //console.log(id+" "+name+" "+price)
    var product={};
    product.id=id;
    product.name=name;
    product.price=price;

    products.push(product);
    
    //console.log(products);

    displayList();
}
function deleteProduct(id){
      for(var i=0;i<products.length;i++){
          if (products[i].id==id){
              products.splice(i,1);
              break;
          }
        } 
        displayList();
}

function displayList(){
    var html='';
    html+= '<table><tr><th>Id</th><th>Name</th><th>price</th><th>Action</th></tr>';

    for(var i=0;i<products.length;i++){
        html+='<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].price+'</td><td><a href="javascript:void(0)" onclick="deleteProduct('+products[i].id+')" >Delete</a></td><td><a href="#">Edit<a></td></tr>'
    }
    html += '</table>';
    document.getElementById('productList').innerHTML=html;
    }
    
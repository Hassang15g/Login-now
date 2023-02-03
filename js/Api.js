var coynt = document.getElementById('coynt')
var myBtn =document.querySelectorAll('#btn');
for (var i = 0; i < myBtn.length; i++){
  myBtn[i].addEventListener('click',function(e){
  
    var mySrc=e.target.getAttribute('category')
    getApi()
    coynt.style.display="none";
  })
    
}



// var myLi = document.querySelectorAll('li');
// for (var i = 0; i < myLi.length; i++){
//   myLi[i].addEventListener('click',function(e){
//     var mySrc=e.target.getAttribute('category')
//     getApi(mySrc)
//     // navbar.style.display="none";
//   })
    
// }


var Items;
async function getApi(){
    var myApi =await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=afc0c5c08cf145919a58d7c6130f7914`);
    var finalRes =await myApi.json();
    Items =finalRes.articles
    display()
   
    
}

function display(){
    var cartoon =``;
    for(var i=0; i<Items.length; i++){
      Items[i].urlToImage !==null && Items[i].title !==null && Items[i].description !==null ?
        cartoon +=`
        <div class="col-md-4 ">
        <div class="ltem shadow rouded overflow-hidden">
      <img class="w-100" src=" ${Items[i].urlToImage}" alt="">
      <div class="caption p-1 text-white ">
        <h2 class='text-info'> ${Items[i].title.split(' ').splice(0,3).join(' ')}</h2>
        <p> ${Items[i].description.split(' ').splice(0,10).join(' ')}</p>
        <a class="btn btn-outline-info md-1 w-100" href="${Items[i]} url">show more</a>
      </div>
      </div>
    </div>
        `:''
    }
document.getElementById('sheData').innerHTML= cartoon
}






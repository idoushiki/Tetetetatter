
var num=[1];

 function Select(a){

   num[0]=a;
}


//window.onload=function(){
  var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
/*
    document.body.onclick = function() {
      ctx.drawImage(img, mX, mY)
    };
 });
}*/
canvas.addEventListener('click', onClick, false);
// number bf picture
function onClick(e) {

  var img=new Image();
  img.src="img/"+num+".png";
  var x = e.pageX-300;
  var y = e.pageY-300;
  ctx.drawImage(img, x, y,500,500);
}

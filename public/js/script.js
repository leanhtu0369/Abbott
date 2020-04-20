var menu = document.getElementById('menu-icon');
    ul= menu.nextElementSibling;
   
menu.addEventListener('click', function(){
    
    ul.classList.toggle("active");
    
});

var itemparent = document.getElementsByClassName('isset-child');
var i;
    for(i=0; i<itemparent.length; i++){
        itemparent[i].addEventListener('click',function(){   
            if(this.nextElementSibling.style.display === 'block'){
                this.nextElementSibling.style.display = 'none';
            }
            else{
                this.nextElementSibling.style.display = 'block';
            }    
        });
    }
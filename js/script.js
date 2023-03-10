var drop = document.getElementById("dropdown");

window.addEventListener('resize',function(){
    
    var scwidth = window.screen.width;

    if(scwidth > 1000){
        document.getElementById("menu-down").style.display="none";
    }
    
});
drop.addEventListener('click',function(){


    if(document.getElementById("menu-down").style.display === "none"){

        document.getElementById("menu-down").style.display="block";
    }
    else{
        document.getElementById("menu-down").style.display="none";
    }
    

});
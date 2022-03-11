

window.onload = function(){

    var divId = document.querySelectorAll("#divId")

    for(var i = 0; i < divId.length; i++){
        divId[i].classList.toggle("divChargement"+i)
        
    }



var slideContainer = document.querySelector(".slideContainer1")
var slideContainer2 = document.querySelector(".slideContainer2")
var box = document.querySelectorAll(".box")
var tailleBox = box[0].clientHeight
var counter = [0,1,2,3,4,5]
var p = 2
var a = 3
slideContainer.style.transform = "translateY("+(-tailleBox * counter[1])+"px)"
slideContainer2.style.transform = "translateY("+(-tailleBox * counter[4])+"px)"
window.onwheel = function test(event){
this.onwheel = null
       
   
    if(event.deltaY > 1){
      
    
        if(p <= 1){
            
           p = 2
           a = 3
        }
        
        slideContainer.style.transition = "transform 1s ease-in"
        slideContainer.style.transform = "translateY("+(-tailleBox * counter[p] )+"px)"
        slideContainer2.style.transition = "transform 1s ease-in"
        slideContainer2.style.transform = "translateY("+(-tailleBox * counter[a] )+"px)"
        slideContainer.ontransitionend = () => {
         
            p++
            a--
           
           
            if(box[p-1].classList.contains("last")){
                slideContainer.style.transition = "none"
                p -=5
                slideContainer.style.transform = "translateY("+(-tailleBox * counter[p] )+"px)"

                slideContainer2.style.transition = "none"
                a +=5
                slideContainer2.style.transform = "translateY("+(-tailleBox * counter[a] )+"px)"
            }
            
         
         
            };
            
          

    }
   
    if(event.deltaY < 1){
    
     if(p == 1){
         p = 2
         a = 3
     }
          
            
slideContainer.style.transition = "transform 1s ease-in"
        slideContainer.style.transform = "translateY("+(-tailleBox * counter[p-2] )+"px)"
        slideContainer2.style.transition = "transform 1s ease-in"
        slideContainer2.style.transform = "translateY("+(-tailleBox * counter[a+2] )+"px)"
        slideContainer.ontransitionend = () => {
           
          
           
            p--
            a++

            if(box[p-1].classList.contains("first")){
                slideContainer.style.transition = "none"
                //p = box.length - 2
                slideContainer.style.transform = "translateY("+(-tailleBox * counter[4] )+"px)"
                p = 5
                slideContainer2.style.transition = "none"
                //a = box.length-5
                a = 0
                slideContainer2.style.transform = "translateY("+(-tailleBox * counter[1] )+"px)"
            }
          
           
            };
        }
      
       
    
        setTimeout(() => {
                this.onwheel = function(event){
                    test(event)
                   
                }
            }, 1000);
   
}

}







var h = 0
	document.querySelector('.burger').addEventListener('click', function() {
		document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
		this.classList.toggle('open');
		document.querySelector('#burgerSectionGauche').classList.toggle('open');
		document.querySelector('#burgerSectionDroite').classList.toggle('open');

		var unit = document.querySelectorAll(".unit")
		unit.forEach(element => {
			element.classList.toggle('apparition');
		});
		
		if(h%2 == 0){
			window.onwheel = null
		}else{
			setTimeout(() => {
				document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
			}, 1000);
			
			
		}
	
		h++	
	})

	var reseauxAccueil = document.querySelectorAll(".reseauAccueil")
var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

	element.onmousemove = function(e){
		var left = e.movementX*5
		var top = e.movementY*5
		element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
		console.log("ok")
	}

	element.onmouseout = function(){
		element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
	}
});




const rhythmoflife = document.querySelector('.rhythmoflife');
const WoodworkingInAction= document.querySelector('.WoodworkingInAction');
const rhythmoflifeText = document.querySelector('.rhythmoflifeText');
const WoodworkingInActionText = document.querySelectorAll('.WoodworkingInActionText');

WoodworkingInActionText.forEach(function(element){
    element.classList.add('hidden');
});
rhythmoflife.addEventListener('click',function(){
    WoodworkingInActionText.forEach(function(element){
        element.classList.add('hidden');
    });
    rhythmoflifeText.classList.remove('hidden');
});
WoodworkingInAction.addEventListener('click',function(){
    WoodworkingInActionText.forEach(function(element){
        element.classList.remove('hidden');
    });
    rhythmoflifeText.classList.add('hidden');
});

// ===========================================================================================================




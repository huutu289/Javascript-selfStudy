let imgElement = document.querySelector('.items img');
function animation(e){
    
    // e.stopPropagation();
    // console.log(e.target);
    e.target.classList.add('anim');
    e.target.classList.remove('anim-remove');
}
function animationRemove(e){
    
    e.target.classList.remove('anim');
    e.target.classList.add('anim-remove');
}
imgElement.addEventListener('mouseover',animation);
imgElement.addEventListener('mouseout',animationRemove);
var linkItems = document.getElementsByClassName('m-breadcrumb')[0].querySelectorAll('.m-breadcrumb-link');

for(i = 0; i < linkItems.length; i++){
  linkItems[i].addEventListener('click', function(){
    for(i = 0; i < linkItems.length; i++){
      linkItems[i].classList.remove('active')
    }
    this.classList.add('active')
    this.parentNode.nextElementSibling.style.display = 'none';
  })
}

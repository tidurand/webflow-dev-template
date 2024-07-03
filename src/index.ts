console.log('Hello, world');
//On lance le script quand la page est chargée
document.addEventListener('DOMContentLoaded', function() { 

  //On récupère l'élément avec la classe title
  const myTitle = document.querySelector('.title') as HTMLElement
  
  //On change la couleur du texte en rouge
  myTitle.style.color = 'blue' 

});

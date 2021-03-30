let mouseCursor = document.querySelector('.cursor');  //1---con esto dejamso qeu el mous actue sobre el div cursor
let navLinks = document.querySelectorAll('.lower-container ul');


window.addEventListener('mousemove', cursor)  //2--wheenenver our mouse moves we will run a function

function cursor (e)  //3--con esta funcion vamos a tener acceso a un evento
{
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

// para animar el cursor vamos a hacer loop sobre los navlinks

navLinks.forEach(link =>{     ////4---con esto hacemos loop en todos los link que tenemos en la pagina. y PARA CADA LINK QUEREMOS hacer algo cuando LOS USAURIOS HAAGAN HOVVER y dejarlo dew hacer cuando no hagan el hover. Entonces añadiremos y eliminaremos la clase. 

    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow"); // con esto añadimos la clase que lo haremos en el css
        link.classList.remove("hovered-link"); 
    });
    
    // ahora tneemos que eliminar la clase
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow"); // con esto añadimos la clase que lo haremos en el css
        link.classList.add("hovered-link"); // 5---con esto lo que hacemos es queal hacer hover llalamos a la clase deifincda en el css y se hace el textblanco
    });


    // ahora necesitamso hacer una transicion en esto y lo hacmeos en el css ***

}); 
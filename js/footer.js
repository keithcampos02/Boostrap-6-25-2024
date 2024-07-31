//Al Cargar el HTML Muestra la funcion
document.addEventListener('DOMContentLoaded', () => {
    
    Mostrar_Footer(Opciones_Footer)
})
//Opciones
const Opciones_Footer =[
    {Nombre:"Terminos y Condiciones",Ruta:"term.html",Activo:true},
    {Nombre:"Politica de Privacidad",Ruta:"privaciodad.html",Activo:true},
    {Nombre:"Contacto",Ruta:"contacto.html",Activo:true},
    
];

//Funcion para mostrar el Footer
function Mostrar_Footer(Opciones_Footer) {
    let Contenedor = document.getElementById('V_Lista_Footer');
    let Plantilla =" ";
    
    Opciones_Footer.forEach(element => {
       
        if (element.Activo) { //Valida si la condicion es verdadera para mostrar al usuario
            Plantilla += `
            <li class="list-inline-item">
               <a href="${element.Ruta}" class="text-white">${element.Nombre}</a>
           </li>
           `
        }

       
    });

   
    Contenedor.innerHTML =Plantilla
}


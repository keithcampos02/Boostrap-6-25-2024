
mostrar_NavBar();

function mostrar_NavBar() {

    let opcion1 = "inicio"
    let opcion2 = "listado de productos"
    let opcion3 = "nuevo producto"
    let opcion4 = "pagina de mercadeo"


    let contenedor = document.getElementById('V_NavBar')

    let plantilla = ` <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="Index.html">${opcion1} <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="List-Products.html">${opcion2}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="New-Product.html">${opcion3}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">${opcion4}</a>
                        </li>
                        
            
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onclick="CerrarSesion()">Cerrar Sesion</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div> `



    contenedor.innerHTML = plantilla

}
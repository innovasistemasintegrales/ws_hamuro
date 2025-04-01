$(document).ready(function() {
    // Tu código original de main() integrado directamente
    var cont = 1;
    
    /* eventos para menu */
    $('#ico_menu').click(function(e){
        e.stopPropagation();
        if(cont == 1){
            $('#menu').animate({right:'0'});
            cont = 0;
        } else {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });

    /* Cerrar menú al hacer clic en cualquier enlace - NUEVO */
    $('#menu a').click(function() {
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });

    /* Cerrar menú al hacer clic fuera - NUEVO */
    $(document).click(function() {
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });

    /* Prevenir cierre al hacer clic dentro del menú - NUEVO */
    $('#menu').click(function(e){
        e.stopPropagation();
    });

    /* Tus eventos originales para opciones específicas */
    $('#op_inicio').click(function(){
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });
    
    $('#op_nosotros').click(function(){
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });
    
    $('#op_maquinas').click(function(){
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });
    
    $('#op_servicios').click(function(){
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });
    
    $('#op_clientes').click(function(){
        if(cont == 0) {
            $('#menu').animate({right:'-100%'});
            cont = 1;
        }
    });

    // Tus funciones originales de slider
    slider1();
    slider2();
    slider3();
});

// Mantenemos tus funciones de slider exactamente igual
function slider1() {
    let contenedorRepuestos = document.querySelector("#contenedorProductos");
    if(contenedorRepuestos) {  // Añadida verificación por si acaso
        let flkty1 = new Flickity(contenedorRepuestos, {
            autoPlay: true,
            cellAlign: "center",
            contain: true,
            wrapAround: true,
            pageDots: false,
        });
    }
}

function slider2() {
    let contenedorRepuestos = document.querySelector("#contenedorClientes");
    if(contenedorRepuestos) {  // Añadida verificación por si acaso
        let flkty1 = new Flickity(contenedorRepuestos, {
            autoPlay: true,
            cellAlign: "center",
            contain: true,
            wrapAround: true,
            pageDots: false,
        });
    }
}

function slider3() {
    let contenedorRepuestos = document.querySelector("#sliderMarcas");
    if(contenedorRepuestos) {  // Añadida verificación por si acaso
        let flkty1 = new Flickity(contenedorRepuestos, {
            autoPlay: true,
            cellAlign: "center",
            contain: true,
            wrapAround: true,
            pageDots: false,
        });
    }
}
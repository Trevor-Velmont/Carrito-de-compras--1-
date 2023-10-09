window.onload = function() {
    $('#cargar').fadeOut();
    $('body').removeClass('hidden');
  
  }
  /**Codigo para guardar o desplegar el menu responsivo */
  const hamburguesa = document.querySelector(".hamburguesa");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  
    if (navMenu.classList.contains("nav-menu_visible")) {
      hamburguesa.setAttribute("aria-label", "Cerrar menú");
    } else {
      hamburguesa.setAttribute("aria-label", "Abrir menú");
    }
  });
  
  
  //Variable que mantiene el estado visible del carrito
  var carritoVisible=false;
  //Algoritmo para que todos los elementos de la pagina carguen para continuar con el resto del código
  
  if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
  }else{
    ready();
  }
  /*
  window.onload=ready;
  */
  function ready(){
    //Algoritmo para dar funcionalidad al boton eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
      var button = botonesEliminarItem[i];
      button.addEventListener('click',eliminarItemCarrito);
    }
    // Funcionalidad al boton restar cantidad de elementos
    var botonesSumar = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<botonesSumar.length; i++){
      var button = botonesSumar[i];
      button.addEventListener('click',sumarCantidad);
    }
    // Funcionalidad al boton sumar cantidad de elementos
    var botonesRestar = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i<botonesRestar.length; i++){
      var button = botonesRestar[i];
      button.addEventListener('click',restarCantidad);
    }
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length; i++){
      var button = botonesAgregarAlCarrito[i];
      button.addEventListener('click',agregarAlCarritoClicked);
    }
  }
  //Funcion agregar al carrito
  function agregarAlCarritoClicked(event){
    var button=event.target;
    var item=button.parentElement;
    var titulo=item.getElementsByClassName('titulo-item')[0].innerText;
    console.log(titulo);
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    console.log(precio);
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc)
  }
  
  function agregarItemAlCarrito(titulo,precio,imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemCarrito = document.getElementsByClassName('carrito-items')[0];
  
    //Verificación de que el item no se encuentra ya en el carrito
    var nombresItemsCarrito = items.carrito.getElementsByClassName('carrito-item-titulo');
    for (var i=0; i<nombresItemsCarrito.length; i++){
      if(nombresItemsCarrito[i].innerText==titulo){
        alert('Ya se encuentra agregado en el carrito');
      }
    }
  }
  
  //Aumentar en uno el número de elementos seleccionados
  function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
  }
  function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual=cantidadActual-1;
    if(cantidadActual>=1){
      selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
      actualizarTotalCarrito();
    }
  }
  
  // Funcion para eliminar el item de un carrito
  function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    // Codigo para actualizar el total del carrito una vez se ha eliminado un elemento
    actualizarTotalCarrito();
    //Si despues de eliminarse elementos del carro si si este se queda sin elementos, entonces el carrito debe ocultarse
    ocultarCarrito();
  }
  
  /*
  function actualizarTotalCarrito(){
    // Seleccionamos el contenedor del carrito
    var carritoContenedor = document.getElementsByClassName('carrito'[0]);
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total=0;
    //Recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i<carritoItems.length; i++){
      var item = carritoItems[i];
      var precioElemento =  item.getElementsByClassName('carrito-item-precio')[0];
      console.log(precioElemento);
      var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
      console.log(precio);
      var cantidadItem=item.getElementsByClassName('carrito-item-cantidad')[0];
      var cantidad =cantidadItem.value;
      console.log(cantidad);
      total = total+(precio*cantidad);
    }
  }*/
  
  
  function actualizarTotalCarrito(){
    
    var cantidadItems = document.querySelectorAll('.carrito-item');
    var precioElementoString = document.querySelectorAll('.carrito-item-precio');
    var cantidadPorElemento = document.querySelectorAll('.carrito-item-cantidad');
  
    var precioUnitarioItem =[];
    var cantidadPorItem=[];
    var precioTotalItem=[];
    var total = 0;
  
    for(var i=0; i<cantidadItems.length; i++){
      let precio = precioElementoString[i].textContent;
      let precioElementoFloat = parseFloat(precio.replace(/\$|\./g, ''));
      precioUnitarioItem.push(precioElementoFloat);
      
      let cantidadElementoFloat=parseFloat(cantidadPorElemento[i].value);
      cantidadPorItem.push(cantidadElementoFloat);
  
      //console.log(precioUnitarioItem);
      //console.log(cantidadPorItem);
      
      precioTotalItem[i]=(cantidadPorItem[i])*(precioUnitarioItem[i]);
  
      total=total+precioTotalItem[i];
    }
    var carritoPrecioTotal=document.querySelector('.carrito-precio-total');
    //console.log(carritoPrecioTotal);
  
    carritoPrecioTotal.textContent = '$' + total.toLocaleString('es-CO',{minimumFractionDigits: 2, maximumFractionDigits: 2});
    console.log(carritoPrecioTotal);
  }
  
  function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
      var carrito = document.getElementsByClassName('carrito')[0];
      carrito.style.marginRight = '-100%';
      carrito.style.opacity='0';
      carritoVisible = false;
      // También debe aumentar el tamaño del catálogo
      var items = document.getElementsByClassName('contenedor-items');
      items.style.width = '160%';
    }
  }
  
  // Aparte
  
  function agregarAlCarrito(nombreProducto, imagenProducto) {
    var cantidad = parseInt(prompt("Ingresa la cantidad del producto:"));
    if (!isNaN(cantidad) && cantidad > 0) {
        var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        var productoExistente = carrito.find(producto => producto.nombre === nombreProducto);
  
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.push({ nombre: nombreProducto, cantidad: cantidad, imagen: imagenProducto });
        }
  
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto agregado al carrito: " + nombreProducto);
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
  }
  
  
  function cargarCarrito() {
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    var carritoLista = document.getElementById("carrito-lista");
  
    carritoLista.innerHTML = "";
  
    carrito.forEach(function(producto) {
        var li = document.createElement("li");
        li.className = "producto";
  
        var imagen = document.createElement("img");
        imagen.src = producto.imagen;
        li.appendChild(imagen);
  
        var textoProducto = document.createTextNode(producto.nombre + " - Cantidad: " + producto.cantidad);
        li.appendChild(textoProducto);
  
        var botonEliminar = document.createElement("span");
        botonEliminar.className = "eliminar";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            eliminarDelCarrito(producto.nombre);
        };
        li.appendChild(botonEliminar);
  
        carritoLista.appendChild(li);
    });
  }
  
  function eliminarDelCarrito(nombreProducto) {
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    var nuevoCarrito = carrito.filter(function(producto) {
        return producto.nombre !== nombreProducto;
    });
  
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    cargarCarrito();
  }
  
  cargarCarrito();
  
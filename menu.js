window.onload = function() {
  $('#cargar').fadeOut();
  $('body').removeClass('hidden');

}


function Somos() {
  
  var h1 = document.getElementById('h1');
  document.getElementById('pov').innerHTML = 'Somos una empresa competente en la comercialización y distribución de bebidas y refrescos en la categoría multimarcas, con más de 15 años de experiencia en la atención y servicio al cliente en la ciudad de Cartagena de Indias; nuestro propósito es alcanzar la confianza en nuestros clientes prestando el mejor servicio oportunamente y con eficacia.';
    
  var h2 = document.getElementById('h2');
  document.getElementById('pov2').innerHTML = 'Brindar un servicio eficiente y oportuno, local y domicilio a la población cartagenera y aledaños, respaldados por calidez humana, carisma, respeto y el sentido de pertenencia en la distribución de bebidas y refrescos que permita satisfacer las necesidades de nuestros clientes.';
    
  var h3 = document.getElementById('h3');
  document.getElementById('pov3').innerHTML = 'Para el año 2023 DISTRILÍQUIDOS MV se posicionará como una marca de distribución de líquidos y refrescos con reconocimiento comercial a nivel local y en la calidad de atención a sus clientes, trabajara en las normativas y disposiciones de ley como lo es Sistemas de gestión, seguridad y salud en el trabajo para que sus colaboradores se sientan protegidos por la empresa, buscando con ella colaboradores más felices y competitivos. ';
    
}

// Aparte

function agregarCarrito(nombreProducto, imagenProducto) {
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

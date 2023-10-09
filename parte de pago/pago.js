//seleccion tipo de calle
const calle_seleccion = document.getElementById('tipo_de_calle');
const label_calle = document.getElementById('cambio_tipo_calle');

calle_seleccion.addEventListener("change", function () {
    const calle_seleccionada = calle_seleccion.value;

    label_calle.textContent = calle_seleccionada;
});


//bloqueo de inputs
const input1 = document.getElementById('bloq1');
const input2 = document.getElementById('bloq2');
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        //si el checkbox esta marcado desactivar los inputs
        input1.disabled = true;
        input2.disabled = true;

        input1.setAttribute("class","cursor_bloqueo");
        input2.setAttribute("class","cursor_bloqueo");
    } else {
        //si esta desmarcado habilitar los inputs
        input1.disabled = false;
        input2.disabled = false;

        input1.setAttribute("class","cursor_desbloqueo");
        input2.setAttribute("class","cursor_desbloqueo");
    }
})
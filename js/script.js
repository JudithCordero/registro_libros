const pattern_date = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/; // dd/mm/aa
const pattern_number = /^[0-9]+$/;

let validacion = () => {
    let js_cod = getTextInputById("f_codigo");
    let js_nom = getTextInputById("f_nombrel");
    let js_edi = getTextInputById("f_editorial");
    let js_aut = getTextInputById("f_nombrea");
    let js_fec = getTextInputById("f_edicion");
    let js_can = getTextInputById("f_cantidad");
    let js_fecs = getTextInputById("f_salida");

    if (js_cod.length == 0) {
        mensaje('error', 'Error en Código', 'El dato Código no puede estar vacío!', null);
        return false;
    } else if (js_cod.length < 3) {
        mensaje('error', 'Error en Código', 'El dato Código debe tener al menos 3 caracteres!', null);
        return false;
    }

    if (js_nom.length == 0) {
        mensaje('error', 'Error en Nombre del Libro', 'El dato Nombre del Libro no puede estar vacío!', null);
        return false;
    } else if (js_nom.length < 3) {
        mensaje('error', 'Error en Nombre del Libro', 'El dato Nombre del Libro debe tener al menos 3 caracteres!', null);
        return false;
    }

    if (js_edi == "0") {
        mensaje('error', 'Error en Editorial', 'Debe seleccionar una Editorial!', null);
        return false;
    }

    if (js_aut.length == 0) {
        mensaje('error', 'Error en Autor', 'El dato Autor no puede estar vacío!', null);
        return false;
    }

    if (js_fec.length == 0) {
        mensaje('error', 'Error en Fecha de Edición', 'El dato Fecha de Edición no puede estar vacío!', null);
        return false;
    } else if (!pattern_date.test(js_fec)) {
        mensaje('error', 'Error en Fecha de Edición', 'El dato Fecha de Edición no cumple el formato! Ejemplo: 12/12/23', null);
        return false;
    }

    if (js_can.length == 0) {
        mensaje('error', 'Error en Cantidad', 'El dato Cantidad no puede estar vacío!', null);
        return false;
    } else if (!pattern_number.test(js_can)) {
        mensaje('error', 'Error en Cantidad', 'El dato Cantidad debe ser un número!', null);
        return false;
    }

    if (js_fecs.length == 0) {
        mensaje('error', 'Error en Fecha de Salida', 'El dato Fecha de Salida no puede estar vacío!', null);
        return false;
    }

   
    return true;
}

let getTextInputById = (id) => {
    return document.getElementById(id).value.trim();
}

let mensaje = (tipo, titulo, texto, liga) => {
    Swal.fire({
        icon: tipo,
        title: titulo,
        text: texto,
        footer: liga
    });
}

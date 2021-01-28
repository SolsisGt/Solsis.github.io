$('document').ready(function () {
    console.log('jquery mail working');
    $('#frm_mail').submit(function (e) {
        const postData = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            correo: $('#correo').val(),
            telefono: $('#telefono').val(),
            serv1: $('#servicio1').val(),
            serv2: $('#servicio2').val(),
            serv3: $('#servicio3').val(),
            mensaje:$('#comentario').val()
        };
        let url='./php/sendmail.php';
        $.post(url ,postData, function (response) {
            console.log(response);
            if(response=='Correo enviado'){
                document.getElementById("nombre_cliente").innerHTML=$('#nombre').val();    
            $('#modal_info').modal("hide");
            $('#modal_success').modal("show");
            $('#frm_mail').trigger('reset');
            }else{
                alert("Error no se envio el correo intente en unos segundos");
            }
                  
        });
        e.preventDefault();
    });
});

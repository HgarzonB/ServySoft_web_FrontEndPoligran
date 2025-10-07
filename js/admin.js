$(document).ready(function(){

  // ✅ Mostrar/Ocultar menú hamburguesa
  $(".menu-hamburguesa").click(function(){
    $(".menu-opciones").slideToggle();
  });

  // ✅ Botón editar: muestra formulario con datos
  $(".editar").click(function(){
    $("#form-edicion").slideDown();
  });

  // ✅ Botón eliminar: confirma y oculta el producto
  $(".eliminar").click(function(){
    if(confirm("¿Estás seguro de eliminar este producto?")){
      $("#producto1").fadeOut();
    }
  });

  // ✅ Guardar cambios (solo simula)
  $("#guardar").click(function(){
    alert("Cambios guardados correctamente ✅");
    $("#form-edicion").slideUp();
  });

});

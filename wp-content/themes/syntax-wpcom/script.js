jQuery( document ).ready(function($) {
	$(".status select").attr("disabled", "true");
	$(".wpcf7-form").submit(function(event){
		event.preventDefault();
		if( $(".kernel select").val()=="Si" 
			&& $(".sar select").val()=="Si" 
			&& $(".top select").val()=="Si" 
			&& $(".lsof select").val()=="Si"
			&& $(".top select").val()=="Si"
			&& $(".ntp select").val()=="Si"
			&& $(".dns select").val()=="Si"
			&& $(".tarjeta_red select").val()=="Si"
			&& $(".clave_root select").val()=="Si"
			&& $(".clave_consola select").val()=="Si"
			&& $(".usuario_hp select").val()=="Si"
			&& $(".sudo select").val()=="Si"
			&& $(".sosreport select").val()=="Si"
			&& $(".time_zone select").val()=="Si"
			&& $(".parches select").val()=="Si"){
				$(".status select").val("Aprobado");
		}else{
			$(".status select").val("Rechazado");
		}

		return true;
	});
});

import Ember from 'ember';

export default Ember.Controller.extend({
	 actions: {
	 	cifrar: function(){
	 		//empezamos el proceso de iniciar variables necesarias para nuestro encriptado
	 		var message=[], key=[], encrypted=[], n=0, character=0;
	 		//validaciones de longitud del abecedario
	 		if(abecedario.value.length == 0){
	 			alert("No hay abecedario");
	 		}
	 		else if (abecedario.value.length > 50){
	 			alert("el abecedario es demasiado grande");
	 		}
	 		else{
	 			//validamos que la clave sea para generar una matriz de nXn
	 			for(var count=2;count <= 15; count++){
	 				if(clave.value.length == count*count){
	 					n=count;
	 				}
	 			}
	 			if(n==0){
	 				alert("La clave es invalida");
	 			}
	 			//validamos que la clave y el mensaje sean del mismo tamaño
	 			if(clave.value.length == textoClaro.value.length){
	 				//obtenemos los valores númericos de las letras de la clave y el mensaje al compararlos con el abecedario
	 				loop1:
	 				for(var c = 0;c < (n*n);c++){
	 					loop2:
	 					for(var c1 = 0;c1 <= abecedario.value.length;c1++){
		 					if (textoClaro.value.charAt(c) == abecedario.value.charAt(c1)) {
		 						message[c]=c1;
		 						break loop2;
		 					}
		 					if(c1 == abecedario.value.length)
		 					{
		 						alert("El caracter no esta en el abecedario");
			 					break loop1;
		 					}
		 				}
		 			}
		 			loop1:
	 				for(var c = 0;c < (n*n);c++){
	 					loop2:
	 					for(var c1 = 0;c1 <= abecedario.value.length;c1++){
		 					if (clave.value.charAt(c) == abecedario.value.charAt(c1)) {
		 						key[c]=c1;
		 						break loop2;
		 					}
		 					if(c1 == abecedario.value.length)
		 					{
		 						alert("El caracter no esta en el abecedario");
			 					break loop1;
		 					}
		 				}
		 			}
		 			//multiplicamos las matrices
		 			for(var x=0; x<n;x++){
		 				for(var y=0; y<n;y++){
		 					for(var z=0; z<n;z++){
		 						encrypted[z]= (key[(y*n)+z]*message[(x*n)+z]);
		 						character+=encrypted[z]
		 					}
		 					//ponemos los valores de las operaciones en el text área ya con sus caracteres
		 					textoCifrado.value+=abecedario.value.charAt(character%27);
		 					character=0;
		 				}
		 			}
	 			}
	 			else{
	 				//el caso de que la clave y el texto sean de diferente longitud
	 				alert("La longitud de la clave y el texto claro deben coincidir");
	 			}
	 		}
	 	},
	 	limpiar: function(){
	 		//Es la programación para limpiar los text areas
	 		abecedario.value="";
	 		clave.value="";
	 		textoClaro.value="";
	 		textoCifrado.value="";
	 	}
	 }
});

var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.filter('inverteString', function(){
	return function (entrada) {
		entrada = entrada || '';
		saida   = '';

		for (var i = 0; i<entrada.length; i++) {
			saida = entrada.charAt(i) + saida;
		}

		return saida;
	}
});

MinhaLista.filter('chamadaComParametros', function(){
	return function (entrada, sufixo, minuscula) {
		entrada = entrada || '';
		saida   = '';

		for (var i = 0; i<entrada.length; i++) {
			saida = entrada.charAt(i) + saida;
		}

		if (sufixo) {
			saida+=sufixo
		}

		if (minuscula) {
			saida = saida.toLowerCase();
		}

		return saida;
	}
});

MinhaLista.controller('TarefasController', function($scope){
	
});
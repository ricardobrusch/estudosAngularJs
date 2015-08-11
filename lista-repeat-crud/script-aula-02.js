var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.controller('TarefasController', function($scope){
	$scope.log = 'ok.';

	$scope.tarefas = [
		{
			"nome" : "Ir Trabalhar",
			"prioridade" : "Mínima"
		},
		{
			"nome" : "Jogar Videogame",
			"prioridade" : "Máxima"
		},
	];

	$scope.adicionar = function(){
		var tarefa = {
			'nome' : $scope.nome,
			'prioridade' : $scope.prioridade
		}
	
		$scope.tarefas.push(tarefa);
	}

	$scope.delete = function(i){
		$scope.tarefas.splice(i, 1);
	}
});
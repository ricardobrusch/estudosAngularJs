var MinhaLista = angular.module('MinhaLista', []);

MinhaLista.controller('TarefasController', function($scope){
	$scope.log = 'ok.';

	$scope.tarefas = [
		{
			"nome" : "Duelar",
			"prioridade" : "3"
		},
		{
			"nome" : "Ir Trabalhar",
			"prioridade" : "4"
		},
		{
			"nome" : "Fazer Nada",
			"prioridade" : "1"
		},
		{
			"nome" : "Jogar Videogame",
			"prioridade" : "2"
		}
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

	// variáveis para apresentar novos filtros

	$scope.nomePersonagem  = "Geralt de Rivia";
	$scope.idadePersonagem = "97";
});
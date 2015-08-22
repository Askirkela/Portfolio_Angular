app.controller("expController", ['$scope', function($scope) {
	$scope.exps = [
		{
			title: "Stage qualité logicielle",
			date: "Mars-Août 2014",
			descr: "Stage réalisé chez " + "ADULLACT".link("http://www.adullact.org") + "<br />Mise à jour et création de tests unitaires (JUnit/PHPUnit)<br />Etude et mise en place d'outils et d'un processus de qualité logicielle (Jenkins et outils associés)<br />Rédaction de documentations destinées à un usage rapide des outils<br />["+ "Rapport".link("docs/SQA.pdf") +"] " + "Diapos".link("docs/SQA_diapos.pdf") +"]"
		},
		{
			title: "Encadrement de TP de C2i",
			date: "Septembre-Décembre 2013",
			descr: "Encadrement de groupes de TP, Corrections de devoirs à rendre"
		},
		{
			title: "Conférences ECSA/ECMA/ECOOP",
			date: "Juillet 2013",
			descr: "Accueil des chercheurs, Mise en place des salles, Renseignements"
		},
		{
			title: "Service Infomatique de l'Université de Montpellier 2",
			date: "Septembre-Novembre 2012",
			descr: "Accueil des étudiants, résolution de problèmes rencontrés par les étudiants"
		},
		{
			title: "Vice-secrétaire de l'association étudiante LICORNES",
			date: "Septembre 2010 - Septembre 2012, Université Montpellier 2",
			descr: "Organisation d'évènements<br />Gestion des ateliers"	
		}
	]
}]);
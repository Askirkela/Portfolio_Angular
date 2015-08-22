app.controller("projectsController", ['$scope', function($scope) {
	$scope.projects = [
		{
			name: "Application de géolocalisation",
			when: "Réalisé en M2",
			descr: "Application pour Android. Utilisation du framework Wikitude pour la réalité augmentée.<br /> Cette application permet d'afficher des points géolocailsés récupérés via un web service."
		},
		{
			name: "Etude de meta-modèle",
			when: "Réalisé en M2 en coopération avec Logica et La Poste",
			descr: "Etude du meta-modèle FAMIX et développement d'un outil permettant d'analyser un code source non-objet et d'en définir la structure en vue d'une ré-ingénierie. " + "[Diapos]".link("docs/famix_diapos.pdf")
		},
		{
			name: "Réalité augmentée",
			when: "Réalisé en M1",
			descr: "Développement d'un logiciel permettant de manipuler des éléments présents sur un écran via capture du mouvement des mains par webcam."
		}//,
/*		{
			name: "",
			when: "",
			descr: ""
		},
		{
			name: "",
			when: "",
			descr: ""
		}*/
	]
}]);
app.controller("freeTimeController", ['$scope', function($scope) {
	$scope.stuffs = [
		{
			title: "Traductions",
			descr: "Traductions effectuées pour " + 
					"Developpez.net".link("http://www.developpez.net") + 
					"<br />"+ 
					"Devriez-vous continuer à apprendre l'Objective-C ?".link("http://codewithchris.developpez.com/tutoriels/swift/debuter/apprendre-swift-a-partir-objective-c/devriez-vous-continuer-apprendre-objective-c/") + 
					"<br />" + 
					"Apprendre Swift à partir d'Objective-C (2)".link("http://codewithchris.developpez.com/tutoriels/swift/debuter/apprendre-swift-a-partir-objective-c/variable-classe-methode-propriete/")
		},
		{
			title: "Follower alerts",
			descr: "Petits travaux réalisés pour " + 
					"ProblemsIRL".link("http://www.twitch.tv/problemsirl") + 
					" en coopération avec Gromfallon.<br />Ces images sont prévues pour fonctionner avec les follower et subscriber alerts pour Open Broadcaster Software de " + 
					"NightDev".link("http://www.nightdev.com") + 
					"<br />" +
					'<img class="img" src="imgs/Followers.png" alt="Followers" title="Followers"><img class="img" src="imgs/Subs.png" alt="Subscribers" title="Subscribers"><img class="img" src="imgs/Donations.png" alt="Donations" title="Donations">'
		}
	]
}]);
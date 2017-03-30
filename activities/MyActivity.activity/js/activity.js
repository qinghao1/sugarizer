define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		var cellArr = [null, null, null, null, null, null, null, null, null];
		var players = ["O", "X"];
		var currPlayer = 0;
		var combinations = [
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]
		];

		function hit(i) {
				return cellArr[combinations[i][0]] 
				&& cellArr[combinations[i][1]]
				&& cellArr[combinations[i][2]]
				&& cellArr[combinations[i][0]] === cellArr[combinations[i][1]]
				&& cellArr[combinations[i][1]] === cellArr[combinations[i][2]];
		}

		function win() {
			for (var i = 0; i < 8; i++) {
				if (hit(i)) return true;
			}
			return false;
		}

		$(".cell").click(function() {
			if (!cellArr[this.id]) {
				cellArr[this.id] = players[currPlayer];
				$(this).html(players[currPlayer]);
				if (win()) $("#msg").html("Congrats! " + players[currPlayer] + " won!");
				currPlayer = 1 - currPlayer;
			}
		});

		$("#restart-button").click(function() {
			location.reload();
		});
	});

});

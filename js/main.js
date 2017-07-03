//Vars
var statsPoints = 5;

//scrollify
$(function() {
$.scrollify({
section : "section",
scrollSpeed: 900,
touchScroll:true,
});
});

//First screens
document.getElementById("btnNewGame").onclick = function(){
		$("#divHome").fadeOut("slow","linear");
		$("#divNewGame").fadeIn("slow","linear");
}

//NewGame Stats
//str add
document.getElementById("newGameStatsStrADD").onclick = function(){
	if (statsPoints > 0){
		if ( $("#strStatsCircle2").hasClass("fa-circle-o") ) {
			$("#strStatsCircle2").removeClass ("fa-circle-o");
			$("#strStatsCircle2").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#strStatsCircle3").hasClass("fa-circle-o") ) {
			$("#strStatsCircle3").removeClass ("fa-circle-o");
			$("#strStatsCircle3").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#strStatsCircle4").hasClass("fa-circle-o") ) {
			$("#strStatsCircle4").removeClass ("fa-circle-o");
			$("#strStatsCircle4").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#strStatsCircle5").hasClass("fa-circle-o") ) {
			$("#strStatsCircle5").removeClass ("fa-circle-o");
			$("#strStatsCircle5").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else {$("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}
//str remove
document.getElementById("newGameStatsStrREM").onclick = function(){
		if ( $("#strStatsCircle2").hasClass("fa-circle") && statsPoints < 6 ) {

		if ( $("#strStatsCircle5").hasClass("fa-circle") ) {
			$("#strStatsCircle5").removeClass ("fa-circle");
			$("#strStatsCircle5").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#strStatsCircle4").hasClass("fa-circle") ) {
			$("#strStatsCircle4").removeClass ("fa-circle");
			$("#strStatsCircle4").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#strStatsCircle3").hasClass("fa-circle") ) {
			$("#strStatsCircle3").removeClass ("fa-circle");
			$("#strStatsCircle3").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#strStatsCircle2").hasClass("fa-circle") ) {
			$("#strStatsCircle2").removeClass ("fa-circle");
			$("#strStatsCircle2").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}
	}
	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}

//dex add
document.getElementById("newGameStatsDexADD").onclick = function(){
	if (statsPoints > 0){
		if ( $("#dexStatsCircle2").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle2").removeClass ("fa-circle-o");
			$("#dexStatsCircle2").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle3").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle3").removeClass ("fa-circle-o");
			$("#dexStatsCircle3").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle4").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle4").removeClass ("fa-circle-o");
			$("#dexStatsCircle4").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#dexStatsCircle5").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle5").removeClass ("fa-circle-o");
			$("#dexStatsCircle5").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else {$("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}
//dex remove
document.getElementById("newGameStatsDexREM").onclick = function(){
		if ( $("#dexStatsCircle2").hasClass("fa-circle") && statsPoints < 6) {

		if ( $("#dexStatsCircle5").hasClass("fa-circle") ) {
			$("#dexStatsCircle5").removeClass ("fa-circle");
			$("#dexStatsCircle5").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle4").hasClass("fa-circle") ) {
			$("#dexStatsCircle4").removeClass ("fa-circle");
			$("#dexStatsCircle4").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle3").hasClass("fa-circle") ) {
			$("#dexStatsCircle3").removeClass ("fa-circle");
			$("#dexStatsCircle3").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#dexStatsCircle2").hasClass("fa-circle") ) {
			$("#dexStatsCircle2").removeClass ("fa-circle");
			$("#dexStatsCircle2").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}
	}
	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}

//int add
document.getElementById("newGameStatsIntADD").onclick = function(){
	if (statsPoints > 0){
		if ( $("#intStatsCircle2").hasClass("fa-circle-o") ) {
			$("#intStatsCircle2").removeClass ("fa-circle-o");
			$("#intStatsCircle2").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#intStatsCircle3").hasClass("fa-circle-o") ) {
			$("#intStatsCircle3").removeClass ("fa-circle-o");
			$("#intStatsCircle3").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#intStatsCircle4").hasClass("fa-circle-o") ) {
			$("#intStatsCircle4").removeClass ("fa-circle-o");
			$("#intStatsCircle4").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#intStatsCircle5").hasClass("fa-circle-o") ) {
			$("#intStatsCircle5").removeClass ("fa-circle-o");
			$("#intStatsCircle5").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else { $("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}
//int remove
document.getElementById("NewGameStatsIntREM").onclick = function(){
		if ( $("#intStatsCircle2").hasClass("fa-circle") && statsPoints < 6) {

		if ( $("#intStatsCircle5").hasClass("fa-circle") ) {
			$("#intStatsCircle5").removeClass ("fa-circle");
			$("#intStatsCircle5").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#intStatsCircle4").hasClass("fa-circle") ) {
			$("#intStatsCircle4").removeClass ("fa-circle");
			$("#intStatsCircle4").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#intStatsCircle3").hasClass("fa-circle") ) {
			$("#intStatsCircle3").removeClass ("fa-circle");
			$("#intStatsCircle3").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#intStatsCircle2").hasClass("fa-circle") ) {
			$("#intStatsCircle2").removeClass ("fa-circle");
			$("#intStatsCircle2").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}
	}
	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}
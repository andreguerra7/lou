//Vars
var statsPoints = 5;
var god = "none";

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
//New Game God
//life
document.getElementById("btnNewGameLife").onclick = function (){
	$("#btnGodLife").removeClass("btnGodNotSelected");
	$("#btnGodLife").addClass("btnGodSelected");
	$("#btnGodLife").css("color","#ffe884");
	god = "Life";
	$("#btnGodDeath, #btnGodOrder, #btnGodChaos, #btnGodWater, #btnGodAir, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//death
document.getElementById("btnNewGameDeath").onclick = function (){
	$("#btnGodDeath").removeClass("btnGodNotSelected");
	$("#btnGodDeath").addClass("btnGodSelected");
	$("#btnGodDeath").css("color","#381172");
	god = "Death";
	$("#btnGodLife, #btnGodOrder, #btnGodChaos, #btnGodWater, #btnGodAir, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//order
document.getElementById("btnNewGameOrder").onclick = function (){
	$("#btnGodOrder").removeClass("btnGodNotSelected");
	$("#btnGodOrder").addClass("btnGodSelected");
	$("#btnGodOrder").css("color","#b7a8bf");
	god = "Order";
	$("#btnGodLife, #btnGodDeath, #btnGodChaos, #btnGodWater, #btnGodAir, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//Chaos
document.getElementById("btnNewGameChaos").onclick = function (){
	$("#btnGodChaos").removeClass("btnGodNotSelected");
	$("#btnGodChaos").addClass("btnGodSelected");
	$("#btnGodChaos").css("color","#c41947");
	god = "Chaos";
	$("#btnGodLife, #btnGodOrder, #btnGodDeath, #btnGodWater, #btnGodAir, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//Water
document.getElementById("btnNewGameWater").onclick = function (){
	$("#btnGodWater").removeClass("btnGodNotSelected");
	$("#btnGodWater").addClass("btnGodSelected");
	$("#btnGodWater").css("color","#2a83f7");
	god = "Water";
	$("#btnGodLife, #btnGodOrder, #btnGodChaos, #btnGodDeath, #btnGodAir, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//Air
document.getElementById("btnNewGameAir").onclick = function (){
	$("#btnGodAir").removeClass("btnGodNotSelected");
	$("#btnGodAir").addClass("btnGodSelected");
	$("#btnGodAir").css("color","#b2f0ff");
	god = "Air";
	$("#btnGodLife, #btnGodOrder, #btnGodChaos, #btnGodWater, #btnGodDeath, #btnGodFire, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//Fire
document.getElementById("btnNewGameFire").onclick = function (){
	$("#btnGodFire").removeClass("btnGodNotSelected");
	$("#btnGodFire").addClass("btnGodSelected");
	$("#btnGodFire").css("color","#b70909");
	god = "Fire";
	$("#btnGodLife, #btnGodOrder, #btnGodChaos, #btnGodWater, #btnGodAir, #btnGodDeath, #btnGodEarth").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#btnGodEarth").attr("class","fa fa-2x fa-tree btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
}
//Earth
document.getElementById("btnNewGameEarth").onclick = function (){
	$("#btnGodEarth").removeClass("btnGodNotSelected");
	$("#btnGodEarth").addClass("btnGodSelected");
	$("#btnGodEarth").css("color","#42703c");
	god = "Earth";
	$("#btnGodLife, #btnGodOrder, #btnGodChaos, #btnGodWater, #btnGodAir, #btnGodFire, #btnGodDeath").css("color","white");
	$("#btnGodLife").attr("class","fa fa-2x fa-globe btnGodNotSelected");
	$("#btnGodOrder").attr("class","fa fa-2x fa-balance-scale btnGodNotSelected");
	$("#btnGodChaos").attr("class","fa fa-2x fa-certificate btnGodNotSelected");
	$("#btnGodWater").attr("class","fa fa-2x fa-tint btnGodNotSelected");
	$("#btnGodAir").attr("class","fa fa-2x fa-cloud btnGodNotSelected");
	$("#btnGodFire").attr("class","fa fa-2x fa-fire btnGodNotSelected");
	$("#btnGodDeath").attr("class","fa fa-2x fa-low-vision btnGodNotSelected");
	$("#divNewGameGodInfo").html("You've chosen: "+" "+god);
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
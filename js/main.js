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
		$.scrollify.instantPrevious();
		$.scrollify.instantPrevious();
		$.scrollify.disable();
}
//New Game God path
document.getElementById("divNewGameGodTab").onclick = function(){
	$("#divNewGameGod").fadeIn("slow","linear");
	$("#divNewGameStats").fadeOut("slow","linear");
}
//choose life
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
	$("#divGodDesc").html("The ones who tries to keep the mana balanced on the world <br></br> It gives you 2 addional status on wisdom and 1 one strenght");
}
//choose death
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
	$("#divGodDesc").html("The ones who tries to keep the mana all to them <br></br> It gives you 2 addional status on strenght and 1 one dexterity");
}
//choose order
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
//choose Chaos
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
//choose Water
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
//choose Air
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
//choose Fire
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
//choose Earth
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
document.getElementById("divNewGameStatsTab").onclick = function(){
	$("#divNewGameStats").fadeIn("slow","linear");
	$("#divNewGameGod").fadeOut("slow","linear");
}
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
		} else if ( $("#strStatsCircle6").hasClass("fa-circle-o") ) {
			$("#strStatsCircle6").removeClass ("fa-circle-o");
			$("#strStatsCircle6").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#strStatsCircle7").hasClass("fa-circle-o") ) {
			$("#strStatsCircle7").removeClass ("fa-circle-o");
			$("#strStatsCircle7").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else {$("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
	$("#divStatsDesc").html("Strenght <br></br> It gives you more Life, it's useful for blablabla");
}
//str remove
document.getElementById("newGameStatsStrREM").onclick = function(){
		if ( $("#strStatsCircle2").hasClass("fa-circle") && statsPoints < 8 ) {

		if ( $("#strStatsCircle7").hasClass("fa-circle") ) {
			$("#strStatsCircle7").removeClass ("fa-circle");
			$("#strStatsCircle7").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}  else if ( $("#strStatsCircle6").hasClass("fa-circle") ) {
			$("#strStatsCircle6").removeClass ("fa-circle");
			$("#strStatsCircle6").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}  else if ( $("#strStatsCircle5").hasClass("fa-circle") ) {
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
		}else if ( $("#dexStatsCircle6").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle6").removeClass ("fa-circle-o");
			$("#dexStatsCircle6").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle7").hasClass("fa-circle-o") ) {
			$("#dexStatsCircle7").removeClass ("fa-circle-o");
			$("#dexStatsCircle7").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		}  else {$("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
	$("#divStatsDesc").html("Dexterity <br></br> It gives you more....dexterity, it's useful for blablabla");
}
//dex remove
document.getElementById("newGameStatsDexREM").onclick = function(){
		if ( $("#dexStatsCircle2").hasClass("fa-circle") && statsPoints < 7) {

		if ( $("#dexStatsCircle7").hasClass("fa-circle") ) {
			$("#dexStatsCircle7").removeClass ("fa-circle");
			$("#dexStatsCircle7").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}   else if ( $("#dexStatsCircle6").hasClass("fa-circle") ) {
			$("#dexStatsCircle6").removeClass ("fa-circle");
			$("#dexStatsCircle6").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#dexStatsCircle5").hasClass("fa-circle") ) {
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

//Wis add
document.getElementById("newGameStatsWisADD").onclick = function(){
	if (statsPoints > 0){
		if ( $("#wisStatsCircle2").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle2").removeClass ("fa-circle-o");
			$("#wisStatsCircle2").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle3").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle3").removeClass ("fa-circle-o");
			$("#wisStatsCircle3").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle4").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle4").removeClass ("fa-circle-o");
			$("#wisStatsCircle4").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#wisStatsCircle5").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle5").removeClass ("fa-circle-o");
			$("#wisStatsCircle5").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle6").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle6").removeClass ("fa-circle-o");
			$("#wisStatsCircle6").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle7").hasClass("fa-circle-o") ) {
			$("#wisStatsCircle7").removeClass ("fa-circle-o");
			$("#wisStatsCircle7").addClass ("fa-circle");
			statsPoints = statsPoints - 1;
			$("#divNewGameStatsInfo").html(" ");
		} else { $("#divNewGameStatsInfo").html("Maximun reached");}


	} else { $("#divNewGameStatsInfo").html("You don't have enought points"); }

	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
	$("#divStatsDesc").html("Wisdom <br></br> It gives you more wisdom, it's useful for blablabla");
}
//wis remove
document.getElementById("NewGameStatsWisREM").onclick = function(){
		if ( $("#wisStatsCircle2").hasClass("fa-circle") && statsPoints < 7) {

		if ( $("#wisStatsCircle7").hasClass("fa-circle") ) {
			$("#wisStatsCircle7").removeClass ("fa-circle");
			$("#wisStatsCircle7").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}else if ( $("#wisStatsCircle6").hasClass("fa-circle") ) {
			$("#wisStatsCircle6").removeClass ("fa-circle");
			$("#wisStatsCircle6").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle5").hasClass("fa-circle") ) {
			$("#wisStatsCircle5").removeClass ("fa-circle");
			$("#wisStatsCircle5").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}  else if ( $("#wisStatsCircle4").hasClass("fa-circle") ) {
			$("#wisStatsCircle4").removeClass ("fa-circle");
			$("#wisStatsCircle4").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} else if ( $("#wisStatsCircle3").hasClass("fa-circle") ) {
			$("#wisStatsCircle3").removeClass ("fa-circle");
			$("#wisStatsCircle3").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		} 
		else if ( $("#wisStatsCircle2").hasClass("fa-circle") ) {
			$("#wisStatsCircle2").removeClass ("fa-circle");
			$("#wisStatsCircle2").addClass ("fa-circle-o");
			statsPoints = statsPoints + 1;
			$("#divNewGameStatsInfo").html(" ");
		}
	}
	$("#divPointsLeft").html(statsPoints +" "+"points remaining");
}

//Change race description
document.getElementById("selectRaceHuman").onclick = function(){
	$("#divRaceDesc").html("Humans <br></br> Gives you nothing, loose nothing, human...");
}
document.getElementById("selectRaceElf").onclick = function(){
	$("#divRaceDesc").html("Elf <br></br> You're tall and have pointing ears, great");
}
document.getElementById("selectRaceDawrf").onclick = function(){
	$("#divRaceDesc").html("Flying Healer Dawrf <br></br> the name says it all");
}
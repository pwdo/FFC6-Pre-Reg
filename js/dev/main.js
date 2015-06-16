$(document).ready(function() {
	var evil = $("section.evil"),
		eWidth = evil.width(),
		eHeight = evil.height();

	var oWidth = 347,
		oHeight = 209;

	var svg = '<svg width="'+eWidth+'px" height="'+eHeight+'px">
			  <g id="bad-circle" stroke="#ffc200" stroke-width="8" fill="none">
			    <path d="M'+(46.0012589/oWidth)*eWidth+','+(7.15829263/oHeight)*eHeight+' C'+(15.4633977/oWidth)*eWidth+','+(36.7902824/oHeight)*eHeight+' '+(-3.2671847/oWidth)*eWidth+','+(146.478782/oHeight)*eHeight+' '+(63.1133828/oWidth)*eWidth+','+(181.242657/oHeight)*eHeight+' C'+(129.49395/oWidth)*eWidth+','+(209/oHeight)*eHeight+' '+(243.900034/oWidth)*eWidth+','+(209/oHeight)*eHeight+' '+(291.215893/oWidth)*eWidth+','+(191.058893/oHeight)*eHeight+' C'+(320.404362/oWidth)*eWidth+','+(175.202724/oHeight)*eHeight+' '+(338.519322/oWidth)*eWidth+','+(150.663678/oHeight)*eHeight+' '+(341.339752/oWidth)*eWidth+','+(120.649337/oHeight)*eHeight+' C'+(345.648234/oWidth)*eWidth+','+(74.7994923/oHeight)*eHeight+' '+(329.082477/oWidth)*eWidth+','+(49.5228347/oHeight)*eHeight+' '+(285.396529/oWidth)*eWidth+','+(29.1557606/oHeight)*eHeight+' C'+(205.817168/oWidth)*eWidth+','+(-7.94538559/oHeight)*eHeight+' '+(58.8641827/oWidth)*eWidth+','+(-4.88639768/oHeight)*eHeight+' '+(2.61230458/oWidth)*eWidth+','+(70.983336/oHeight)*eHeight+'" id="Path-31"></path>
			  </g>
			</svg>'

	// var svg = '<svg width="347px" height="209px">
	// 		  <g id="bad-circle" stroke="#E60404" stroke-width="5" fill="none">
	// 		    <path d="M46.0012589,7.15829263 C15.4633977,36.7902824 -3.2671847,146.478782 63.1133828,181.242657 C129.49395,216.006533 243.900034,216.762476 291.215893,191.058893 C320.404362,175.202724 338.519322,150.663678 341.339752,120.649337 C345.648234,74.7994923 329.082477,49.5228347 285.396529,29.1557606 C205.817168,-7.94538559 58.8641827,-4.88639768 2.61230458,70.983336" id="Path-31"></path>
	// 		  </g>
	// 		</svg>'

	evil.prepend(svg);

	var evilSvg = $("section.evil svg");

	evilSvg.click(function(){
		evilSvg.attr("class", "fix");
		setInterval(function() {
			$("section.evil h1").addClass("fix");
		},300);
		setInterval(function() {
			$("section.evil .color").addClass("fix");
		},1100);
		setInterval(function() {
			$("body").addClass("fix")
		},1900);
	});
});
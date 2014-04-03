
window.onload = function()
{
	var direccion = 0;
	var caminar = false;
	var pasos = ["s1", "s2", "s3", "s4", "s5","s6","s7","s8","s9","s10","s11","s12","s13","s14","s15","s16","s17","s18","s19","s20"];
	var direcciones = ["left", "top", "right", "front"];
	
	var paso = 1;

	setInterval(function()
	{
		if(caminar)
		{  
			nom_div("sprite").setAttribute("class", "caminar " + pasos[paso] );
			
			paso++;

			if(paso  >= 20)
			{
				paso = 1;
			}
			var posX = parseInt(nom_div("sprite").style.left);
			var posY = parseInt(nom_div("sprite").style.top);
			switch(direccion)
			{
				case 0: posX -= 10; break;
				case 1: posY -= 10; break;
				case 2: posX += 10; break;
				case 3: posY += 10; break;
			}
			if((posX >= 0 && posX <= 300) && (posY >= 0 && posY <= 168))
			{
				nom_div("sprite").style.left = posX + "px";
				nom_div("sprite").style.top = posY + "px";
			}

		} 


	}, 80);



	window.onkeydown = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		console.log(e.keyCode);
		if(caminar == false)
		{
			if(code >= 37 && code <= 40)
			{
				direccion = code - 37;
				
				caminar = true;
			}
		}
	}
	window.onkeyup = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(caminar == true)
		{
			if(code >= 37 && code <= 40)
			{			
				direccion = code - 37;
				nom_div("sprite").setAttribute("class", "caminar " + pasos[paso] );
				console.log("Suelta: " + code);
				caminar = false;
			}
		}
	}
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
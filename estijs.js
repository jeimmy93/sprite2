window.onload = function()
{
	//alert("Hola Sprites");	

	
	var pasos = ["s1", "s2", "s3", "s4", "s5","s6","s7","s8","s9","s10","s11","s12","s13","s14","s15","s16","s17","s18","s19","s20"];
	var num_camina = 1;
	var camina = false;
	
	var cont = 0;

	
	
		
		setInterval(function()
	{
		if(!camina)
		{

			cont++;
			nom_div("sprite").setAttribute("class", "caminar " + pasos[num_camina - 1]);
			num_camina++;
			if(num_camina >= 20)
			{
				num_camina = 1;
			}


			


				cont = 0;
			//}
		}
		

	}, 150);


	
	
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
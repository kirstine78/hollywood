// JavaScript Document

/*to close app*/
function quitApplication()
{
	if (navigator.app)
	{
		if(confirm("Exit?"))
		{
			navigator.app.exitApp();
		}
	}
	else if (navigator.device)
	{
		if(confirm("Exit?"))
		{
			navigator.device.exitApp();		
		}
	}
}

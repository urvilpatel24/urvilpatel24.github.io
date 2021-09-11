function apicall(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("message").value;
	
	var htp = new XMLHttpRequest();
	htp.onreadystatechange = function(){
		if(htp.readyState == 4)
		{
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			document.getElementById("apiReplay").innerHTML = '<center><br><b style="color:red;">Something went wrong !!! Please send me an email at urvilpatel2324@gmail.com</b></center>';
		}
	}
	htp.open("post","http://uaccounting.tk/mailerapi?msg="+msg+"&name="+name+"&email="+email,true);
	htp.send();
}
	

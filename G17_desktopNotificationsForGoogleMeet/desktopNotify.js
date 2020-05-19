/*
	Hope this works...
*/
if(!window.Notification)
{
	alert("Your browser won't support desktop notifications");
}
else
{
	if(Notification.permission!='granted')
	{
		alert("Allow notifications");
		Notification.requestPermission()
	}
	if(Notification.permission=="granted")
	{
		var notify=new Notification("Desktop notications enabled")
		setTimeout(()=>{notify.close()},4000);
		var x=document.getElementsByClassName('oIy2qc').length;
		setInterval(()=>{
		  var y=document.getElementsByClassName('oIy2qc');
		  if(y.length-x>0){
		      var person=y[y.length-1].parentElement.parentElement.children[0].children[0].firstChild.data
		      if(person!="You")
		      {
		        var notify=new Notification(person,{
		          body:y[y.length-1].childNodes[0].data
		        })
		        setTimeout(()=>{notify.close()},4000)
		      }
		      x=y.length;
		  }
		},10)
	}
}
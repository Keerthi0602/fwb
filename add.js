var currentNode; 
var idcount=0;
$(document).ready(function(){
   		$('.modal').modal();
  		});
function check()
{
	if(document.getElementById('userate').checked==true)
	{
		document.getElementById("useratetxt").disabled=false;
		document.getElementById("minimum").disabled=false;
		document.getElementById("weight").disabled=false;
		document.getElementById("amount").value=0;
		document.getElementById("amount").disabled=true;
	}
	if(document.getElementById('userate').checked==false)
	{
		document.getElementById("useratetxt").disabled=true;
		document.getElementById("minimum").disabled=true;
		document.getElementById("weight").disabled=true;
		document.getElementById("amount").disabled=false;
		document.getElementById("amount").value="";
		
	}
}

function add()
{
	var newnod=document.createElement("tr");
	var newNode1 = createNewNode(document.getElementById( "description" ).value);
	var newNode2 = createNewNode(document.getElementById( "amount" ).value);
	var newNode3 = createNewNode(document.getElementById( "due" ).value);
	currentNode= document.getElementById( "update" );
	newnod.appendChild(newNode1);
	newnod.appendChild(newNode2);
	newnod.appendChild(newNode3);
	currentNode.appendChild(newnod);
}
function createNewNode( text )
 {
	var newNode = document.createElement( "td" ); 
	nodeId = "new" + idcount;
	++idcount;
	newNode.setAttribute( "id", nodeId );
	newNode.setAttribute( "style", "padding-left:50px;" );
	newNode.appendChild( document.createTextNode( text ) );
	return newNode;
 }
 $(document).ready(function(){
    $('.datepicker').datepicker();
  });
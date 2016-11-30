window.onload=Manejarclick;

var control=true;
var cifra0=" ";

function Manejarclick()
{
	var cero=document.getElementById("N0");
	cero.addEventListener("click", function()
									{
										clicEn("0");
									}
						);
	var uno=document.getElementById("N1");
	uno.addEventListener("click", function()
									{
										clicEn("1");
									}
						);
	var dos=document.getElementById("N2");
	dos.addEventListener("click", function()
									{
										clicEn("2");
									}
						);
	var tres=document.getElementById("N3");
	tres.addEventListener("click", function()
									{
										clicEn("3");
									}
						);
	var cuatro=document.getElementById("N4");
	cuatro.addEventListener("click", function()
									{
										clicEn("4");
									}
						);
	var cinco=document.getElementById("N5");
	cinco.addEventListener("click", function()
									{
										clicEn("5");
									}
						);
	var seis=document.getElementById("N6");
	seis.addEventListener("click", function()
									{
										clicEn("6");
									}
						);
	var siete=document.getElementById("N7");
	siete.addEventListener("click", function()
									{
										clicEn("7");
									}
						);
	var ocho=document.getElementById("N8");
	ocho.addEventListener("click", function()
									{
										clicEn("8");
									}
						);
	var nueve=document.getElementById("N9");
	nueve.addEventListener("click", function()
									{
										clicEn("9");
									}
						);
	var ssum=document.getElementById("SSUM");
	ssum.addEventListener("click", function()
									{
										clicEn("+");
									}
						);
	var sres=document.getElementById("SRES");
	sres.addEventListener("click", function()
									{
										clicEn("-");
									}
						);
	var smul=document.getElementById("SMUL");
	smul.addEventListener("click", function()
									{
										clicEn("*");
									}
						);
	var sdiv=document.getElementById("SDIV");
	sdiv.addEventListener("click", function()
									{
										clicEn("/");
									}
						);
	var sigu=document.getElementById("SIGU");
	sigu.addEventListener("click",ress);
	
	var cl=document.getElementById("CL");
	cl.addEventListener("click", borrar);

	var dlt=document.getElementById("S");
	dlt.addEventListener("click",dele);
}
function clicEn(num)
{
	cifra0 +=num;
	var pant=document.getElementById("pantalla");
	pant.textContent=cifra0;
}
function ress()
{
	var rta=eval(cifra0);
	var pant=document.getElementById("pantalla");
	pant.textContent=rta;
}
function borrar()
{
	cifra0="";
	var del=("");
	var pant=document.getElementById("pantalla");
	pant.textContent=del;
}
function dele()
{
	var pant=document.getElementById("pantalla");
	var delet=cifra0.slice(0,-1);
	cifra0=delet;
	pant.textContent=delet;
}
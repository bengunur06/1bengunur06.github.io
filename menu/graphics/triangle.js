var gl;
var points;

window.onload =function init(){
	var canvas=document.getElementById("gl_canvas");
	gl =canvas.getContext("webgl");
	if(!gl) {alert("WebGL isn't available" );}

	var vertices=new Float32Array([ -1 ,0,0.5,1,0.8,-1]);

	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0,1.0,1.0,1.0);


	var vertShdr;
	var fragShdr;

	var vertElem=document.getElementById("vertex-shader");
	if(!vertElem) 
	{
	alert("unable to load the vertex shader");
	return -1
	}
	else {
		vertShdr=gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertShdr,vertElem.text);
		gl.compileShader(vertShdr);
		if(

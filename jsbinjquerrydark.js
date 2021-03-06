const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml"
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"css"
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript"
});

document.querySelector("#run-btn").addEventListener("click",function(){
	let htmlCode = htmlEditor.getValue();
	let cssCode = "<style>html{color : red;}" + cssEditor.getValue() + "</style>";
	//console.log(cssEditor.getValue());
	// if( document.getElementById('theme').href=="http://localhost:3000/dark.css"){
	// 	 cssCode = "<style>html{color : w;}" + cssEditor.getValue() + "</style>";
	// }

	let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
	let previewWindow = document.querySelector("#preview-window").contentWindow.document;
	previewWindow.open();
	previewWindow.write(htmlCode+cssCode+jsCode);
	previewWindow.close();
});


document.getElementById('switch').onclick = function() {
    if (document.getElementById('theme').href == "http://127.0.0.1:5500/dark.css") {
      document.getElementById('theme').href = "style.css";
      document.getElementById('theme1').href = "Codemirrorlight.css";
      document.getElementById('theme2').href = "jsbinjqerry.js";
    } else {
      document.getElementById('theme').href = "dark.css";
      document.getElementById('theme1').href = "Codemirror.css";
      document.getElementById('theme2').href = "jsbinjquerrydark.js";
    }
  };
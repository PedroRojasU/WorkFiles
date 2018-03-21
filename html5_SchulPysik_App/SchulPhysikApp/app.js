// JavaScript code for the BLE Scan example app.
// The code is inside a closure to avoid polluting the global scope.
;(function()
{

// Dictionary of found devices.
//var devices = {}

// Timer that updates the displayed list of devices.
//var updateTimer = null

function main()
{
  try {
    
    readDisplayXML();

  } catch (e) {
    //alert("catch--> " + e.message);
    document.getElementById("result").value=e.message;    
  }
}

function readDisplayXML() {
  try {
    
// probar este codigo
//http://www.dummies.com/web-design-development/html/how-to-load-xml-with-javascript-on-an-html5-page/

    try{
      xmlhttp=new XMLHttpRequest();
    } catch (e){
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET","intro.xml",false);
    xmlhttp.send();

    var xmlDoc = new DOMParser().parseFromString(xmlhttp.responseText,'text/xml');
    console.log(xmlDoc);
    //document.write("<table border='1'>");
    
    var x=xmlDoc.getElementsByTagName("instruction");
    //var step = x[0].getElementsByTagName("step")[0].firstChild.data;

    for (var i=0; i<x[0].children.length; i++) {                  
      var step = x[0].getElementsByTagName("step")[i].firstChild.data;

      document.write("<tr>");
      document.write("<td>" + i + ".</td>");
      document.write("<td>" + step + "</td>");
      document.write("</tr>");
    }


    } catch (e) {
      //alert("catch--> " + e.message);
      document.getElementById("result").value=e.message;    
    }
}



main()

})();

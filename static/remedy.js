


function doClear(){
	window.location.reload();
}

 var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(document).ready(function() {

        $(function() { $("#divResize0").draggable().resizable(); });
		$(function() { $("#divResize1").draggable().resizable(); });
		$(function() { $("#divResize2").draggable().resizable(); });
		$(function() { $("#divResize3").draggable().resizable(); });
		$(function() { $("#divResize4").draggable().resizable(); });

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('#btClickMe').click(function() {

            var dynamic_div = $(document.createElement('div')).css({
                border: '5px dashed', position: 'absolute', left: element_pos, 
                top: $('#divContainer').height() + 20,
                width: '200', height: '200', padding: '3', margin: '0'
            });

            element_pos = element_pos + $('#divContainer').width() + 20;

            $(dynamic_div).append('You can drag me too');
            
            // APPEND THE NEWLY CREATED DIV TO "divContainer".
            $(dynamic_div).appendTo('#divContainer').draggable();

            iCnt = iCnt + 1;
        });
  

function displayResults(data){
var pythonRestResponseJson = '{{=jsonArray}}';
var responseArray = [];
responseArray.push(pythonRestResponseJson);
var mydiv = document.getElementById("divResize0");
responseArray.forEach(function(item, index) {
	for( var i = 0; i < item.length; i++ ){
      var inc = item[i].INCIDENT_NUMBER;
	  var cat = item[i].Product_Tier3;
	  var summary = item[i].SUMMARY;
      var html = "";
	  var arrayHref = document.createElement('a');
	  arrayHref.setAttribute('style', 'white-space: pre-wrap;');
	  arrayHref.innerHTML=arrayHref[item];
      arrayHref.setAttribute('href',"yourlink.htm");
      arrayHref.innerText = "\n"+inc +" \n"+ cat+ " \n"+summary+"\n";
	  mydiv.appendChild(arrayHref);
	  }
    });

}
});	
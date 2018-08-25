var isStop = false;
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-start").addEventListener("click", function(){

		var interval_time = 2000;
		if (document.getElementById("interval").value != "") {
			interval_time = document.getElementById("interval").value
		}
		var start_index = 1;
		if (document.getElementById("start_index").value != "") {
			start_index = document.getElementById("start_index").value
		}

		document.getElementById("button-stop").disabled = "";
		document.getElementById("button-start").disabled = "disabled";
	    var count = start_index;
		var interval_id = setInterval(function() {
		    var url = "https://pairs.lv/#/search/one/" + count;
		    chrome.tabs.update(null, {url: url});
		    console.log(count++);
		    if(count > 100000000 || isStop == true) {
		      clearInterval(interval_id);
		      alert("終了しました");
		      document.getElementById("button-start").disabled = "";
		    }
		}, interval_time);

	});
	document.getElementById("button-stop").addEventListener("click", function(){
		isStop = true;
		document.getElementById("button-stop").disabled = "disabled";
	});
});
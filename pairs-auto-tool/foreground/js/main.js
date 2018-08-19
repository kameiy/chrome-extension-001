var isStop = false;
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-start").addEventListener("click", function(){

		document.getElementById("button-stop").disabled = "";
		document.getElementById("button-start").disabled = "disabled";
	    var count = 0;
		var interval_id = setInterval(function() {
		    console.log(count++);
		    var url = "https://pairs.lv/#/search/one/" + count;
		    chrome.tabs.update(null, {url: url});
		    if(count > 100000000 || isStop == true) {
		      clearInterval(interval_id);
		      alert("終了しました");
		      document.getElementById("button-start").disabled = "";
		    }
		}, 2000);

	});
	document.getElementById("button-stop").addEventListener("click", function(){
		isStop = true;
		document.getElementById("button-stop").disabled = "disabled";
	});
});
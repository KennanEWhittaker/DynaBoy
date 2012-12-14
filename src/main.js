(function(dynaboy){

	dynaboy.load = function() {
		var $input = $("#fileInput");
		$input.val('');
		$input.click();
	};
	dynaboy.loadFile = function(){
		var input = document.getElementById("fileInput");
		if (input && input.files.length > 0) {
			var file = input.files[0];
			var name = file.fileName;
			var size = file.fileSize;
			var read = new FileReader();

			read.onerror = function(e) {
				dynaboy.warn('Error loading file: ' + name);
			};
			read.onload = function (e) {
				loadRom(e.target.result);
				
			}
			read.readAsArrayBuffer(file);
		}
	};

	function loadRom(arrayBuffer) {
		console.log("loaded!");
	}

}(window.dynaboy = window.dynaboy || {}));
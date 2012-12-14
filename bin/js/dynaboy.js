(function(dynaboy){

	//Load the hidden file dialog
	dynaboy.load = function() {
		var $input = $("#fileInput");
		//reset value to nil, in case ROM is reloaded
		$input.val('');
		$input.click();
	};

	//Load file and read as `ArrayBuffer`
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

	//Load ArrayBuffer as ROM
	function loadRom(arrayBuffer) {
		console.log("loaded!");
	}

}(window.dynaboy = window.dynaboy || {}));

//Z80 Game Boy CPU
//================
//The Z80 is an 8-bit chip, so all workings operate on one byte at a time.
//The memory interface is a 16-bit address bus.
//Programs are accessed through the same address bus as normal memory.
//An instruction can be anywhere from one to three bytes;
(function(dynaboy){

	//CPU Generator function
	function CPU() {
		//The Gameboy has two types of clocks: m & t
		this.clock = {
			m: 0,
			t: 0
		};
		//The Program Counter is initialized to 0
		this.pc = 0;
	}

	//Expose the CPU
	var cpu = new CPU();
	dynaboy.cpu = cpu;

}(window.dynaboy = window.dynaboy || {}));


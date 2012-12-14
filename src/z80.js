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
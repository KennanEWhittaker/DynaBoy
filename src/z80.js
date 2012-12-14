(function(dynaboy){

	function CPU() {
		this.clock = {
			m: 0,
			t: 0
		};
		this.pc = 0;
	}
	var cpu = new CPU();
	dynaboy.cpu = cpu;

}(window.dynaboy = window.dynaboy || {}));
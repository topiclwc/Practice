//helper
({
	handleCalculate : function(component, event) {
		var fnumber = parseInt(component.get("v.fNumber"));
		var lnumber = parseInt(component.get("v.lNumber"));
		var result = fnumber + lnumber;
		component.set("v.result", result);
	}
})
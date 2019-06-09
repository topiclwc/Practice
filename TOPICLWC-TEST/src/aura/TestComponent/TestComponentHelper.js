//helper
({
	handleCalculate : function(component, event) {
		var fnumber = parseInt(component.get("v.fNumber"));
		var lnumber = parseInt(component.get("v.lNumber"));
		var calculateResult = component.get("c.getCalculateResult");
		calculateResult.setParams({"fnum":fnumber, "lnum": lnumber});
		
		//setCallback
		calculateResult.setCallback(this, function(response){
			var addResult = response.getReturnValue();
			//alert(addResult);
            component.set("v.result",addResult);
		});
		
		//enqueueAction 
		$A.enqueueAction(calculateResult);
 

	}
})
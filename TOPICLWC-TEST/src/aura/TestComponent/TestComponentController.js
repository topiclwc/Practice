// Controller
({
	handleCalculate : function(component, event, helper) {
		var fnum = parseInt(component.find("fnum_id").get("v.value"));
       	var snum = parseInt(component.find("snum_id").get("v.value"));
        var result = fnum + snum;
        component.find("rnum_id").set("v.value",result);
	}
})
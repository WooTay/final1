$(document).ready(function(){

	var nutritionType = {
	
		"1":"calories",
		"2":"total fat",
		"6":"carbohydrates",
		"8":"protein",
		"5":"sodium"
	
	};

	var dataUrl = "http://www.mcdonalds.com/getnutrition/US_Menu.xml";
	$.get(dataUrl,function (data, status) {
	

	
		var menuJson = $.xml2json(data)
		console.log(menuJson);
		
		setTimeout(function(){
		
		

			$(".product_item").each(function(index, productItem){
		

			
				$(productItem).hover(function(){

					var productName = $(productItem).find("center").text();
					
					$(menuJson.products.product).each(function(index, menuItem){
					
						if(menuItem.name === productName) {
							console.log(index);
							
							var productData = menuJson.products.product[index];
							
							var rawNutritionData = productData.nutritionals.nutrition;
							
							var nutritionalData = {};
							
							$(rawNutritionData).each(function(index, currentNutritionalData){
								if(currentNutritionalData.type == "1") {
									nutritionalData.calories = currentNutritionalData.value;
								}
							});
							
							console.log(nutritionalData);

							/* 							
							if((nutritionalData.calories > 300) && (nutritionalData.calories < 600)) {
								//do ridiculous stuff
							}
							*/
						}
					
					});
					
				});

		
			});
			
			console.log("timeout fired");
			
		},1500);
	
	});
	
// (function( window, undefined ) {
// 
// var pluginName = 'defaultPluginName',
//         defaults = {
//             propertyName: "value"
//             
//             
//             
            
            
            
            
            //attempt to change text in Hover Information
            //text should be same style,color,(size?) as original (put in css?)
            //(daily value) should be changed to (symptoms include) 
            
            /*Calories: 0 |15-300| 310-500 |510-1090| 
            if calories are ===0 then " Low Self-Esteem ", 
            else if calories are b/t 15-300 " Muscle Cramps or Spasms", 
            else if calories are b/t 310-500 " Nausea or Vomiting",
            else if calories are b/t 510-1090 " Heart Attack " */
            
            /*Protein(g): 0 |1-15| 16-30 |31-48|
            if Protein is ===0 then " Low Self-Esteem ", 
            else if Protein is b/t 1-15(g) " Muscle Cramps or Spasms", 
            else if Protein is b/t 16-30(g) " Nausea or Vomiting",
            else if Protein is b/t 31-48(g) " Heart Attack " */
            
            /*Total Fat(g): 0 |0.5-13| 14-31 |32-56|
            if Total Fat is ===0 then " Low Self-Esteem ", 
            else if Total Fat is b/t 0.5-13(g) " Muscle Cramps or Spasms", 
            else if Total Fat is b/t 14-31(g) " Nausea or Vomiting",
            else if Total Fat is b/t 32-56(g) " Heart Attack " */
            
            /*Total Carb(g): 0 |4-30| 31-60 |61-111|
            if Total Carb is ===0 then " Low Self-Esteem ", 
            else if Total Carb is b/t 4-30(g) " Muscle Cramps or Spasms", 
            else if Total Carb is b/t 31-60(g) " Nausea or Vomiting",
            else if Total Carb is b/t 61-111(g) " Heart Attack " */
            
            /*Sodium(mg): 0 |10-240| 280-990 |1030-2150| 
            if Sodium is ===0 then " Low Self-Esteem ", 
            else if Sodium is b/t 10-240(g) " Muscle Cramps or Spasms", 
            else if Sodium is b/t 280-990(g) " Nausea or Vomiting",
            else if Sodium is b/t 1030-2150(g) " Heart Attack " */
            	
	
});

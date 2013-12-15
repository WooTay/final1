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

							 /*if(nutritionalData.calories === 0) {
								$(nutritionalData.name).replaceWith("Testing1");
								
								} else if (nutritionalData.calories > 15) && (nutritionalData.calories < 300) {
            					  			$(nutritionalData.name).replaceWith("Testing2");
            					  
            							} else if (nutritionalData.calories > 310) && (nutritionalData.calories < 500) {
            					  			$(nutritionalData.name).replaceWith("Testing3");
            					  
            							} else if (nutritionalData.calories > 510) && (nutritionalData.calories < 1090) {
            					  			$(nutritionalData.name).replaceWith("Testing4");*/
            					  
            					  
							 /*if(nutritionalData.protein === 0) {
								$(nutritionalData.name).replaceWith("Testing5");
								
								} else if (nutritionalData.protein > 1) && (nutritionalData.calories < 15) {
            					  			$(nutritionalData.name).replaceWith("Testing5");
            					  
            							} else if (nutritionalData.protein > 16) && (nutritionalData.calories < 30) {
            					  			$(nutritionalData.name).replaceWith("Testing7");
            					  
            							} else if (nutritionalData.protein > 31) && (nutritionalData.calories < 48) {
            					  			$(nutritionalData.name).replaceWith("Testing8");*/
            					  
            					  
            						/*if(nutritionalData.totalFat === 0) {
								$(nutritionalData.name).replaceWith("Testing9");
								
								} else if (nutritionalData.totalFat > 0.5) && (nutritionalData.calories < 15) {
            								$(nutritionalData.name).replaceWith("Testing10");
            					  
            							} else if (nutritionalData.totalFat > 14) && (nutritionalData.calories < 31) {
            					  			$(nutritionalData.name).replaceWith("Testing11");
            					  
            							} else if (nutritionalData.totalFat > 32) && (nutritionalData.calories < 56) {
            					  			$(nutritionalData.name).replaceWith("Testing12");*/
								
								
							/*if(nutritionalData.sodium === 0) {
								$(nutritionalData.name).replaceWith("Testing13");
								
								} else if (nutritionalData.sodium > 4) && (nutritionalData.calories < 30) {
            					  			$(nutritionalData.name).replaceWith("Testing14");
            					  
            							} else if (nutritionalData.sodium > 31) && (nutritionalData.calories < 60) {
            					  			$(nutritionalData.name).replaceWith("Testing15");
            					  
            							} else if (nutritionalData.sodium > 61) && (nutritionalData.calories < 111) {
            					  			$(nutritionalData.name).replaceWith("Testing16");*/
								 
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

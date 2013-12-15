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

							 if(nutritionalData.calories === 0) {
								$(nutritionalData.name).replaceWith("Testing1");
								
								} else if (nutritionalData.calories > 15) && (nutritionalData.calories < 300) {
            					  		$(nutritionalData.name).replaceWith("Testing2");
            					  
            							} else if (nutritionalData.calories > 310) && (nutritionalData.calories < 500) {
            					  		$(nutritionalData.name).replaceWith("Testing3");
            					  
            							} else if (nutritionalData.calories > 510) && (nutritionalData.calories < 1090) {
            					  		$(nutritionalData.name).replaceWith("Testing4");
            							}
            					  
							 if(nutritionalData.protein === 0) {
								$(nutritionalData.name).replaceWith("Testing5");
								
								} else if (nutritionalData.protein > 1) && (nutritionalData.calories < 15) {
            					  		$(nutritionalData.name).replaceWith("Testing5");
            					  
            							} else if (nutritionalData.protein > 16) && (nutritionalData.calories < 30) {
            					  		$(nutritionalData.name).replaceWith("Testing7");
            					  
            							} else if (nutritionalData.protein > 31) && (nutritionalData.calories < 48) {
            					  		$(nutritionalData.name).replaceWith("Testing8");
            							}
            					  
            						if(nutritionalData.totalFat === 0) {
								$(nutritionalData.name).replaceWith("Testing9");
								
								} else if (nutritionalData.totalFat > 0.5) && (nutritionalData.calories < 15) {
            							$(nutritionalData.name).replaceWith("Testing10");
            					  
            							} else if (nutritionalData.totalFat > 14) && (nutritionalData.calories < 31) {
            					  		$(nutritionalData.name).replaceWith("Testing11");
            					  
            							} else if (nutritionalData.totalFat > 32) && (nutritionalData.calories < 56) {
            					  		$(nutritionalData.name).replaceWith("Testing12");
            							}
								
							if(nutritionalData.sodium === 0) {
								$(nutritionalData.name).replaceWith("Testing13");
								
								} else if (nutritionalData.sodium > 4) && (nutritionalData.calories < 30) {
            					  		(nutritionalData.name).replaceWith("Testing14");
            					  
            							} else if (nutritionalData.sodium > 31) && (nutritionalData.calories < 60) {
            					  		$(nutritionalData.name).replaceWith("Testing15");
            					  
            							} else if (nutritionalData.sodium > 61) && (nutritionalData.calories < 111) {
            					  		$(nutritionalData.name).replaceWith("Testing16");
            							}
						}
					
					});
					
				});

		
			});
			
			console.log("timeout fired");
			
		},1500);
	
	});
	

            	
	
});

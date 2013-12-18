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
		

				var $productItem = $(productItem);
				$productItem.hover(function(){

					var productName = $productItem.find("center").text();
					
					$(menuJson.products.product).each(function(index, menuItem){
					
					
						if(menuItem.name === productName) {
							console.log(index);
							
							var productData = menuJson.products.product[index];
							
							var rawNutritionData = productData.nutritionals.nutrition;
							
							var nutritionalData = {};
							
							$(rawNutritionData).each(function(index, currentNutritionalData){
								if(currentNutritionalData.type === "1") {
									nutritionalData.calories = currentNutritionalData.value;
								}
							});
							
							 console.log(nutritionalData);
							
							
							
								//calories value
								//$(productItem).find("tr:nth-child(2) td:nth-child(2)").html("Low Self-Esteem"); 
								
							//$(productItem).find("td.notes").html("coool");

							//data cleanup
							nutritionalData.calories = parseInt(nutritionalData.calories);
							
							if((nutritionalData.calories == 0)) {
								$productItem.find("tr:nth-child(2) td.red_bold").html("Low Self-Esteem"); 
								
							} else if ((nutritionalData.calories > 15) && (nutritionalData.calories < 300)) {
							  $productItem.find("tr:nth-child(2) td.red_bold").html("Muscle Cramps");
							  
							} else if ((nutritionalData.calories > 310) && (nutritionalData.calories < 500)) {
							  $productItem.find("tr:nth-child(2) td.red_bold").html("Nausea or Vomiting");
							  
							} else if ((nutritionalData.calories > 510) && (nutritionalData.calories < 1090)) {
							  $productItem.find("tr:nth-child(2) td.red_bold").html("Heart Attack");
							
							}  
            					  
            				/*if((nutritionalData.totalFat == 0)) {
								$(productItem).find("tr:nth-child(3) td.red_bold").html("Low Self-Esteem");
								
								} else if ((nutritionalData.totalFat > 0.5) && (nutritionalData.calories < 15)) {
            					  $(productItem).find("tr:nth-child(3) td.red_bold").html("Muscle Cramps");
            					  
            					} else if ((nutritionalData.totalFat > 14) && (nutritionalData.calories < 31)) {
            					  $(productItem).find("tr:nth-child(3) td.red_bold").html("Nausea or Vomiting");
            					  
            					} else if ((nutritionalData.totalFat > 32) && (nutritionalData.calories < 56)) {
            					  $(productItem).find("tr:nth-child(3) td.red_bold").html("Heart Attack");
            					
            					}  
            					  
            				if((nutritionalData.carbohydrates == 0)) {
								$(productItem).find("tr:nth-child(4) td.red_bold").html("Low Self-Esteem");
								
								} else if ((nutritionalData.carbohydrates > 4) && (nutritionalData.calories < 30)) {
            					  $(productItem).find("tr:nth-child(4) td.red_bold").html("Muscle Cramps");
            					  
            					} else if ((nutritionalData.carbohydrates > 31) && (nutritionalData.calories < 60)) {
            					  $(productItem).find("tr:nth-child(4) td.red_bold").html("Nausea or Vomiting");
            					  
            					} else if ((nutritionalData.carbohydrates > 61) && (nutritionalData.calories < 111)) {
            					  $(productItem).find("tr:nth-child(4) td.red_bold").html("Heart Attack");
            					
            					}  
            					  
							 if((nutritionalData.protein == 0)) {
								$(productItem).find("tr:nth-child(5) td.red_bold").html("Low Self-Esteem");
								
								} else if ((nutritionalData.protein > 1) && (nutritionalData.calories < 15)) {
            					  $(productItem).find("tr:nth-child(5) td.red_bold").html("Muscle Cramps");
            					  
            					} else if ((nutritionalData.protein > 16) && (nutritionalData.calories < 30)) {
            					  $(productItem).find("tr:nth-child(5) td.red_bold").html("Nausea or Vomiting");
            					  
            					} else if ((nutritionalData.protein > 31) && (nutritionalData.calories < 48)) {
            					  $(productItem).find("tr:nth-child(5) td.red_bold").html("Heart Attack");  
            					
            					} 
				
							if((nutritionalData.sodium == 0)) {
								$(productItem).find("tr:nth-child(6) td.red_bold").html("Low Self-Esteem");
								
								} else if ((nutritionalData.sodium > 10) && (nutritionalData.calories < 240)) {
            					  $(productItem).find("tr:nth-child(6) td.red_bold").html("Muscle Cramps");
            					  
            					} else if ((nutritionalData.sodium > 280) && (nutritionalData.calories < 990)) {
            					  $(productItem).find("tr:nth-child(6) td.red_bold").html("Nausea or Vomiting");
            					  
            					} else if ((nutritionalData.sodium > 1030) && (nutritionalData.calories < 2150)) {
            					  $(productItem).find("tr:nth-child(6) td.red_bold").html("Heart Attack");
            					            				
								 
							}*/
							
						}
					
					});
					
					
				});

		
			});
			
			console.log("timeout fired");
			
		},1500);

	});
	
	
});

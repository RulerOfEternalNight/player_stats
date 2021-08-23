// Global Settings
Chart.defaults.global.responsive = true;


// ======================================================
// Radar Chart
// ======================================================

// Radar Chart Options
var radarOptions = {
				
	//Boolean - If we show the scale above the chart data			
	scaleOverlay : false,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 5,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 20,
	//Number - The centre starting value
	scaleStartValue : 0,
	
	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line	
	scaleLineColor : "#ccc",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : false,
	
	//Interpolated JS string - can access value
	scaleLabel: "<%= value + ' ' %>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'futura-pt'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "bold",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",
	
	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : false,
	
	//String - The colour of the label backdrop	
	scaleBackdropColor : "rgba(255,255,255,0.75)",
	
	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,
	
	//Number - The backdrop padding to the side of the label in pixels	
	scaleBackdropPaddingX : 2,
	
	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,
	
	//String - Colour of the angle line
	angleLineColor : "rgba(255,255,255,0.3)",
	
	//Number - Pixel width of the angle line
	angleLineWidth : 1,			
	
	//String - Point label font declaration
	pointLabelFontFamily : "futura-pt",
	
	//String - Point label font weight
	pointLabelFontStyle : "normal",
	
	//Number - Point label font size in pixels	
	pointLabelFontSize : 16,
	
	//String - Point label font colour	
	pointLabelFontColor : "#000000",
	
	//Boolean - Whether to show a dot for each point
	pointDot : false,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 40,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null,
  
   // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: false,
	
}

//Get the context of the Radar Chart canvas element we want to select
var ctx = document.getElementById("radarChart").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 750, 0);
    //gradient.addColorStop(0, 'rgb(207, 12, 33)');   
    //gradient.addColorStop(.25, '#333');
    gradient.addColorStop(.5, 'rgb(239, 217, 77,0.65)');
    //gradient.addColorStop(0.5, 'rgb(51,51,51)');


// Radar Data
var radarData = {
	labels : ["POWER","SPEED","STRENGTH","KNOWLEDGE","ADAPTABLITY","AWARENESS","???", "DEFENCE"],
	datasets : [
		{
			fillColor : gradient,
			data : [70,70,75,89,90,88,73,75]
		}
	]
}

// Create the Radar Chart
window.onload = function() {
var myRadarChart = new Chart(ctx).Radar(radarData, radarOptions);
}
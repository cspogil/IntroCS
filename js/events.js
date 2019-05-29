/**
 * This script is made to dynamically generate HTML components from a JSON file
 *
 * This script will only work if hosted on a server.
 *
 * For computers with python 2 installed:
 * 	python -m SimpleHTTPServer 8000
 * 	navigate to 0.0.0.0:8000 to access hosted site
 *
 * 
 * For computers with python 3 installed:
 * 	python3 -m http.server 8000
 * 	navigate to 0.0.0.0:8000 to access hosted site
 *
 * 
 * For computers with PHP 5.4.0 or higher:
 * 	php -S localhost:8000
 * 	navigate to localhost:8000 to access hosted site
 *
 *
 * To find out which of these, if any you have access to, enter the following commands:
 * 	python --version
 *  php -v
 *
 *  If either of these work, it will output a version number for reference.
 * 
 * Author: Jake Wagoner
 */

$(document).ready(function() {
/**
 * Generates the events dynamically using JQuery's append function
 * 
 * eventList is a pre-parsed JSON object.
 */
	function generateEvents(eventList) {
		for (let i = 0; i < eventList.length; i++) {
			$("#events").append(
				"<div class='single-box'>" +
					"<div class='image-holder'>" +
						"<img src='../images/eventIcons/" + eventList[i].image + "'/>" +
					"</div>" +
					"<div class='grid flex-stretch'>" +
						"<div class='text-holder grid-col-1 grid-row-1'>" +
							"<h3><a href=" + eventList[i].link + "target='_blank'>"+ eventList[i].title +"</a></h3>" +
						"</div>" +
						"<div class='text-holder grid-col-2 grid-row-1'>" +
							"<p>" + eventList[i].date + "</p>" +
						"</div>" +
						"<div class='grid-col-1-to-2 grid-row-2 text-holder'>" +
							"<p class='event-text'>" + eventList[i].description + "</p>" +
						"</div>" +
						"<div class='btns-box flex grid-col-3 grid-row-3'>" +
							"<a href=" + eventList[i].link + " target='_blank'>Learn more</a>" +
						"</div>" +
					"</div>" +
				"</div>"
			);
		};
	};

	/**
	 * Retrieves and parses the JSON file "eventList.json"
	 *
	 * Passes the object to generateEvents()
	 */
	$.getJSON("../eventList.json",function(json) {
			generateEvents(json.events);
	}).fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
    	console.log( "JSON fetch request Failed: " + err );
	});
});

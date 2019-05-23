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
					"<div class='text-holder'>" +
						"<h3><a href=" + eventList[i].link + "target='_blank'>"+ eventList[i].title +"</a></h3>" +
						"<p>Date: " + eventList[i].date + "</p>" +
						"<div class='btns-box'>" +
							"<a href=" + eventList[i].link + " class='btn-one thm-bg-clr' target='_blank'>Learn more</a>" +
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
	});
});

# IntroCSPOGIL website source files: STAGING BRANCH

This branch is for staging and testing prior to pushing live to the gh-pages branch through pull requests.


## TODO

Home
* Move 'What is POGIL' to the About page - decided against
* fix aspect ratio issues in slideshow - done

About
* Added most important publications here instead

Events  (and publications)
* Add what's happening this summer and what we've done in the past.
  * Summer POGIL workshops, SIGCSE workshops, workshops on-request
* Events are stored in JSON file (read with JS), so they might not appear if you open the file in a browser, but Helen can see these in Brackets

Resources  (merge with Curriculum)
* Done: Links to collections
* Done: Google Group, FaceBook Group, Discussion Group
* later: Role Cards, CS Process Skills

Project Team
* Done: Update Clif bio.
* Add picture and blurb for Sukanya - done

Get Involved
* Done: Update with latest information on cspogil.org
* Done: Move content from the old "curriculum" page

HTML stuff
* description of JS code for `<div w3-include-html="content.html"></div>`
  * https://www.w3schools.com/howto/howto_html_include.asp


## JS that are not used so Helen removed from html pages:
<!-- Gmap helper -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHzPSV2jshbjI8fqnC_C4L08ffnj5EN3A"></script>
<!--Gmap script-->
	<script src="js/gmaps.js"-->
	</script-->
	<script src="js/map-helper.js">
	</script>
    
<!-- jQuery timepicker js -->
	<script src="assets/timepicker/timePicker.js">
	</script> 
<!-- Bootstrap select picker js -->
	<script src="assets/bootstrap-sl-1.12.1/bootstrap-select.js">
	</script> 
<!-- html5lightbox js -->
	<script src="assets/html5lightbox/html5lightbox.js">
	</script>
<!--Particles -->
	<script src="js/particles.min.js">
	</script-->
<!-- thm custom script -->
	<script src="js/particles-config.js">
	</script>
	<script src="js/custom.js">
	</script>
    
Removed from all except index.html:
<!-- owl carousel -->
	<script src="js/owl.js">
	</script> 
    
## unused custom scripts
<script src="js/particles-config.js"></script>
<script src="js/custom.js"></script>

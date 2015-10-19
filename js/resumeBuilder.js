/* Build four json objects.  */

// The json is also held in a nicely formatted file "json.fmt"
// that is much easier to read.
// The text below was generated with a shell command and copied in.
// sed 's/^/'\''/' json.fmt | sed 's/$/'\'\ \+'/' > json.tmp 

var bio = '{' +
'    "name": "Eduardo Zanzibar", ' +
'    "role": "Photography Fantabulist",' +
'    "contacts": {' +
'      "mobile": "415-345-8726",' +
'      "email": "ed_zanzibar@lmi.net",' +
'      "github": "https://github.com/ed_zanzibar/",' +
'      "twitter": "https://twitter/ed_zanzibar ",' +
'      "location": "Oakland, CA"' +
'   },' +
'   "welcomeMessage": "Feeling Fancy? Or Fabulistic?  With Eduardo Zanzibar, you don\'t have to choose.", ' +
'   "skills": [' +
'     "machinations", ' +
'     "formicating", ' +
'     "ab liberation"' +
'   ],' +
'   "biopic": "images/197x148.gif"' +
'}';

var education = '{' +
'    "schools": [' +
'      {' +
'        "name": "University of Cairo",' +
'        "location": "Cairo, Egypt",' +
'        "degree": "B.A.",' +
'        "majors": [' +
'          "Fine Arts",' +
'          "Economics"' +
'        ],' +
'        "dates": "06-01-10"' +
'      },' +
'      {' +
'         "name": "Cal Northridge",' +
'         "location": "Northridge, CA",' +
'         "degree": "B.A.",' +
'         "majors": [' +
'           "Communication Arts",' +
'           "Blood Sport"' +
'         ],' +
'         "dates": "06-01-08"' +
'      }' +
'    ],' +
'    "onlineCourses": [' +
'      {' +
'        "title": "HTML & CSS",' +
'        "school": "Udacity",' +
'        "date": "03-14-14",' +
'        "url": "http://udacity.com "' +
'      },      ' +
'      {' +
'        "title": "JavaScript Basics",' +
'        "school": "Udacity",' +
'        "date": "09-14-15",' +
'        "url": "http://udacity.com"' +
'      }' +
'    ] ' +
'}'; 

var work = '{' +
'    "jobs": [' +
'      {' +
'        "employer": "Sahara Safaris",' +
'        "title": "Lead Travel Photographer",' +
'        "location": "Marrakesh, Morocco",' +
'        "dates": "Jan 2013 - present",' +
'        "description": "Sunset Wrangling, Group Posing, Camel Cajoling"' +
'      },' +
'      {' +
'        "employer": "Love that Louvre!",' +
'        "title": "Portrait Specialist",' +
'        "location": "Paris, France",' +
'        "dates": "June 2010 - Sep 2012",' +
'        "description": "Portraits, Tourist Hassling, Artwork Gawker"' +
'      }' +
'    ]' +
'}';

var projects = '{' +
'    "projects": [' +
'      {' +
'        "title": "Photojournalism by Eric Taffo",' +
'        "dates": "May 2015",' +
'        "description": "Travel Photography from South America",' +
'        "images": [' +
'          "http://placehold.it/300x200", ' +
'          "http://placehold.it/300x200", ' +
'          "http://placehold.it/300x200" ' +
'        ]' +
'      },' +
'      {' +
'        "title": "Portfolio by Amy Schleisser",' +
'        "dates": "Jan 2015",' +
'        "description": "Professional Portfolio",' +
'        "images": [' +
'          "http://placehold.it/300x200", ' +
'          "http://placehold.it/300x200", ' +
'          "http://placehold.it/300x200" ' +
'        ]' +
'      }' +
'    ]' +
'}';

// Create JavaScript objects from each JSON string:

var education = JSON.parse(education);
var bio = JSON.parse(bio);
var work = JSON.parse(work);
var projects = JSON.parse(projects);


// Create "display" method for all objects.

// Function will step through object using foreach or "for in" loops.
// For each HTML "helper" variable (found in helper.js), 
// replace "%data%" placeholder with real data from JSON objects.
// Jquery commands target the appropriate element in HTML page 
// and append/prepend modified HTML.

// With "for in" loops through objects, 
// the property name (e..g "mobile") taken from the object
// can be programatically matched up to the helper.js variable (e.g. "HTMLmobile)
// by creating a new variable called "htmlProp".
// The new variable has the string "HTML" prepended to the property name.
// Thus an htmlProp variable is used in place of "prop" in all "for in" loops.
// This avoids hardcoding the property names of objects.

// Also note that sometimes property name must be massaged.
// e.g. first letter must be made to upper case
// e.g. an "s" must be added to name.


// Create functions for bio object:

bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // Add contacts (if they exist):
  for (prop in bio.contacts) {
    var htmlProp = "HTML" + prop; 
    var formatted = window[htmlProp].replace("%data%", bio.contacts[prop]);
    $("#topContacts").append(formatted);
  }

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedbioPic);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  // Only add skills if they exist:
  if ( Array.isArray(bio.skills) ) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++ ) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills-h3").append(formattedSkill);
    }
  }
}


// Create functions for work object:

work.display = function() {

  $("#workExperience").append(HTMLworkStart);

  for (var i = 0; i < work.jobs.length; i++ ) {
    for (prop in work.jobs[i]) {
      var propUp = prop[0].toUpperCase() + prop.slice(1);
      var htmlProp = "HTMLwork" + propUp;
      var formatted = window[htmlProp].replace("%data%", work.jobs[i][prop]);
      $(".work-entry").append(formatted);
    }
  }
}


// Create functions for projects object:

projects.display = function() {

  $("#projects").append(HTMLprojectStart);

  for (var i = 0; i < projects.projects.length; i++ ) {

    for (prop in projects.projects[i]) {

      // the images section should come last.  Do everything else first:
      if (prop !== "images") {
	var propUp = prop[0].toUpperCase() + prop.slice(1);
	var htmlProp = "HTMLproject" + propUp;
	var formatted = window[htmlProp].replace("%data%", projects.projects[i][prop]);
	$(".project-entry:last").append(formatted);

      } else {

	for (var j = 0; j < projects.projects[i].images.length; j++) {
	  var propUp = prop[0].toUpperCase() + prop.slice(1,-1); // "Images" to "Image"
	  var htmlProp = "HTMLproject" + propUp;
	  var formatted = window[htmlProp].replace("%data%", projects.projects[i][prop][j]);
	  $(".project-entry:last").append(formatted);
	}
      }
    }
  }
}


// Create functions for education object:

education.display = function() {

  // Step through elements in education.schools array:

  $("#education").append(HTMLschoolStart);

  for (var i = 0; i < education.schools.length; i++) {
    for (prop in education.schools[i]) {
      // the majors need to come last.  do everything else first:
      if (prop !== "majors") {
	var propUp = prop[0].toUpperCase() + prop.slice(1);
	var htmlProp = "HTMLschool" + propUp;
	var formatted = window[htmlProp].replace("%data%", education.schools[i][prop]);
	$(".education-entry").append(formatted);
      } 
    }

  // Loop through the school object again, this time getting just "majors".
  // Note: I removed "url" for schools from json,
  // because there is no corresponding var in helper.js.

    for (prop in education.schools[i]) {
      if (prop === "majors") {
	for (var j = 0; j < education.schools[i].majors.length; j++) {
	  var propUp = prop[0].toUpperCase() + prop.slice(1,-1); // must lose "s" at end
	  var htmlProp = "HTMLschool" + propUp;
	  var formatted = window[htmlProp].replace("%data%", education.schools[i][prop][j]);
	  $(".education-entry").append(formatted);
	}
      } 
    }
  }


  // Step through elements in education.onlineCourses array:

  $(".education-entry").append(HTMLonlineClasses);

  for (var i = 0; i < education.onlineCourses.length; i++) {
    for (prop in education.onlineCourses[i]) {
	if (prop === "date") var propUp = "Dates";
	else if (prop === "url") var propUp = prop.toUpperCase(); // "url" must be "URL".
	else
	  var propUp = prop[0].toUpperCase() + prop.slice(1);

	var htmlProp = "HTMLonline" + propUp;
	var formatted = window[htmlProp].replace("%data%", education.onlineCourses[i][prop]);
	$(".education-entry").append(formatted);
    }
  }
}


// Run "display" method for all objects:
// This will modify the DOM extensively.

bio.display();
work.display();
projects.display();
education.display();


// internationalize exercise:

$("#main").append(internationalizeButton);

function inName(name) {
  var first = name.split(" ")[0];
  var second = name.split(" ")[1].toUpperCase();
  return first + " " + second;
}


// Append Google Map of Locations:

$("#mapDiv").append(googleMap);


// Append footer with contact information:
    
for (prop in bio.contacts) {
  var htmlProp = "HTML" + prop;
  var formatted = window[htmlProp].replace("%data%", bio.contacts[prop]);
  $("#footerContacts").append(formatted);
}

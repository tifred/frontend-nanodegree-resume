/*
Build four json objects.
 */

var bio = '{' +
'    "name": "Eduardo Zanzibar", ' +
'    "role": "Flunky",' +
'    "contacts": {' +
'      "mobile": "415-345-8726",' +
'      "email": "flunky@lmi.net",' +
'      "github": "https://AA ",' +
'      "twitter": "https://BB ",' +
'      "location": "Oakland, CA"' +
'   },' +
'   "welcomeMessage": "Feeling Fancy?",' +
'   "skills": [' +
'     "partying", ' +
'     "carrying on", ' +
'     "nonesuch"' +
'   ],' +
'   "biopic": "images/197x148.gif",' +
'   "display": "function here"' +
'}';

var education = '{' +
'    "schools": [' +
'      {' +
'        "name": "UCB",' +
'        "location": "Santa Barbara, CA",' +
'        "degree": "B.A. Fine Arts",' +
'        "majors": [' +
'          "Fine Arts",' +
'          "Economics"' +
'        ],' +
'        "dates": "06-01-96"' +
'      },' +
'      {' +
'         "name": "Cal Northridge",' +
'         "location": "Northridge, CA",' +
'         "degree": "B.A. Fine Arts",' +
'         "majors": [' +
'           "Fine Arts",' +
'           "Economics"' +
'         ],' +
'         "dates": "06-01-96"' +
'      }' +
'    ],' +
'    "onlineCourses": [' +
'      {' +
'        "title": "xx",' +
'        "school": "xx",' +
'        "date": "03-14-98",' +
'        "url": "http://udacity.com "' +
'      },      ' +
'      {' +
'        "title": "yy",' +
'        "school": "xx",' +
'        "date": "03-14-98",' +
'        "url": "http://udacity.com"' +
'      }' +
'    ], ' +
'    "display": "function goes here"' +
'}'; 

var work = '{' +
'    "jobs": [' +
'      {' +
'        "employer": "XX",' +
'        "title": "YY",' +
'        "location": "Albany, NY",' +
'        "dates": "01-01-04-05-04-08",' +
'        "description": "stuff"' +
'      },' +
'      {' +
'        "employer": "XX",' +
'        "title": "ZZ",' +
'        "location": "Paris, France",' +
'        "dates": "01-01-04-05-04-08",' +
'        "description": "stuff"' +
'      }' +
'    ],' +
'    "display": "function goes here"' +
'}';

var projects = '{' +
'    "projects": [' +
'      {' +
'        "title": "XX",' +
'        "dates": "01-01-04-05-04-08",' +
'        "description": "stuff",' +
'        "images": [' +
'          "http://placehold.it/350x150", ' +
'          "http://placehold.it/350x150", ' +
'          "http://placehold.it/350x150" ' +
'        ]' +
'      },' +
'      {' +
'        "title": "YY",' +
'        "dates": "01-01-04-05-04-08",' +
'        "description": "stuff",' +
'        "images": [' +
'          "http://placehold.it/350x150", ' +
'          "http://placehold.it/350x150", ' +
'          "http://placehold.it/350x150" ' +
'        ]' +
'      }' +
'    ],' +
'    "display": "function goes here"' +
'}';

// Create JavaScript objects from each JSON string:

var education = JSON.parse(education);
var bio = JSON.parse(bio);
var work = JSON.parse(work);
var projects = JSON.parse(projects);

// step through bio object, populate DOM

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

for (prop in bio.contacts) {
  var ref = "HTML" + prop;
    console.log(window[ref]);
  var formatted = window[ref].replace("%data%", bio.contacts[prop]);
  $("#topContacts").append(formatted);
}

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

// if there are no skills in the bio.skills array, don't add the skills section:

if ( Array.isArray(bio.skills) ) {
  $("#header").append(HTMLskillsStart);

  for (var i = 0; i < bio.skills.length; i++ ) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills-h3").append(formattedSkill);
  }
}


// Step through work object.


$("#workExperience").append(HTMLworkStart);

for (var i = 0; i < work.jobs.length; i++ ) {
  for (prop in work.jobs[i]) {
    var propUp = prop[0].toUpperCase() + prop.slice(1);
    var ref = "HTMLwork" + propUp;
    var formatted = window[ref].replace("%data%", work.jobs[i][prop]);
    $(".work-entry").append(formatted);
  }
}


// Step through projects object:

$("#projects").append(HTMLprojectStart);

for (var i = 0; i < projects.projects.length; i++ ) {
  for (prop in projects.projects[i]) {
    var propUp = prop[0].toUpperCase() + prop.slice(1);
    var ref = "HTMLproject" + propUp;
    if (prop !== "images") {
      var formatted = window[ref].replace("%data%", projects.projects[i][prop]);
      $(".project-entry:last").append(formatted);
    } else
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      var propUp = prop[0].toUpperCase() + prop.slice(1,-1); // Images became Image
      var ref = "HTMLproject" + propUp;
      var formatted = window[ref].replace("%data%", projects.projects[i][prop][j]);
      $(".project-entry:last").append(formatted);
    }
  }
}

// Step through education.schools

$("#education").append(HTMLschoolStart);

for (var i = 0; i < education.schools.length; i++) {
  for (prop in education.schools[i]) {
    if (prop !== "majors") {
      var propUp = prop[0].toUpperCase() + prop.slice(1);
      var ref = "HTMLschool" + propUp;
      console.log(ref);
      var formatted = window[ref].replace("%data%", education.schools[i][prop]);
      $(".education-entry").append(formatted);
    } 
  }

// I split out the degrees, cause they need to be at the end of this section.
// Also removed "url" for schools, cause there is no corresponding var in helper.js

  for (prop in education.schools[i]) {
    if (prop === "majors") {
      for (var j = 0; j < education.schools[i].majors.length; j++) {
        var propUp = prop[0].toUpperCase() + prop.slice(1,-1); // must lose "s" at end
        var ref = "HTMLschool" + propUp;
        console.log(ref);
        var formatted = window[ref].replace("%data%", education.schools[i][prop][j]);
        $(".education-entry").append(formatted);
      }
    } 
  }
}

// Step through education.onlineCourses

$(".education-entry").append(HTMLonlineClasses);

for (var i = 0; i < education.onlineCourses.length; i++) {
  for (prop in education.onlineCourses[i]) {
      if (prop === "date") var propUp = "Dates";
      else if (prop === "url") var propUp = prop.toUpperCase();
      else
        var propUp = prop[0].toUpperCase() + prop.slice(1);

      var ref = "HTMLonline" + propUp;
      console.log(ref);
      var formatted = window[ref].replace("%data%", education.onlineCourses[i][prop]);
      $(".education-entry").append(formatted);
  }
}

// internationalize exercise:

$("#main").append(internationalizeButton);

function inName(name) {
  var first = name.split(" ")[0];
  var second = name.split(" ")[1].toUpperCase();
  return first + " " + second;
}

// map

$("#mapDiv").append(googleMap);


// footer
    
for (prop in bio.contacts) {
  var ref = "HTML" + prop;
    console.log(window[ref]);
  var formatted = window[ref].replace("%data%", bio.contacts[prop]);
  $("#footerContacts").append(formatted);
}








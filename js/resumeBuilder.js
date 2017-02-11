var name = "Chris Earley";
var role = "GIS Analyst"
$("#main").append(["Chris Earley"]);
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
var skillset = ["ArcGIS", "Python", "FME", "AutoCAD"];

var bio = {
  "name" : "Chris Earley",
  "age" : 33,
  "Role" : "GIS Analyst",
  "Pic" : "images/fry.jpg",
  "Skills" : skillset
};

$("#main").append(bio.name);
$("#main").append(bio.age);
$("#main").append(bio.Skills);
$("#main").append(bio.Role);
$("#main").append(bio.Pic);

bio.work = "Sellafield";
bio["education"] = "Newcastle University";

$("#main").append(bio.work);
$("#main").append(bio["education"]);
 
/*
This is empty on purpose! Your code to build the resume will go here.
 */

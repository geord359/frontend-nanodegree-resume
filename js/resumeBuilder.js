var name = "Chris Earley";
var role = "GIS Analyst"
$("#main").append(["Chris Earley"]);
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
/*
This is empty on purpose! Your code to build the resume will go here.
 */

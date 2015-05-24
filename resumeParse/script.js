// Once all skills loaded onto html by pressing 'more' on: <https://angel.co/skills>

var tags = $(".item-tag a");
var skills = [];
for (var i = 0; i < tags.length; i++){
  var skill = $(tags[i]).text();
  skills.push(skill);
}
JSON.stringify(skills);

// Take resume as input

/*
resume.txt 
*/
var fs = require('fs');
var skillsHelper = require('./skills.js');

var exports = module.exports = {};

exports.test = function(req, res){
  res.send('test');
};

exports.readResume = function(req,res){
  fs.readFile('resume.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
};


var skills = skillsHelper.skillsMore;
var skillsObj = {};
skills.forEach(function(val,i){
  if (!skillsObj.hasOwnProperty(val)){
    skillsObj[val] = true;
  }
});


exports.skills = function(req, res){
  res.send(skillsObj);
};

exports.countSkills = function(req,res){
  fs.readFile('resume.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    // Do something with data
    // Reg-ex: split by "comma + space" or "space"
    var resumeWords = data.split(/,\s|\s/);
    var result = {};
    // Iterate thru resumeWords
    for (var i = 0; i < resumeWords.length; i++){
      // if word in skills dictionary
      if (skillsObj.hasOwnProperty(resumeWords[i])){
        // if result already exist word as key
          // yes: increment the counter
          // no: initialize to be count as 1
      }
    }

    res.send(resumeWords);
  });
};
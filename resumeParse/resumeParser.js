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
      var word = resumeWords[i];
      if (skillsObj.hasOwnProperty(word)){
        // if result already exist word as key
        if (result.hasOwnProperty(word)){
          // yes: increment the counter
          result[word] += 1;
        } else {
          // no: initialize to be count as 1
          result[word] = 1;
        }
      }
    }
    res.send(result);
  });
};
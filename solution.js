//ABBREVIATE NAME

function abbrevName(name){
  var title = name.split(' ');

  return title[0].charAt(0).toUpperCase() + '.' + title[1].charAt(0).toUpperCase();
    // code away

}
//Insert dashes, had to look up the solutions for this one. Still working on understanding RegEx


function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}


// RegEx validation

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}


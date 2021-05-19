/* exported ransomCase */
/* input - string
output - word
create a storage space for word
look at each character in string
lowercase first character
add that character to storage
capitalize next character
add that character to storage
continue until all characters have their cases changed
give back word */

function ransomCase(string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();
    }
  }
  return word;
}

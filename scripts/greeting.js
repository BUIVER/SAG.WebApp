var hashes = window.location.search;
var l= hashes.indexOf("login=")
var p= hashes.indexOf("&password=")
var sub= hashes.substring(l+6,p)
document.write("Привет, ", sub)
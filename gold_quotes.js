// ==UserScript==
// @name         Gold Quotes On B+R
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include https://breadnroses.club/threads/*
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

JavaScript:
(function() {
    'use strict';

    // Your code here...
    JavaScript:
var user = document.querySelector(".p-navgroup-linkText").innerHTML;
 
var quotes = document.querySelectorAll(".bbCodeBlock.bbCodeBlock--expandable.bbCodeBlock--quote");
 
for(var i=0; i< quotes.length; i++){
  if (quotes[i] && quotes[i].querySelector('.bbCodeBlock-title') && quotes[i].querySelector('.bbCodeBlock-title').innerHTML.includes(user + ' said:')) {
      quotes[i].style.backgroundColor = '#fffeba ';
  }
}
})();

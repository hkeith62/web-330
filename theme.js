/**
 *   Title: WEB 330 – Enterprise JavaScript II
 *   Author: Professor Krasso
 *   Date: 05/30/2021
 *   Modified By: Professor  P. Itskovich, Keith Hall 
 *   Description: This is the global .js file that manages localStorage for web-330 assignments and upcoming projects.   
 */
 
// This sets the default theme to light if no selection is made.
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme"; // Calls local storage function result and assigns to a variable.
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme; // Calls document.body.classList.value and assign it to storage results variable.
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

// This sets the user's selected theme.  
function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem( key: "mode" ) || "light-theme";
}
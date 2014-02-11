/*
 * FIXME: This is *not* a safe way of building the
 * manifest_url. I do believe is very dependent on
 * the configuration I'm using at the moment of this
 * writing. Please, if you know a better solution
 * edit!
 */
var manifest_url = 'app://'
                   + location.hostname
                   + '/' + 'manifest.webapp';

function install(ev) {

  ev.preventDefault();
  // Install the app ...
  var installLocFind = navigator.mozApps.install(manifest_url);

  installLocFind.onsuccess = function(data) {
    // App is installed, do something 
    alert("App installed!");
  };

  installLocFind.onerror = function() {
    // App wasn't installed; some
    // error occurred. Info's is in
    // installapp.error.name
    alert("App *not* installed...");
    alert(installLocFind.error.name);
  };

};

// Get a reference to the button and call
// install() on click if the app isn't already
// installed. If it is, hide the button ...
var button = document.getElementById('install-btn');

var installCheck = navigator.mozApps.checkInstalled(manifest_url);

installCheck.onsuccess = function() {

  if(installCheck.result)
    button.style.display = "none";
  else
    button.addEventListener('click', install, false);

};

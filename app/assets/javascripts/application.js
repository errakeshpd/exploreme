// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require pace.js
//= require materialize.js
//= require d3
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({delay: 50});
})

        
window.paceOptions = {
  // Disable the 'elements' source
  elements: false,
  // Only show the progress on regular and ajax-y page navigation,
  // not every request
  restartOnRequestAfter: false
}
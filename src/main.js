import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './RPG.js';

$('#triangle-checker-form').submit(function(event) {
  event.preventDefault();
  const RPG = new RPG(length1, length2, length3);
  const response = triangle.checkType();
  $('#response').append("<p>" + response + "</p>");
});
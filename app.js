import './css/style.css';
import moduleLog from './custom/module.js'
import $ from "jquery"
import Calculate from './custom/calculate.js'
import 'jquery.cookie';
$(function(){
	$.cookie('the_cookie', 'the_value');
	var obj = new Calculate('calculate');
	obj.init();
	moduleLog();
})


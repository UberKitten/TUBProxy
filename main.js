var xml = makeXML();
function makeXML () {
	if (typeof XMLHttpRequest == 'undefined') {
		objects = Array(
			'Microsoft.XMLHTTP',
			'MSXML2.XMLHTTP',
			'MSXML2.XMLHTTP.3.0',
			'MSXML2.XMLHTTP.4.0',
			'MSXML2.XMLHTTP.5.0'
		);
		for (i in objects) {
			try {
				return new ActiveXObject(objects[i]);
			} catch (e) {}
		}
	} else {
		return new XMLHttpRequest();
	}
}

function custom_handler () {
}

function toggle_form () {
	get('moo_toggle').innerHTML = get('moo_form').style.display == 'none' ? 'Hide' : 'Show';
	get('moo_form').style.display = get('moo_form').style.display == 'none' ? 'block' : 'none';
}

function get (id) {
	return document.getElementById(id);
}
function load_handler () {
	xml.open('get', 'form.inc.htm');
	xml.onreadystatechange = function () {
		if (xml.readyState == 4) {
			document.body.innerHTML += xml.responseText;
			get('new_url').value = __new_url;
			get('__no_javascript').checked = __no_javascript ? 'checked' : '';
			get('__no_images').checked = __no_images ? 'checked' : '';
			get('__no_title').checked = __no_title ? 'checked' : '';
			get('__no_meta').checked = __no_meta ? 'checked' : '';
			custom_handler();
		}
	}
	xml.send(null);
}
if (typeof window.addEventListener != 'undefined') {
	window.addEventListener('load', load_handler, false);
} else if (typeof document.addEventListener != 'undefined') {
	document.addEventListener('load', load_handler, false);
} else if (typeof window.attachEvent != 'undefined') {
	window.attachEvent('onload', load_handler);
} else {
	if (typeof window.onload == 'function') {
		var existing = onload;
		window.onload = function () {
			existing();
			load_handler();
		}
	} else {
		window.onload = load_handler;
	}
}
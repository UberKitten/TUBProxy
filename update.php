<?

if ($_GET['pass'] == 'mudkips') {
	$out = file_get_contents('http://ub3rk1tten.com/ping.php?pass=mudkips');
	if ($out != 'do update') {

	}
} else {
	header('HTTP/1.0 404 Not Found');
}

?>
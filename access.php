<?php

if ($_GET['pass'] == 'closets')
{
 echo file_get_contents('access.log');
} else {
 header('HTTP/1.0 404 Not found');
}	
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-type: application/json');
header('Access-Control-Allow-Headers: X-Requested-With');

require 'vendor/autoload.php';

use \Mailjet\Resources;

$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$mj = new \Mailjet\Client('794f11f4c67ae24b792bc3575e26297b', '09b7348408d3234cbe64a1dbac9eb3b0');
$body = [
  'FromEmail' => "contact@webised.fr",
  'FromName' => $data->contactFormName,
  'Subject' => "message depuis le formulaire de contact Webised",
  'To' => "<gbenounicolas@gmail.com>",
  'Text-Part' => $data->contactFormMessage,
  'Headers' => [
    'Reply-To' => $data->contactFormEmail
  ]
];
$response = $mj->post(Resources::$Email, ['body' => $body]);
$response->success() && var_dump($response->getData());
?>

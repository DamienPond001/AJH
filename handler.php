<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './static/vendors/autoload.php';
require_once 'FormHandler.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);


$pp->requireCaptcha();


$pp->sendEmailTo('pond@live.co.za'); // ← Your email here

$mailer = $pp->getMailer();

//Using Aamazon AWS SES SMTP account
$mailer->IsSMTP();
$mailer->Port = 587;
$mailer->SMTPAuth = true;
$mailer->SMTPSecure = "tls";
$mailer->Host       = "smtp.live.com";
$mailer->Username   = "pond@live.co.za";
$mailer->Password   = "623541dp001";
$mailer->SMTPKeepAlive = true;   
$mailer->Mailer = "smtp"; // don't change the quotes!

$mailer->setFrom('pond@live.co.za', 'Form');


echo $pp->process($_POST);
<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = "+251" . strip_tags(trim($_POST["phone"]));
    $destination = strip_tags(trim($_POST["destination"]));
    $travelDate = strip_tags(trim($_POST["travelDate"]));
    $numberOfTravelers = strip_tags(trim($_POST["numberOfTravelers"]));
    $additionalInfo = strip_tags(trim($_POST["additionalInfo"]));

    if (empty($name) || empty($email) || empty($phone) || empty($destination) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete the form and try again."]);
        exit;
    }

    $recipient = "info@roha-travels.com";
    $subject = "New booking request from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Destination: $destination\n";
    $email_content .= "Travel Date: $travelDate\n";
    $email_content .= "Number of Travelers: $numberOfTravelers\n";
    $email_content .= "Additional Information:\n$additionalInfo\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        
        // Generate invoice-like HTML
        $invoice_html = <<<HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Confirmation - Roha Tour and Travel</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .invoice {
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 40px;
                    margin-top: 20px;
                }
                h1, h2 {
                    color: #e0cd95;
                }
                .details {
                    margin-top: 20px;
                }
                .details div {
                    margin-bottom: 10px;
                }
                .label {
                    font-weight: bold;
                    margin-right: 10px;
                }
                .footer {
                    margin-top: 40px;
                    text-align: center;
                    font-size: 0.9em;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="invoice">
                <h1>Booking Confirmation</h1>
                <p>Thank you for choosing Roha Tour and Travel. Your booking request has been received and is being processed.</p>
                
                <h2>Booking Details</h2>
                <div class="details">
                    <div><span class="label">Name:</span> $name</div>
                    <div><span class="label">Email:</span> $email</div>
                    <div><span class="label">Phone:</span> $phone</div>
                    <div><span class="label">Destination:</span> $destination</div>
                    <div><span class="label">Travel Date:</span> $travelDate</div>
                    <div><span class="label">Number of Travelers:</span> $numberOfTravelers</div>
                    <div><span class="label">Additional Information:</span> $additionalInfo</div>
                </div>
                
                <div class="footer">
                    <p>If you have any questions, please contact us at info@roha-travels.com or call +251-91-161-1111.</p>
                    <p>&copy; 2024 Roha Tour and Travel. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        HTML;
        
        echo $invoice_html;
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong and we couldn't send your booking request."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>

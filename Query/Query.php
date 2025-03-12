<?php

// Collect form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Store data in the database (MySQL database)
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=your_database", "username", "password");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insert form data into the database
        $stmt = $pdo->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $message]);

        echo "Thank you for contacting us!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    // Send an email to the admin
    $to = "admin@example.com"; // Change to your email
    $subject = "New Contact Form Submission";
    $body = "You have received a new message:\n\nName: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "There was an issue sending the message.";
    }

    // Optionally, you can store data in an Excel file (if desired)
    require 'vendor/autoload.php'; // Ensure PhpSpreadsheet is installed

    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

    // Load existing Excel file
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load("contacts.xlsx");
    $sheet = $spreadsheet->getActiveSheet();

    // Find the next empty row
    $lastRow = $sheet->getHighestRow() + 1;

    // Write data to the Excel file
    $sheet->setCellValue("A" . $lastRow, $name);
    $sheet->setCellValue("B" . $lastRow, $email);
    $sheet->setCellValue("C" . $lastRow, $message);

    // Save the Excel file
    $writer = new Xlsx($spreadsheet);
    $writer->save("contacts.xlsx");

    echo "Thank you for your submission!";
}
?>

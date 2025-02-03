<?php
// Database connection
$conn = new mysqli('localhost', 'username', 'password', 'voting_db');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to get candidate results
$sql = "SELECT candidate_name, vote_count FROM votes ORDER BY vote_count DESC";
$result = $conn->query($sql);

// Create an array to store the results
$data = [];
if ($result->num_rows > 0) {
    // Fetch rows and add to the data array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Send the results as JSON
echo json_encode($data);

// Close the connection
$conn->close();
?>

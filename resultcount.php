<?php
// Connect to database
$connection = new mysqli("localhost", "username", "password", "voting_system");

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Query to count votes for each candidate
$sql = "SELECT Candidates.Name, COUNT(Votes.Candidate_ID) AS TotalVotes
        FROM Votes
        INNER JOIN Candidates ON Votes.Candidate_ID = Candidates.Candidate_ID
        GROUP BY Votes.Candidate_ID
        ORDER BY TotalVotes DESC";

$result = $connection->query($sql);

if ($result->num_rows > 0) {
    echo "<table>";
    echo "<tr><th>Candidate</th><th>Total Votes</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Name"] . "</td><td>" . $row["TotalVotes"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No results yet.";
}

$connection->close();
?>

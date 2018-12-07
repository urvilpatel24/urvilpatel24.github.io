<!DOCTYPE html>
<html lang="en">
<head>
    <title>Msgs</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body{
            background-color: #777171;
            color: white;
            font-size: 22px;
            padding:20px;
            overflow: auto;
        }
    </style>
</head>
<h1 align="center">My Messages</h1>
<body>
            <?php

            $con = mysqli_connect("localhost:3306","root","root");
            mysqli_select_db($con,"my");
            $p = $_GET["p"];
            $rp = mysqli_query($con,"select psw from mypassword where psw='".$p."'");
            if($rowp = mysqli_fetch_assoc($rp)){
            ?>
    <div align="center">
        <table border="1" cellpadding="10" >
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Msg</th>
                <th>Date</th>
            </tr>
            <?php
                
                $r = mysqli_query($con,"select * from msg");
                $tot = 0;
                while($row = mysqli_fetch_assoc($r)){
                    echo "<tr><td>";
                    echo $row["id"];
                    echo "</td><td>";
                    echo $row["name"];
                    echo "</td><td>";
                    echo $row["email"];
                    echo "</td><td>";
                    echo $row["msg"];
                    echo "</td><td>";
                    echo $row["date"];
                    echo "</td>";
                    echo "</tr>";
                }
            }
            else{
                    echo "Error !!!";
            }

            ?>    
        </table>
    </div>
</body>
</html>
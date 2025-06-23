<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email</title>

    <style>
        body {
            font-family: Verdana, sans-serif;
        }

        p {
            font-size: 14px;
            color: black;
        }
    </style>
</head>

<body>
    @if ($role === 'Student')
        <div style="margin-bottom: 2rem;">
            <table>
                <tr>
                    <td>
                        <img src="{{ $message->embed(public_path('assets/logo.png')) }}" alt="Logo"
                            style="width: 50px; height: 50px; object-fit: contain; vertical-align: middle;">
                    </td>
                    <td style="padding-left: 10px;">
                        <h1 style="color: rgb(60, 167, 60); font-size: 24px; margin: 0; vertical-align: middle;">
                            Sultan Kudarat State University
                        </h1>
                    </td>
                </tr>
            </table>
        </div>

        <p style="font-size: 18px">Hi! {{ $name }}, Welcome to Sultan Kudarat State University. Here is your
            student account
            information.</p>
        <p style="text-decoration: none;color:black;">Email: {{ $email }}</p>
        <p>Student ID: {{ $student_id }}</p>
        <p style="margin-bottom: 2rem;">Password: {{ $password }}</p>
        <p>Please keep your account information secure and do not share it with anyone.</p>
    @endif

    @if ($role === 'Professor')
        <div style="margin-bottom: 2rem;">
            <table>
                <tr>
                    <td>
                        <img src="{{ $message->embed(public_path('assets/logo.png')) }}" alt="Logo"
                            style="width: 50px; height: 50px; object-fit: contain; vertical-align: middle;">
                    </td>
                    <td style="padding-left: 10px;">
                        <h1 style="color: rgb(60, 167, 60); font-size: 24px; margin: 0; vertical-align: middle;">
                            Sultan Kudarat State University
                        </h1>
                    </td>
                </tr>
            </table>
        </div>


        <p style="font-size: 18px">Hi! {{ $name }}, Welcome to Sultan Kudarat State University. Here is your
            professor account
            information.</p>
        <p style="text-decoration: none;color:black;">Email: {{ $email }}</p>
        <p style="margin-bottom: 2rem;">Password: {{ $password }}</p>
        <p>Please keep your account information secure and do not share it with anyone.</p>
    @endif
</body>

</html>

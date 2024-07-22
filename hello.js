<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Form Creation</title>
    <style>
        /* Optional: Basic styling for the form */
        form {
            max-width: 300px;
            margin: 20px auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input[type="text"], select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body bgcolor="red">
    <h1 align="center">GOVT SEN SEC SCHOOL BAGGE KE PIPAL</h1>
    <div id="form-container">
        <!-- Form will be inserted here -->
    </div>

    <script>
        // JavaScript code to create the form dynamically
        document.addEventListener("DOMContentLoaded", function() {
            // Create a form element
            var form = document.createElement("form");
            form.setAttribute("id", "myForm");

            // Create and append a text input field
            var nameLabel = document.createElement("label");
            nameLabel.textContent = "Name:";
            form.appendChild(nameLabel);

            var nameInput = document.createElement("input");
            nameInput.setAttribute("type", "text");
            nameInput.setAttribute("name", "name");
            form.appendChild(nameInput);

            // Create and append a select dropdown
            var genderLabel = document.createElement("label");
            genderLabel.textContent = "Gender:";
            form.appendChild(genderLabel);

            var genderSelect = document.createElement("select");
            genderSelect.setAttribute("name", "gender");

            var option1 = document.createElement("option");
            option1.textContent = "Male";
            genderSelect.appendChild(option1);

            var option2 = document.createElement("option");
            option2.textContent = "Female";
            genderSelect.appendChild(option2);

            var option3 = document.createElement("option");
            option3.textContent = "Other";
            genderSelect.appendChild(option3);

            form.appendChild(genderSelect);

            // Create and append a submit button
            var submitButton = document.createElement("input");
            submitButton.setAttribute("type", "submit");
            submitButton.setAttribute("value", "Submit");
            form.appendChild(submitButton);

            // Append the form to the container
            var formContainer = document.getElementById("form-container");
            formContainer.appendChild(form);

            // Handle form submission
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                var formData = new FormData(form);
                var formValues = {};
                formData.forEach(function(value, key){
                    formValues[key] = value;
                });
                console.log("Form submitted with values:", formValues);
                // You can add further processing here (e.g., send data to server)
            });
        });
    </script>
</body>
</html>

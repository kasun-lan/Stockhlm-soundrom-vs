<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="journal_start_page.aspx.cs" Inherits="journal_front.journal_start_page" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        #p_introduction {
            /* height: 90px; */
            font-size: 16px;
            /* min-width: 100%; */
            margin: 44px;
        }

        #img_1 {
            display: block;
            width: 100%;
        }

        Body {
            Text-Align: Justify;
            Max-Width: 800px;
            Margin: 0 Auto;
        }

        .Text {
            Font-Size: 24px;
        }

        .MoreText {
            Display: None;
        }

        .Read-More-Btn {
            Padding: 15px 60px;
            Background-Color: Rgb(149, 170, 197);
            Color: Rgb(53, 49, 49);
            Border: None;
            Outline: None;
            Font-Size: 20px;
            Cursor: Pointer;
        }

        .Text.Show-More .MoreText {
            Display: Inline;
        }

        .Text.Show-More .Dots {
            Display: None;
        }

        .div_description {
            max-height: 5.6em;
            overflow: hidden;
            white-space: pre-wrap;
        }

            .div_description span:nth-of-type(2) {
                display: inline-block;
                background-color: #ccc;
            }


        button.read-more-button {
            background: none;
            border: none;
            color: blue;
            cursor: pointer;
            text-decoration: underline;
        }
    </style>


</head>
<body>
    <div class="container">
        <header></header>
        <p id="p_introduction">
            <b>The Journal </b>is the official news channel for stockholm soundorm. iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        <img id="img_1" src="Images/img1.jpg" />
        <div class="div_description"></div>


    </div>




</body>



<script>


    function set_div(text) {
        // Get the div element
        var div = document.querySelector('.div_description');

        // Set the innerHTML of the div to the entire text
        div.innerHTML = text;

        // Add the "Read More" button
        div.innerHTML += '<br><button class="read-more-button">Read More</button>';

        // Add a click event listener to the button
        var button = div.querySelector('.read-more-button');
        button.addEventListener('click', function () {
            // If the button text is "Read More", show the full text and change the text to "Read Less"
            if (button.innerText == 'Read More') {
                div.style.maxHeight = 'none';
                button.innerText = 'Read Less';
            }
            // If the button text is "Read Less", show the first two lines and change the text to "Read More"
            else {
                div.style.maxHeight = '5.6em';
                button.innerText = 'Read More';
            }
        });
    }

</script>



</html>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="journal_start_page.aspx.cs" Inherits="Admin.journal_start_page" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
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


    <script>
        function AddDescriptionSection(ParentElementId, DescriptionText) {
            var ParentElement = document.getElementById(ParentElementId);
            var DescriptionSection = document.createElement('div');
            DescriptionSection.style.display = 'block';
            var DescriptionTruncated = document.createElement('p');
            DescriptionTruncated.style.width = '100%';
            DescriptionTruncated.style.overflow = 'hidden';
            DescriptionTruncated.style.display = '-webkit-box';
            DescriptionTruncated.style.webkitLineClamp = '2';
            DescriptionTruncated.style.webkitBoxOrient = 'vertical';
            DescriptionTruncated.style.color = 'black';
            DescriptionTruncated.style.textOverflow = 'hidden';
            DescriptionTruncated.innerHTML = DescriptionText;
            var DescriptionExtended = document.createElement('p');
            DescriptionExtended.style.display = 'none';
            DescriptionExtended.innerHTML = DescriptionText;
            var ReadMoreButton = document.createElement('button');
            ReadMoreButton.style.width = '100%';
            ReadMoreButton.style.display = 'block';
            ReadMoreButton.innerHTML = 'READ MORE';
            ReadMoreButton.addEventListener('click', function () {
                if (this.textContent == 'READ MORE') {
                    DescriptionTruncated.style.display = 'none';
                    DescriptionExtended.style.display = 'block';
                    this.textContent = 'READ LESS';
                } else {
                    DescriptionTruncated.style.display = '-webkit-box';
                    DescriptionExtended.style.display = 'none';
                    this.textContent = 'READ MORE';
                }
            });
            DescriptionSection.appendChild(DescriptionTruncated);
            DescriptionSection.appendChild(DescriptionExtended);
            DescriptionSection.appendChild(ReadMoreButton);
            ParentElement.appendChild(DescriptionSection);
        }
    </script>
</body>
</html>

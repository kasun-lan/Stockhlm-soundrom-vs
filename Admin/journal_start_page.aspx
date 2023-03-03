﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="journal_start_page.aspx.cs" Inherits="Admin.journal_start_page" %>

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

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>


</head>
<body>

    <div class="container">
        <header></header>
        <p id="p_introduction">
            <b>The Journal </b>is the official news channel for stockholm soundorm. iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>

        <div class="journal">
            <img id="img_1" src="Images/img1.jpg" />
            <div class="div_description"></div>
        </div>



    </div>

    <script src="Scripts/Classes.js"></script>
    <script src="Scripts/journal_start_page_script.js"></script>


    <script>



        //class Journal {
        //    constructor() {
        //        this.Id = 0;
        //        this.DesktopImageUrl = '';
        //        this.MobileImageUrl = '';
        //        this.Headline = '';
        //        this.MetaTitle = '';
        //        this.MetaDescription = '';
        //        this.BodyText = '';
        //        this.PublishDate = new Date();
        //        this.StartPageMaterial = false;
        //        this.RelatedTracks = [];
        //        this.RelatedStyle = [];
        //        this.RelatedVideos = [];
        //    }
        //}




        function AddJournalToContainer(containder_id, jnl) {

            var j = new Journal();

            //create a div with class="journal" 
            var Journal = document.createElement('div');
            Journal.className = 'journal';
            Journal.id = "J"+j.id;

            var Image_desktop = document.createElement('img');
            Image_desktop.className = 'img_desktop';
            Image_desktop.src = j.DesktopImageUrl;

            var Image_Mobile = document.createElement('img');
            Image_Mobile.className = 'img_mobile';
            Image_Mobile.src = j.MobileImageUrl;

            Journal.appendChild(Image_desktop);
            Journal.appendChild(Image_Mobile);
            AddDescriptionSection(Journal, j.BodyText);

            document.getElementById(containder_id).appendChild(Journal);




            //add an image inside it called
            //call AddDescriptionSection([above_journal_div],journal.DescriptionText);
            //add journal to container


        }





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

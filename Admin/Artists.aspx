<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Artists.aspx.cs" Inherits="Admin.ViewArtists" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="/Styles/ArtistsStyles.css" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
</head>
<body>
    <div class="container">
        <div style="/*margin-left: 50px; */ margin-bottom: 20px">
            <label id="lbl_artist">Artist</label>
            <input type="button" class="btn1" value="Add Artist" id="btn_add_artist" />
        </div>
        
        <div style="display:none" id="add_artist">
            <button id="add_artist_close_btn" class="close-button">X</button>

            <div style="/*margin-left: 50px; */ margin-bottom: 20px; font-size: large; color: white;">
                Artist
            </div>

            <div id="pic_vertical" onclick="pic_vertical_upload.click();">
                <label style="position: relative; top: 5px; left: 5px;">Pic</label>
                <div class="plus">+</div>
            </div>
            <input id='pic_vertical_upload' type='file' value="" style='display: none' accept='.jpg' />


            <div id="pic_horizontal" onclick="pic_horizontal_upload.click();">
                <label style="position: relative; top: 5px; left: 5px;">Pic</label>
                <div class="plus">+</div>
            </div>
            <input id='pic_horizontal_upload' type='file' value="" style='display: none' accept='.jpg' />




            <div class="infobox">
                <label>Artist Name</label>
                <input type="text" id="artist_name" />
            </div>

            <div class="infobox" style="height: 160px">
                <label>Description</label>
                <textarea id="description" /></textarea>
            </div>

            <div class="infobox">
                <label>Meta Title</label>
                <input type="text" id="meta_title" />
            </div>

            <div class="infobox">
                <label>Meta Description</label>
                <input type="text" id="meta_description" />
            </div>

            <div class="infobox" style="width: 300px">
                <label>Published Date</label>
                <input type="date" id="published_date" style="color-scheme: dark;" />
            </div>


            <div class="infobox" id="infobox_related_tracks">
                <label>Related Track</label>
                <select class="select_related" id="select_related_tracks"></select>
            </div>
            <label id="add_another_related_tracks" class="add_another">Add another related track</label>

            <div class="infobox" id="infobox_related_videos">
                <label>Related Video</label>
                <select class="select_related" id="select_related_videos">
                </select>
            </div>
            <label id="add_another_related_video" class="add_another">Add another related video</label>

            <div class="infobox" id="infobox_related_styles">
                <label>Related Style</label>
                <select class="select_related" id="select_related_styles"></select>
            </div>
            <label id="add_another_related_styles" class="add_another">Add another related style</label>

            <div class="infobox" id="infobox_related_journal_entry">
                <label>Related Journal Entry</label>
                <select class="select_related" id="select_related_journal_entry"></select>
            </div>
            <label id="add_another_related_journal_entry" class="add_another">Add another related journal entry</label>



            <div class="button_container">
                <input type="button" value="Publish Artist" class="btn1" />
                <input type="button" id="btn_save" value="Save" class="btn1" />
                <input type="button" class="btn1" value="Previw" />
                <input type="button" class="btn1" value="Delete" />
            </div>

        </div>


        <div class="profile_container">
        </div>
    </div>

    <script src="Scripts/Classes.js"></script>
    <script src="Scripts/ArtistsScript.js"></script>

</body>
</html>

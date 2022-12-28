<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Artists.aspx.cs" Inherits="Admin.ViewArtists" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="/Styles/ArtistsStyles.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <div style="margin-left:50px">
                <label id="lbl_artist">Artist</label>
                <button class="btn1">Add Artist</button>
            </div>

            <div id="add_artist">
                Artist

                <img id="pic_horizontal" src="" alt="" />
                <img id="pic_vertical" src="" alt="" />


                <div class="infobox">
                    <label >Artist Name</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox" style="height:160px">
                    <label >Description</label>
                    <textarea id="txt" /></textarea>
                </div>

                <div class="infobox">
                    <label >Meta Title</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox">
                    <label >Meta Description</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox" style="width:300px">
                    <label >Published Date</label>
                    <input type="date" id="txt" style="color-scheme: dark;" />
                </div>

                <div class="infobox">
                    <label >Related Track</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox">
                    <label >Related Video</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox">
                    <label >Related Style</label>
                    <input type="text" id="txt" />
                </div>

                <div class="infobox">
                    <label >Related Journal Entry</label>
                    <input type="text" id="txt" />
                </div>

                <div class="button_container">
                <button class="btn1" >Publish Artist</button>
                <button class="btn1" >Save</button>
                <button class="btn1" >Preview</button>
                <button class="btn1" >Delete</button>
                </div>

            </div>


           <%-- <div class="profile_container">
                <div class="profile_box">
                    <img src="" />
                    <label id=""></label>
                    <label id=""></label>
                </div>
            </div>--%>
        </div>
    </form>
</body>
</html>

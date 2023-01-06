var _hor_image = null;
var _ver_image = null;

var test1 = [];
var videoss = "";
var e = "";

var uploadsfolderPath = "https://localhost:44398/Uploads/";


//here its really important the the "c_sharp_method" should have its return
//collection containing objects with first property as the id (value for option)
//and second property as title (text for option)
function f(infobox_id, defualt_select_element_id, add_another_id, c_sharp_method, text_prop_name, value_prop_name) {

    var select = document.getElementById(defualt_select_element_id);
    var _url = 'Artists.aspx/' + c_sharp_method;

    $.ajax({
        type: 'POST',
        url: _url,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function (data) {

            test1 = data;

            for (let i = 0; i < data.d.length; i++) {

                //text property is added as first then the value property
                select.add(new Option(data.d[i][text_prop_name], data.d[i][value_prop_name]), null);
            }

        },
        error: function (ex) {
            e = ex;
        }
    });


    document.getElementById(add_another_id).addEventListener("click", function () {


        // Create a new select element
        var newSelect = document.createElement("select");
        newSelect.className = "select_related";

        // Populate the new select element with the options from the existing select element
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            newSelect.add(new Option(option.text, option.value));
        }

        // Add the new select element to the model element
        document.getElementById(infobox_id).appendChild(newSelect);
    });


}


//when we input an id of a .infobox
//this returns a collection of objects
//containing id and text properties
function f2(infobox_id) {

    const infobox = document.getElementById(infobox_id);
    const selectElements = infobox.querySelectorAll('select');


    let retobjs = [];

    for (const select of selectElements) {
        const selectedIndex = select.selectedIndex;
        const selectedOption = select.options[selectedIndex];
        const selectedText = selectedOption.text;
        const selectedValue = selectedOption.value;

        var obj = Object.assign({}, { id: selectedValue, text: selectedText });
        retobjs.push(obj);

    }

    return retobjs;

}





/*f("infobox_related_tracks", "select_related_tracks", "add_another_related_tracks", "", "", "");*/
f("infobox_related_videos", "select_related_videos", "add_another_related_video", "GetVideosIdTitle", "VideoTitle", "Id");
//f("infobox_related_styles", "select_related_styles", "add_another_related_styles", "", "", "");
//f("infobox_related_journal_entry", "select_related_journal_entry", "add_another_related_journal_entry", "", "", "");


document.getElementById("pic_horizontal_upload").addEventListener("change", hor_image_upload, false);
document.getElementById("pic_vertical_upload").addEventListener("change", ver_image_upload, false);
document.getElementById("btn_save").addEventListener("click", btn_save_click);
document.getElementById("btn_add_artist").addEventListener("click" , function () {

    document.getElementById("add_artist").style.display = "block";

});

document.getElementById("add_artist_close_btn").addEventListener("click", function () {


    document.getElementById("add_artist").style.display = "none";

    //make element vlaues defualt

});

function refresh_profile_container() {

    //clear the inside of profile_container
    //get profile data from backend using ajax
}



function ver_image_upload() {

    var fileInput = document.getElementById('pic_vertical_upload');
    var file = fileInput.files[0];
    _ver_image = file;
    var fileUrl = URL.createObjectURL(file);

    var div = document.getElementById('pic_vertical');
    div.style.backgroundImage = 'url(' + fileUrl + ')';
}

function hor_image_upload() {

    var fileInput = document.getElementById('pic_horizontal_upload');
    var file = fileInput.files[0];
    _hor_image = file;
    var fileUrl = URL.createObjectURL(file);

    var div = document.getElementById('pic_horizontal');
    div.style.backgroundImage = 'url(' + fileUrl + ')';

}

function SaveImageAndReturnGuid(file) {

    var guid = null;


    var formData = new FormData();
    formData.append("file", file);

    $.ajax({
        type: "POST",
        url: "SaveImage.ashx",
        data: formData,
        contentType: false,
        processData: false,
        async: false,
        success: function (response) {
            guid = response;
        },
        error: function (ex) {
            test1 = ex;
        }
    });


    return guid;
}

function btn_save_click() {


    var ver_img_filename = SaveImageAndReturnGuid(_ver_image);
    var hor_img_filename = SaveImageAndReturnGuid(_hor_image);



    let artist = new Artist();


    artist.VerticalImageUrl = ver_img_filename;
    artist.HorizontalImageUrl = hor_img_filename;
    artist.ArtistName = document.getElementById("artist_name").value;
    artist.Description = document.getElementById("description").value;
    artist.MetaTitle = document.getElementById("meta_title").value;
    artist.MetaDescription = document.getElementById("meta_description").value;
    artist.PublishedDate = document.getElementById("published_date").value;
    artist.State = "1";


    //dont know about track/music till now , so will do the work related to that later

    var related_videos_data = f2("infobox_related_videos");

    var videos = [];

    for (let i = 0; i < related_videos_data.length; i++) {
        const obj = related_videos_data[i];


        var vid = new Video();
        vid.Id = obj.id;
        vid.VideoTitle = obj.text;

        videos.push(vid);
    }

    artist.Videos = videos;





    //var journalsObj = [];
    //journalsObj.push(new Journal(1, "test journal1"));
    //journalsObj.push(new Journal(2, "test journal2"));


    //artist.journals = journalsObj;
    //artist.metaTitle = document.getElementById("meta_title").value;


    $.ajax({
        type: "POST",
        url: "Artists.aspx/SaveArtist",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{artist: " + JSON.stringify(artist) + "}",
        cache: false,
        async: false,
        success: function (result) {

            alert("soet");
            onload_callback(result);
        },
        error: function (ex) {
            console.log(ex.responseText);
        }
    });

    var somethig = "";



}





//add .profile_boxes to .profile_container
//for all the artists in the database
function getArtists() {
    $.ajax({
        type: "POST",
        url: "Artists.aspx/GetArtists",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            var artists = [];
            $.each(response.d, function (index, item) {
                var artist = new Artist();
                artist.Id = item.Id;
                artist.VerticalImageUrl = item.VerticalImageUrl;
                artist.HorizontalImageUrl = item.HorizontalImageUrl;
                artist.ArtistName = item.ArtistName;
                artist.Description = item.Description;
                artist.MetaTitle = item.MetaTitle;
                artist.MetaDescription = item.MetaDescription;
                artist.PublishedDate = item.PublishedDate;
                artist.Tracks = item.Tracks;
                artist.Videos = item.Videos;
                artist.Styles = item.Styles;
                artist.Journals = item.Journals;
                artist.State = item.State;
                artists.push(artist);

                // 1. Create a div element with class "profile_box" and id "pb1"
                let div = document.createElement("div");
                div.className = "profile_box";
                div.tagName = artist.Id;

                // 2. Add an img and 2 labels inside #pb1
                let img = document.createElement("img");


                img.src = uploadsfolderPath + artist.VerticalImageUrl;
                let label1 = document.createElement("label");
                label1.className = "artist_name";
                label1.innerHTML = artist.ArtistName;
                let label2 = document.createElement("label");
                label2.className = "state";
                if (artist.State == "0") {
                    label2.innerHTML = "";
                }
                else if (artist.State == "1") {
                    label2.innerHTML = "Saved";
                }
                else {

                    label2.innerHTML = artist.PublishedDate;
                }

                div.appendChild(img);
                div.appendChild(label1);
                div.appendChild(document.createElement("br"));
                div.appendChild(label2);

                // 3. Add #pb1 inside .profile_container
                let container = document.querySelector(".profile_container");
                container.appendChild(div);

            });

            test1 = artists;

        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

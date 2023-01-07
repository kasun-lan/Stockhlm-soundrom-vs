var test1 = null;


function getJournals() {

    $.ajax({
        type: "POST",
        url: "journal_start_page.aspx/GetJournals",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            var journals = [];



            test1 = response;

        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
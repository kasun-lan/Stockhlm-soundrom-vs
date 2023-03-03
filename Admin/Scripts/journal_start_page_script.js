var test1 = null;



function getJournals() {

    

    var ret;

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
            ret = response.d;

        },
        error: function (xhr, status, error) {
            console.log(error);
            ret = error;
        }
    });

    return ret;

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


function populatePage() {


}
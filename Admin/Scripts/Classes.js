class Artist {
    constructor() {
        this.Id = 0;
        this.VerticalImageUrl = '';
        this.HorizontalImageUrl = '';
        this.ArtistName = '';
        this.Description = '';
        this.MetaTitle = '';
        this.MetaDescription = '';
        this.PublishedDate = '';
        this.Tracks = [];
        this.Videos = [];
        this.Styles = [];
        this.Journals = [];
        this.State = "";
    }
}

class Track {
    constructor() {
        this.Id = 0;
        this.Name = '';
    }
}

class Video {
    constructor() {
        this.Id = 0;
        this.YoutubeLink = '';
        this.VideoTitle = '';
        this.RelatedArtists = [];
        this.VerticalPosterUrl = '';
        this.HorizontalPosterLinkUrl = '';
        this.PublishDate = new Date();
        this.RelatedTracks = [];
        this.RelatedStyle = [];
        this.Description = '';
        this.MetaTitle = '';
        this.MetaDescription = '';
    }
}

class Style {
    constructor() {
        this.Id = 0;
        this.StyleTitle = '';
        this.Picture1 = '';
        this.Picture2 = '';
        this.Picture3 = '';
        this.ReleaseDate = new Date();
    }
}

class Journal {
    constructor() {
        this.Id = 0;
        this.DesktopImageUrl = '';
        this.MobileImageUrl = '';
        this.Headline = '';
        this.MetaTitle = '';
        this.MetaDescription = '';
        this.BodyText = '';
        this.PublishDate = new Date();
        this.StartPageMaterial = false;
        this.RelatedTracks = [];
        this.RelatedStyle = [];
        this.RelatedVideos = [];
    }
}

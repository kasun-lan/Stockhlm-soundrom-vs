using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace Admin
{
    public partial class ViewArtists : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ////temp
            //using (data data = new data())
            //{
            //    var cs = data.Database.Connection.ConnectionString;


            //    data.Videos.Add(new Video()
            //    {
            //        Description = "\"U Make Me Wanna\" is a song by English boy band Blue. It was released as the third and final single from their second studio album, One Love (2002). It was released on 17 March 2003 in the United Kingdom and peaked at number four on the UK Singles Chart.",
            //        VideoTitle = "U Make Me Wanna",
            //        YoutubeLink = "https://www.youtube.com/watch?v=koHo5-0DVlI",
            //        PublishDate = DateTime.Now

            //    });


            //    data.Videos.Add(new Video()
            //    {
            //        Description = "\"Who Let the Dogs Out\" is a song performed by Bahamian junkanoo band Baha Men. Originally released by Anslem Douglas (titled \"Doggie\"), it was covered by producer Jonathan King who sang it under the name Fat Jakk and his Pack of Pets. He brought the song to the attention of his friend Steve Greenberg, who then had the Baha Men cover the song. The song, released on 26 July 2000, became the band's first and only hit in the United Kingdom and the United States, and it gained popularity after appearing in Rugrats in Paris: The Movie and its soundtrack album.",
            //        VideoTitle = "Who Let the Dogs Out",
            //        YoutubeLink = "https://www.youtube.com/watch?v=Qkuu0Lwb5EM",
            //        PublishDate = DateTime.Now


            //    });



            //    data.SaveChanges();


            //}


            ////
        }


        //[WebMethod]
        //public static string GetPath()
        //{
           
        //  //  return Server.MapPath("~");
        //}


        [WebMethod]
        public static void SaveArtist(Artist artist)
        {
            using (data data = new data())
            {
                for (int x = 0; x < artist.Videos.Count(); x++)
                {
                    int id = artist.Videos[x].Id;

                    var video = data.Videos.Where(v => v.Id == id).First();
                    artist.Videos[x] = video;
                }

                for (int x = 0; x < artist.Journals.Count(); x++)
                {
                    var Journal = data.Journals.Where(j => j.Id == artist.Journals[x].Id).First();
                    artist.Journals[x] = Journal;
                }

                for (int x = 0; x < artist.Styles.Count(); x++)
                {
                    var Style = data.Styles.Where(s => s.Id == artist.Styles[x].Id).First();
                    artist.Styles[x] = Style;
                }

                for (int x = 0; x < artist.Tracks.Count(); x++)
                {
                    var Track = data.Tracks.Where(t => t.Id == artist.Tracks[x].Id).First();
                    artist.Tracks[x] = Track;
                }

                artist.State = State.Saved;

                data.Artists.Add(artist);
                data.SaveChanges();
            }

        }

        [WebMethod]
        public static List<Video> GetVideos()
        {

            using (data data = new data())
            {
                var items = data.Videos.ToList();
                return items;
            }

        }

        [WebMethod]
        public static List<Artist> GetArtists()
        {
            using (data data = new data())
            {
                var items = data.Artists.ToList();
                return items;
            }
        }


        [WebMethod]
        public static List<VideoShort> GetVideosIdTitle()
        {

            using (data data = new data())
            {
                var items = data.Videos.ToList();
                var shortVideos = new List<VideoShort>();
                foreach (var v in items)
                {
                    var shortVideo = new VideoShort { Id = v.Id, VideoTitle = v.VideoTitle };
                    shortVideos.Add(shortVideo);
                }
                return shortVideos;
            }

        }

        [WebMethod]
        public static List<Style> GetStyle()
        {

            using (data data = new data())
            {
                var items = data.Styles.ToList();
                return items;
            }

        }

        [WebMethod]
        public static List<StyleShort> GetStyleIdTitle()
        {

            using (data data = new data())
            {
                var items = data.Styles.ToList();
                var stypeshort = new List<StyleShort>();
                foreach (var v in items)
                {
                    var shortStyle = new StyleShort { Id = v.Id, StyleTitle = v.StyleTitle };
                    stypeshort.Add(shortStyle);
                }
                return stypeshort;
            }

        }

        [WebMethod]
        public static List<Journal> GetJournal()
        {

            using (data data = new data())
            {
                var items = data.Journals.ToList();
                return items;
            }

        }

        [WebMethod]
        public static List<JournalShort> GetJournalIdHeadline()
        {

            using (data data = new data())
            {
                var items = data.Journals.ToList();
                var journalshort = new List<JournalShort>();
                foreach (var v in items)
                {
                    var shortJournal = new JournalShort { Id = v.Id, Headline = v.Headline };
                    journalshort.Add(shortJournal);
                }
                return journalshort;
            }

        }


    }

    class data : DbContext
    {
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<Style> Styles { get; set; }
        public DbSet<Journal> Journals { get; set; }


        public data() : base(@"Data Source=(localdb)\mssqllocaldb;Initial Catalog=stock_sound;Integrated Security=True")
        {

        }
    }

    public enum State
    {
        Published,
        Saved,
        ToBePublished
    }

    public class Artist
    {
        public int Id { get; set; }
        public string VerticalImageUrl { get; set; }
        public string HorizontalImageUrl { get; set; }
        public string ArtistName { get; set; }
        public string Description { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public string PublishedDate { get; set; }
        public List<Track> Tracks { get; set; }
        public List<Video> Videos { get; set; }
        public List<Style> Styles { get; set; }
        public List<Journal> Journals { get; set; }
        public State State { get; set; }

    }







    public class Track
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Video
    {
        public int Id { get; set; }
        public string YoutubeLink { get; set; }
        public string VideoTitle { get; set; }
        public List<Artist> RelatedArtists { get; set; }
        public string VerticalPosterUrl { get; set; }
        public string HorizontalPosterLinkUrl { get; set; }
        public DateTime PublishDate { get; set; }
        public List<Track> RelatedTracks { get; set; }
        public List<Style> RelatedStyle { get; set; }
        public string Description { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public State State { get; set; }

    }


    public class VideoShort
    {
        public int Id { get; set; }
        public string VideoTitle { get; set; }

    }

    public class Style
    {
        public int Id { get; set; }
        public string StyleTitle { get; set; }
        public string Picture1 { get; set; }
        public string Picture2 { get; set; }
        public string Picture3 { get; set; }
        public DateTime ReleaseDate { get; set; }
        public State State { get; set; }


    }

    public class StyleShort
    {
        public int Id { get; set; }
        public string StyleTitle { get; set; }
    }

    public class Journal
    {
        public int Id { get; set; }
        public string DesktopImageUrl { get; set; }
        public string MobileImageUrl { get; set; }
        public string Headline { get; set; }
        public string MetaTitle { get; set; }
        public string MetaDescription { get; set; }
        public string BodyText { get; set; }
        public DateTime PublishDate { get; set; }
        public bool StartPageMaterial { get; set; }
        public List<Track> RelatedTracks { get; set; }
        public List<Style> RelatedStyle { get; set; }
        public List<Video> RelatedVideos { get; set; }
        public State State { get; set; }
    }

    public class JournalShort
    {
        public int Id { get; set; }
        public string Headline { get; set; }
    }


}
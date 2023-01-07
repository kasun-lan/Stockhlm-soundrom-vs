using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Admin
{
    public partial class journal_start_page : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //using (data data = new data())
            //{

            //    var text = "South Korean pianist and composer Yiruma will release his new album, The Rewritten Memories, celebrating the 20th anniversary " +
            //        "of his debut recording, on 26 March 2021. The Rewritten Memories features new orchestral arrangements of some of Yiruma’s best-loved " +
            //        "works including the globally popular ‘River Flows In You’, described as “the ‘Clair de Lune’ of the 21st century” by Classic FM, and ‘Kiss The Rain’," +
            //        " released as a single, with a new music video, today. The Rewritten Memories is Yiruma’s first orchestral studio album and features the composer on piano." +
            //        " “It was a challenging yet interesting experience,” he recalled regarding recording the album with the Korean Symphony Orchestra during the Covid-19 pandemic." +
            //        " “The entire orchestra members couldn’t gather simultaneously and had to record part by part.” Yet collaborating with so many musicians was a refreshing change for " +
            //        "Yiruma who, like most composers, usually writes alone at the piano.";


            //    List<Video> videos = new List<Video>();

            //    videos.Add(data.Videos.Where(v => v.Id == 1).First());
            //    videos.Add(data.Videos.Where(v => v.Id == 2).First());
            //    videos.Add(data.Videos.Where(v => v.Id == 1014).First());


            //    data.Journals.Add(new Journal()
            //    {
            //        BodyText = text,
            //        Headline = "Yiruma Announces New Orchestral Album ‘The Rewritten Memories’",
            //        DesktopImageUrl = "Screenshot 2023-01-07 125401.jpg",
            //        MetaDescription = "",
            //        MetaTitle = "",
            //        MobileImageUrl = "Screenshot 2023-01-07 125401.jpg",
            //        PublishDate = DateTime.Now,
            //        StartPageMaterial = false,
            //        State = State.Published,
            //        RelatedVideos = videos
                     

            //    });


            //    var text2 = "The performance will last for two and a half hours and the audience can expect new and reimagined arrangements " +
            //        "from the Oscar-winning composer’s stellar back catalogue. Hans Zimmer will, of course, be joined by a large orchestra and" +
            //        " complemented by Hans Zimmer’s magnificent live band and dancers. Speaking on his performance in Dubai, Hans Zimmer stated," +
            //        " ‘I’m thrilled to bring Hans Zimmer Live to Dubai for the very first time. As one of the world’s most exciting and dynamic" +
            //        " cities that’s home to over 200 nationalities, this is a great opportunity to speak to a multicultural global audience in " +
            //        "the universal language of music. It seems fitting to bring our show to such an extraordinary city, and treat its people to" +
            //        " an unforgettable evening of music and entertainment!’";


            //    List<Video> videos2 = new List<Video>();

            //    videos2.Add(data.Videos.Where(v => v.Id == 1020).First());
                


            //    data.Journals.Add(new Journal()
            //    {
            //        BodyText = text2,
            //        Headline = "Second date added for Hans Zimmer's live show in Dubai in January’",
            //        DesktopImageUrl = "HANS-ZIMMER-FEATURED",
            //        MetaDescription = "",
            //        MetaTitle = "",
            //        MobileImageUrl = "HANS-ZIMMER-FEATURED",
            //        PublishDate = DateTime.Now,
            //        StartPageMaterial = false,
            //        State = State.Published,
            //        RelatedVideos = videos2


            //    });

            //    data.SaveChanges();
            //}
        }

        [WebMethod]
        public static List<Journal> GetJournals()
        {

            using (data data = new data())
            {
                var items = data.Journals.ToList();
                return items;
            }

        }
    }
}
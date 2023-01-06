using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;

namespace Admin
{
    /// <summary>
    /// Summary description for SaveImage
    /// </summary>
    public class SaveImage : IHttpHandler
    {


        public void ProcessRequest(HttpContext context)
        {
    
            string folderPath = context.Server.MapPath($"~/Uploads/");


            // Check that the request is a POST request
            if (context.Request.HttpMethod == "POST")
            {
                // Check that the request contains a file
                if (context.Request.Files.Count > 0)
                {
                    // Get the first file from the request
                    HttpPostedFile file = context.Request.Files[0];

                    // Check that the file is an image file
                    if (file.ContentType.StartsWith("image/"))
                    {
                        // Create a Bitmap object from the file
                        using (Bitmap bitmap = new Bitmap(file.InputStream))
                        {
                            // Process the image as needed...

                            // Save the image to a file or database, or perform some other action
                            string guid = Guid.NewGuid().ToString();

                            ImageFormat imageFormat = null;

                            if (file.ContentType == "image/jpeg")
                            {
                                imageFormat = ImageFormat.Jpeg;
                                bitmap.Save(folderPath + guid + ".jpg", imageFormat);

                            }
                            else
                            {
                                throw new Exception();
                            }


                            context.Response.Write(guid + ".jpg");

                        }
                    }
                    else
                    {
                        // The file is not an image file
                        context.Response.StatusCode = 400;
                        context.Response.Write("Error: The file is not an image file.");
                    }
                }
                else
                {
                    // The request does not contain a file
                    context.Response.StatusCode = 400;
                    context.Response.Write("Error: No file was received.");
                }
            }
            else
            {
                // The request is not a POST request
                context.Response.StatusCode = 405;
                context.Response.Write("Error: The request must be a POST request.");
            }

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
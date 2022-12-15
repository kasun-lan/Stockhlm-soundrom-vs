using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using Google.Apis.Util.Store;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Stockhlm_soundrom_vs
{

    public partial class launching_soon : System.Web.UI.Page
    {
        static string[] Scopes = { SheetsService.Scope.Spreadsheets };
        static string ApplicationName = "Stockholm-Soundrome";
        static SheetsService service;



        public void Page_PreInit(object sender, EventArgs e)
        {


        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static bool EmailExists(string param)
        {
            var line = "";

            var path = HttpContext.Current.Server.MapPath($"data.txt");

            using (StreamReader stream = new StreamReader(path))
            {
                while ((line = stream.ReadLine()) != null)
                {
                    if (param == line.Trim().Split(',').First())
                    {
                        return true;
                    }
                }

                return false;
            }
        }


        /// <summary>
        /// saves email and country to google sheet and data.txt. 
        /// 
        /// </summary>
        /// <param name="email"></param>
        /// <param name="country"></param>
        /// <returns></returns>
        [WebMethod]
        public static bool SaveData(string email, string country)
        {
            var path = HttpContext.Current.Server.MapPath($"data.txt");

            try
            {
                using (StreamWriter sw = new StreamWriter(path, append: true))
                {

                    if (SaveToGooglesheet(email, country))
                    {
                        sw.WriteLine($"{email.Trim()},{country.Trim()}");
                    }

                    return true;
                }

            }
            catch (Exception ex)
            {
                string error_log_file_path = HttpContext.Current.Server.MapPath($"errors.txt");

                using (StreamWriter sw = new StreamWriter(error_log_file_path,append:true))
                {
                    sw.WriteLine($"{DateTime.Now} : P{ex.Message}");
                }
                return false;
            }


        }

        static void init_sheets_service()
        {
            UserCredential credential;


            string jsonFilePath = HttpContext.Current.Server.MapPath("google-sheets-connector.json");

            using (var stream =
                new FileStream(jsonFilePath, FileMode.Open, FileAccess.Read))
            {
                // The file token.json stores the user's access and refresh tokens, and is created
                // automatically when the authorization flow completes for the first time.
                string credPath = HttpContext.Current.Server.MapPath("token.json");
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
                Console.WriteLine("Credential file saved to: " + credPath);
            }

            // Create Google Sheets API service.
            service = new SheetsService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });


        }


        static bool SaveToGooglesheet(string email, string country)
        {

            if (service == null)
            {
                init_sheets_service();
            }

            // stockholm-soundrome sheet in kazdelwatta account
            String spreadsheetId = "1zE0arX_apib7AEY2CXWx5PaPeccbv_MC6UVXkuYREQA";


            String range = "Sheet1!A1:B";
            IList<Object> obj = new List<Object>();
            obj.Add(email);
            obj.Add(country);


            IList<IList<Object>> values = new List<IList<Object>>();
            values.Add(obj);


            SpreadsheetsResource.ValuesResource.AppendRequest request =
                    service.Spreadsheets.Values.Append(new ValueRange() { Values = values }, spreadsheetId, range);
            request.InsertDataOption = SpreadsheetsResource.ValuesResource.AppendRequest.InsertDataOptionEnum.INSERTROWS;
            request.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.RAW;
            var response = request.Execute();
            var sldkjfd = 0;

            if (response.Updates.UpdatedRows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }


    }
}
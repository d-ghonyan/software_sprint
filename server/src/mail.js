import dotenv from 'dotenv'
import Sib from "sib-api-v3-sdk";

dotenv.config();

const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const mail = new Sib.TransactionalEmailsApi();
const sender = {
    email: 'david.ghonyan02@gmail.com',
    name: 'Dve',
}
const receivers = [
    {
        email: 'ghonyaaaan@gmail.com',
    },
];

// mail
//     .sendTransacEmail({
//         sender,
//         to: receivers,
//         subject: 'Subscribe to Cules Coding to become a developer',
//         textContent: `
//         Cules Coding will teach you how to become {{params.role}} a developer.
//         `,
//         htmlContent: `
//         <h1>Cules Coding</h1>
//         <a href="https://cules-coding.vercel.app/">Visit</a>
//                 `,
//         params: {
//             role: 'Frontend',
//         },
//     })
//     .then(console.log)
//     .catch(console.log)

export { mail };

// let defaultClient = SibApiV3Sdk.ApiClient.instance;
// // Instantiate the client\
// let apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = "YOUR_API_V3_KEY";
// let apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// let emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// // Define the campaign settings\
// emailCampaigns.name = "Campaign sent via the API";
// emailCampaigns.subject = "My subject";
// emailCampaigns.sender = {
//   name: "From name",
//   email: "david.ghonyan02@gmail.com",
// };
// emailCampaigns.type = "classic";
// // Content that will be sent\
// let a = {
//   htmlContent:
//     "Congratulations! You successfully sent this example campaign via the Sendinblue API.",
//   // Select the recipients\
//   recipients: { listIds: [2, 7] },
//   // Schedule the sending in one hour\
//   scheduledAt: "2018-01-01 00:00:01",
// };
// // Make the call to the client\
// apiInstance.createEmailCampaign(emailCampaigns).then(
//   function (data) {
//     console.log("API called successfully. Returned data: " + data);
//   },
//   function (error) {
//     console.error(error);
//   }
// );

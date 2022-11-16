

import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    
  }

  send() {

    var payload = {
      "personalizations": [
        {
          "to": [
            {
              "email": "adamus79@gmail.com"
            }
          ],
          "subject": "Hello, World!"
        }
      ],
      "from": {
        "email": "adamus79@gmail.com"
      },
      "content": [
        {
          "type": "text/plain",
          "value": "Hello, World!"
        }
      ]
    };
    var myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer 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",
    });
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    fetch("https://api.sendgrid.com/v3/mail/send",
    {
        method: "POST",
        headers: myHeaders,
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ console.log( JSON.stringify( data ) ) })

//SENDGRID    
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com', // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if ((error as any).response) {
//       console.error((error as any).response.body)
//     }
//   }
// })();


//EMAILJS

  //   const client = new SMTPClient({

  //     host: "smtp-relay.sendinblue.com",
  //     port: 587,
  //     //secure: false, // upgrade later with STARTTLS
  //     user: "adam.nowak.software@gmail.com",
  //     password: "xsmtpsib-812d427d41f3e5b13bbf478f27eddeba29bb3df4070c0d2b70a43e004e6c1140-0A2sGQK7x4NUEZcD",
  //   });
    

  //   client.send({
  //     text:    "Your message body text",
  //     from:    "adamus79@gmail.com",
  //     to:      "adamus79@gmail.com",
  //     subject: "Your message subject",
  //     // attachment:
  //     // [
  //     //    {data:"<html><strong>A bit of HTML text</strong></html>", alternative:true},
  //     //    {path:"user/desktop/file.pdf", type:"application/pdf", name:"renamed.pdf"}
  //     // ]
  //  }, (err, message) => {
  //      if(err)
  //       console.error(err);
  //      else
  //       console.log({success: true, msg: 'sent'});
  //   });

  }
}

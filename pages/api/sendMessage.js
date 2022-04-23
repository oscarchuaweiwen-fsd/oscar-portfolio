import nodemailer from "nodemailer";

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    secure:false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.outlook,
      pass: process.env.password,
    },
  });
  let info = await transporter.sendMail({
    from: '"No Reply 👻" <testingacc98@outlook.com>', // sender address
    to: "oscarchuaweiwen.personal@gmail.com,limjoanne379@gmail.com", // list of receivers
    subject: "Oscar's portfolio responses ✔", // Subject line
    text: "Oscar's portfolio responses", // plain text body
    html: ` <body style="
              display: flex; 
              justify-content: center; 
              align-items: center;">
                <div>
                  Responses from Oscar's portfolio
                  <div>
                    Email address: ${req.body.email}
                  </div>
                  <div>
                  Contact number: ${req.body.contact}
                 
                </div>
                <div>
                Message: ${req.body.message}
               
              </div>
                <div>
              </body>`, // html body
  });

  if (info) {
    res.status(200).json({ messageSent: true });
  }
}

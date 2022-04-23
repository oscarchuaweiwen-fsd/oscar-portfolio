import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log(process.env.GMAIL_PASSWORD,process.env.GMAIL_PASSWORD)
      try {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.GMAIL, // generated ethereal user
            pass: process.env.GMAIL_PASSWORD, // generated ethereal password
          },
        });
        let info = await transporter.sendMail({
            from: '"No Reply 👻" <noreply@example.com>', // sender address
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
    
          if(info){
            res.status(200).json({ messageSent: true })
          }
      } catch (error) {
            res.status(400).json({messageSent:false})
      }
      
   
  }
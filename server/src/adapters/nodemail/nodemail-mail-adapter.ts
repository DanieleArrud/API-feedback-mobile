import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'
     
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "6f93fb763b0fe8",
        pass: "7e146e4db5d496"
        }
    });

export class NodemailMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData) {

   
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feeget.com>',
            to: 'Daniele <dhany.2001@hotmail.com>',
            subject,
            html: body,
         })
    }
    
}
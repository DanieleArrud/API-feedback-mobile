import express from 'express';
import nodemailer from 'nodemailer'
import { NodemailMailAdapter } from './adapters/nodemail/nodemail-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router()


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6f93fb763b0fe8",
      pass: "7e146e4db5d496"
    }
  });

routes.post('/feedbacks', async(req, res)=>{

    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailMailAdapter = new NodemailMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feeget.com>',
    //     to: 'Daniele <dhany.2001@hotmail.com>',
    //     subject: 'Novo feeback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size:16px; color: #111 "`,
    //         `<p>Tiago do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    // ].join('\n')
    // })

    return res.status(201).send();
});
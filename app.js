const nodeMailer = require('nodemailer')

const user = 'Marcos'
const pass = 'pass123'

const send = async () => {
    
    let transporter = nodeMailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass,
        }  
    })

    let response = await transporter.sendMail({
        from: 'Marcos Nacimento <Mark@nacimento.com.br>',
        to: 'example@dark.com',
        subject: 'Olá caro amigo !!!',
        text: 'devMark',
    })
}

send().catch( erro  => { console.log( erro ) })
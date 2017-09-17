const db = require('../../database')
const fs = require('fs')
const mailer = require('nodemailer')
const handlebars = require('handlebars')
const Promise = require('bluebird')

const transporter = mailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
    },
    tls: {
        ciphers: process.env.MAILER_CIPHERS
    }
})

function renderTemplate(dados) {
    let arquivo = fs.readFileSync(__dirname + "/email.hbs", "utf8")
    let template = handlebars.compile(arquivo)
    let mensagem = template(dados)
    return Promise.resolve(mensagem)
}

function mailOptions(email, msg) {
    return Promise.resolve({
        from: process.env.MAILER_USER,
        to: email,
        subject: 'Venda de imóvel no Edifício Marcellus',
        html: msg
    })
}

function send(opt) {
    transporter.sendMail(opt, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    })
    return Promise.resolve()
}

module.exports.send = function (request, reply) {

    var _email = request.payload.mensagem

    return db.Email.forge({ 'id': 1 }).fetch().then((e) => {
        if (!e) {
            return db.Email.forge({
                mensagem: _email
            }).save()
        } else {
            return db.Email.forge({ 'id': 1 }).save({
                mensagem: _email
            })
        }
        return Promise.resolve()
    }).then(() => {

        return db.Imobiliaria.query((qb) => {
            qb.where('status', 'ativo')
            qb.whereNotNull('email')
            qb.select('nome', 'corretor', 'email')
        }).fetchAll()

    }).then((imobs) => {
        var _imobiliarias = imobs.toJSON()

        return Promise.each(_imobiliarias, (i) => {

            let dados = {}

            if (!i.corretor) {
                dados = {
                    nome: i.nome,
                    email: i.email,
                    mensagem: _email
                }
            } else {
                dados = {
                    nome: i.corretor,
                    email: i.email,
                    mensagem: _email
                }
            }

            return renderTemplate(dados).then((template) => {
                return mailOptions(dados.email, template)
            }).then((mail) => {
                return send(mail)
            }).then(() => Promise.resolve())

        })
    }).then(() => reply({ success: true })).catch(err => {
        reply.badImplementation(err)
    })
}

module.exports.get = function (request, reply) {

    return db.Email.forge({ 'id': 1 }).fetch().then((email) => {
        if (!email) {
            reply()
        } else {
            reply(email)
        }

    }).catch(err => {
        reply.badImplementation(err)
    })

}
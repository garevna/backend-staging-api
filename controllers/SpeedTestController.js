/* eslint-disable*/
const BaseController = require('./BaseController')
const speedtest = require('speedtest-net')

class SpeedTestController extends BaseController {
	constructor () {
	  super()
    
	  this.transport = nodemailer.createTransport({
	    host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
	    auth: {
	      user: process.env.GMAIL,
	      pass: process.env.GMAIL_PASS
	    }
	  })
    
	}
  
  validMail (email) {
    return Boolean(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
  }
  
	async sendEmail (params) {
    this.transport.sendMail({
      from: process.env.GMAIL,
      to: params.email,
      subject: params.subject,
      html: params.html
    })
	}
}

module.exports = new EmailController()

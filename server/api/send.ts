import { Resend } from 'resend'

const config = useRuntimeConfig()
const resend = new Resend(config.resendKey)
export default defineEventHandler(async () => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['hamzasuleiman530@gmail.com'],
      subject: 'Im About to Send you an Invite',
      html: '<strong>It works Damn!</strong>',
    })

    if (error) {
      console.error('Resend error:', error)
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: error.message || 'Email failed',
      })
    }

    return data
  }
  catch (error) {
    return error
  }
})

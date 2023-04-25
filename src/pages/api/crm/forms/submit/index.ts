// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HubSpot from '@libs/vendors/hubspot'
import type { NextApiRequest, NextApiResponse } from 'next'

const STATUS = {
  error: 'error',
} as const

const METHOD = {
  post: 'POST',
} as const

type ResponseData = {
  message: string
}
type ResponseError = any

// @todo: clean up to separate controller, consider some async handler to cleanly handle catchs
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData | ResponseError>) {
  if (req.method === METHOD.post) {
    const { formId, formData } = req.body
    try {
      const result = await HubSpot.submitForm(formId, formData)
      if (result.status === STATUS.error) {
        // @todo: redact PII in form data
        // @todo: create error service
        const error = { error: 'Unable to submit form', cause: result, formData }
        console.error('api/forms/submit', error)
        return res.status(500).json(error)
      }
      res.status(200).json({ message: result })
    } catch (err) {
      // @todo: connect to error logger
      const error = { error: 'Unable to submit form', cause: err, formData }
      console.error('api/forms/submit', error)
      return res.status(500).json(error)
    }
  }
}

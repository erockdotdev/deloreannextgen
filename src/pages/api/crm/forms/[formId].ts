import HubSpot from '@libs/vendors/hubspot'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  forms: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { formId } = req.query
  const forms = await HubSpot.getForm(formId as string)
  res.status(200).json({ forms: forms })
}

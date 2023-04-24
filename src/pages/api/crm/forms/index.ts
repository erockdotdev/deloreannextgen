// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HubSpot from '@libs/vendors/hubspot'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  forms: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const forms = await HubSpot.getForms()
  res.status(200).json({ forms: forms })
}

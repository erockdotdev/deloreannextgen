//www.npmjs.com/package/@hubspot/api-client

import * as hubspot from '@hubspot/api-client'

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
  developerApiKey: process.env.HUBSPOT_DEVELOPER_API_KEY,
  numberOfApiCallRetries: 3,
})

export interface IHubSpotClient {
  client: hubspot.Client
}

class HubSpotClient implements IHubSpotClient {
  client
  // @todo- make singleton
  constructor({ client }: IHubSpotClient) {
    this.client = client
  }
  async getContacts() {
    try {
      const response = await hubspotClient.apiRequest({
        method: 'get',
        path: '/crm/v3/objects/contacts',
      })
      const json = await response.json()
      return json
    } catch (error) {
      // @todo: add error cause and error tracking
      console.error(error)
    }
  }
}

const HubSpot = new HubSpotClient({ client: hubspotClient })

export default HubSpot

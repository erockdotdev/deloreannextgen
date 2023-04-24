//www.npmjs.com/package/@hubspot/api-client

// other docs seem to be bs but these instructions work for getting form data: https://developers.hubspot.com/docs/api/marketing/forms
// this works for submitting a form : https://legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication#:~:text=As%20this%20API%20is%20authenticated%2C
import * as hubspot from '@hubspot/api-client'

//basePath: 'https://some-url'
//defaultHeaders: { 'My-header': 'test-example' },

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
  numberOfApiCallRetries: 3,
})

const hubspotFormClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
  numberOfApiCallRetries: 3,
  basePath: 'https://api.hsforms.com',
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
      const response = await this.client.apiRequest({
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
  async getForms() {
    try {
      const response = await this.client.apiRequest({
        method: 'GET',
        path: '/marketing/v3/forms/',
      })
      const json = await response.json()
      return json
    } catch (e) {
      console.error('error', e)
    }
  }

  async getForm(formId: string) {
    try {
      const response = await this.client.apiRequest({
        method: 'GET',
        path: `/marketing/v3/forms/${formId}`,
      })
      const json = await response.json()
      return json
    } catch (e) {
      console.error('error', e)
    }
  }
  async submitForm(formId = '7163a57c-db99-441b-bccb-566b85c110c6', formData?: any) {
    var data = {
      submittedAt: new Date(),
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: 'eric.test7@dngmotors.com',
        },
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: 'eric23',
        },
        {
          objectTypeId: '0-1',
          name: 'interested_in',
          value: 'DNG Motors',
          // defaultValues: ['DNG Motors'],
        },
      ],
    }
    try {
      const response = await hubspotFormClient.apiRequest({
        method: 'POST',
        // var url = 'https://api.hsforms.com/submissions/v3/integration/secure/submit/62515/fcc69886-915b-4fef-b35f-27850ef461e1?hapikey=demo'
        path: `/submissions/v3/integration/secure/submit/${process.env.HUBSPOT_PORTAL_ID}/${formId}`,
        body: data,
      })
      const json = await response.json()
      return json
    } catch (e) {
      console.error('error', e)
    }
  }
}

const HubSpot = new HubSpotClient({ client: hubspotClient })

export default HubSpot

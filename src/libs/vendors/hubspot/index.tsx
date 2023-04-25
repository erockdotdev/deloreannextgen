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
  formClient: hubspot.Client
}

/**
 * Server Client
 * @todo: using hubspotFormClient directly for now should pass as props
 */
// class HubSpotClient implements IHubSpotClient {
class HubSpotClient {
  // client: hubspot.Client
  // formClient: hubspot.Client
  // constructor({ client, formClient }: IHubSpotClient) {
  constructor() {
    // this.client = client
    // this.formClient = formClient
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
  async getForms() {
    try {
      const response = await hubspotClient.apiRequest({
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
      const response = await hubspotClient.apiRequest({
        method: 'GET',
        path: `/marketing/v3/forms/${formId}`,
      })
      const json = await response.json()
      return json
    } catch (e) {
      console.error('error', e)
    }
  }

  async submitForm(formId: string, formData: any) {
    try {
      const response = await hubspotFormClient.apiRequest({
        method: 'POST',
        path: `/submissions/v3/integration/secure/submit/${process.env.HUBSPOT_PORTAL_ID}/${formId}`,
        body: formData,
      })
      return await response.json()
    } catch (err) {
      // @todo: connect to error logger
      console.error('HubSpotClient Error:', err)
      return err
    }
  }
}

const HubSpot = new HubSpotClient()

export default HubSpot

import HubSpot, { IHubSpotClient } from '@libs/vendors/hubspot'
// watch solid principal video again for dependency injection
interface ICrmClient {
  getForm: () => void
  getAllForms: () => void
  submitForm: () => void
}
class CrmClient<T> {
  client: T
  constructor(client: T) {
    this.client = client
  }
  getForm() {}
  getAllForms() {
    this.client
  }
  submitForm() {
    return
  }
}

const crmClient = new CrmClient<IHubSpotClient>(HubSpot)

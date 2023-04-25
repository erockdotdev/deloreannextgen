type MailingListFormData = {
  [k: string]: string
}

type HubSpotField = {
  objectTypeId: string
  name: string
  value: string
  defaultValues?: string[]
}

export type HubSpotForm = {
  submittedAt: Date
  fields: HubSpotField[]
}

// this could be redone to match preset field keys with ids on incoming data to work with any form
export const transformFormDataToHubSpotFormat = (formData: MailingListFormData): HubSpotForm => {
  const hubSpotForm = {
    submittedAt: new Date(),
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: formData.email,
      },
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: formData.firstName,
      },
      {
        objectTypeId: '0-1',
        name: 'interested_in',
        value: 'DNG Motors',
        // defaultValues: ['DNG Motors'],
      },
    ],
  }
  return hubSpotForm
}

import axios, { AxiosInstance } from 'axios'

// type formType = 'DNG_ML' | 'DNGM_ML' | 'DLP_ML'

/**
 * ever site needs
 * about
 * contact
 *
 */

// site config
// const Sites = {
//   deloreannextgeneration: {
//     root: {
//       name: 'DeLorean Next Generation',
//       description: 'Root page for DNG sites',
//       subdomain: 'dng',
//       mailingList: true,
//     },
//     motors: {
//       name: 'DNG Motors',
//       description: 'Marketing site for DNG Motors',
//       subdomain: 'motors',
//       mailingList: true,
//     },
//     partners: {
//       name: 'DNG Partners',
//       description: 'Partner Relations',
//       subdomain: 'partners',
//     },
//     programs: {
//       name: 'DNG Programs',
//       description: 'Marketing site to showcase education programs',
//       subdomain: 'programs',
//     },
//     legacy: {
//       name: 'Legacy',
//       description: 'Marketing for non DeLorean legacy programs',
//       subdomain: 'legacy',
//     },
//     style: {
//       name: 'DeLorean Style',
//       description: 'DeLorean Style Marketing page',
//       subdomain: 'terms',
//     },
//     shop: {
//       name: 'Shop DeLorean',
//       description: 'e-commerce platform for purchasing DNG related merchandized & services',
//       subdomain: 'shop',
//     },
//     terms: {
//       name: 'Terms',
//       description: 'Dedicate page for DNG legal pages',
//       subdomain: 'terms',
//     },
//   },
//   deloreanlegacyproject: {
//     root: {
//       name: 'DeLorean Legacy Project',
//       description: 'DeLorean Legacy Project',
//       subdomain: 'dlp',
//       mailingList: true,
//     },
//     tmp: {
//       name: 'The Missing Pieces',
//       description: 'DeLorean Legacy Project',
//       subdomain: 'dlp',
//       mailingList: true,
//     },
//     terms: {
//       name: 'Terms',
//       description: 'Dedicate page for DLP legal pages',
//       subdomain: 'terms',
//     },
//   },
// }

// const ThirdParty: {
//   cms: {
//     vendor: 'Contentful'
//     url: 'https://app.contentful.com'
//     locals: []
//   }
//   crm: {
//     vendor: 'Hubspot'
//     url: 'https://app.hubspot.com/'
//     locals: []
//   }
//   ecomm: {
//     vendor: 'Shopify'
//     url: 'https://mystore.shopify.com/'
//   }
// }

/**
 * Auth
 * probably wont have sso right away
 */

/**
 * Costs
 */

/**
 
 * https://auth0.com/docs/manage-users/access-control/rbac
 * 
 * portal sites(cms) - 
 *  content-admin - update space settings and all else
 *  content-editor - can create, edit, publish, archive and delete all content in a space.
 *  content-author - can create and edit all content in a space, but cannot publish it. // can preview
 *  
 * portal portal -
 * 
 *  partner
 *      |- org or person
 * 
 *  program-super-admin
 *  program-admin
 *  program-coordinator
 * 
 *  organization
 *   |- program
 * 
 * admin
 */

// https://schema.org/address
// type Address = {
//   type: 'PostalAddress'
//   streetAddress: string
//   postOfficeBoxNumber?: string
//   addressLocality: string // city
//   addressRegion: string // state
//   postalCode: string
//   addressCountry: string // need country codes
// }

// type Profile = {}

// const Roles = {
//   DNG_M: 'admin',
//   Writer: 'writer',
//   Reader: 'reader',
// } as const

// const SocialMedia = {
//   WEB: 'website',
//   INSTA: 'instagram',
//   FB: 'facebook',
//   TIKTOK: 'tiktok',
//   TWITCH: 'twitch',
// } as const

// type SocialMedia = {
//     website: string
//     instagram: string,
//     facebook: string,
//     tiktok: string,
//     twitter: string,
//     twitch: string,
//     youtube: string,
//     reddit: string,
//     linktree: string,
// }
// type User = {
//   name: string
//   lastName: string
//   email: string
//   phoneNumber: string
//   birthDate: string // date
// }

// type AccountProfile = {
//   website: string
//   socialAccounts: typeof SocialMedia
// }
// type Group = {
//   name: string
//   description: string
//   domain: string
//   industry: string
//   url: string
// }

/**
 * Who are the users of the platform
 *
 * account portal for DNG/DLP employees
 *
 * account portal for people using our services
 * general account
 * - user (user info) name, address, avatar
 * - collective (organization/company) has own profile
 * - scopers
 * , program creators, program consumers, dlp contributors
 */
/**
 *
 *
 * partners - can be org or individual
 *  - education
 *      - some profile page
 *      - create - programs
 *  - investor
 *       - some profile page
 *  - marketing
 *       - some profile page
 *  - donors
 *
 * users
 *  - education: participants
 *  - dlp: contributors
 *  - shop customers
 *  -
 */

// const apps = {
//     portal:{
//         cms: {
//             scopes: ['content-editor']
//         }
//     }
// }

// const MAILING_LISTS = {

// } as const

// const FORMS = {
//     PARTNER: "PARTNER",
//     INFLUENCER: "INFLUENCER",
//     INVESTOR: "INVESTOR",
//     DNG:
// }

// const CONTACT

// const Roles = {
//   DNG_M: "admin",
//   Writer: "writer",
//   Reader: "reader"
// } as const;

// interface IClientAPI {

// }

const submitFormURL = '/api/crm/forms/submit'

export const FormIds = {
  mailingList: '7163a57c-db99-441b-bccb-566b85c110c6',
}

//'7163a57c-db99-441b-bccb-566b85c110c6'
const nextApiRoutes = {
  submitFormURL: '/api/crm/forms/submit',
}

class ClientAPI {
  private client: AxiosInstance
  constructor(client: AxiosInstance) {
    this.client = client
  }
  async submitForm<T, R>(formId: string, formData: T) {
    try {
      const response = await this.client.post<T, R>(nextApiRoutes.submitFormURL, { formId, formData })
      return response
    } catch (error: any) {
      console.error('Error: ClientAPI > submitForm', error)
      return error.response.data
    }
  }
}

// axios request configs https://www.npmjs.com/package/axios#creating-an-instance:~:text=axios%23getUri(%5Bconfig%5D)-,Request%20Config,-These%20are%20the
// https://www.npmjs.com/package/axios#creating-an-instance
//  baseURL: 'https://some-domain.com/api/',
//  headers: { 'X-Custom-Header': 'foobar' },
const instance = axios.create({
  // serialize data
  // retries
  responseType: 'json',
})
const clientAPI = new ClientAPI(instance)

export default clientAPI

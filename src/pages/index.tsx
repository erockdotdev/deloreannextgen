/* eslint-disable react/no-unescaped-entities */
/* mui font color https://stackoverflow.com/questions/50228108/change-textfield-font-color-in-mui */
//mui.com/material-ui/react-text-field/#customized-inputs
// createTheme with MUI

import Head from 'next/head'

import { Button } from '@libs/ui/user-actions/Button'
import { TextField, Container, Stack, Grid } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import clientAPI, { FormIds } from '@libs/services/client-api'
import { HubSpotForm, transformFormDataToHubSpotFormat } from '@libs/services/client-api/libs/utils/formatMailingList'
import { useEffect, useState } from 'react'

// break out to libs
const background = 'assets/images/model-jzd.jpeg'

type FormValues = {
  firstName: string
  email: string
}

type MailingListResponse = {
  inlineMessage: string
}

export default function Home() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    firstName: Yup.string().required('First Name is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(formOptions)

  const [isLoading, setIsLoading] = useState(false)
  // need to handle form response for both success and failure. I should probably unify those data shapes
  const [formResponse, setFormResponse] = useState<any>({})
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    console.log('@@formResponse', formResponse)
    if (formResponse?.data?.message?.inlineMessage) {
      setFormSuccess(true)
    } else if (formResponse.error) {
      setFormError(true)
    }

    setIsLoading(false)
  }, [formResponse])

  const onSubmit: SubmitHandler<FormValues> = async (formData: FormValues) => {
    setIsLoading(true)
    setFormError(false)
    setFormSuccess(false)
    const hubSpotFormattedFormData = transformFormDataToHubSpotFormat(formData)
    const response = await clientAPI.submitForm<HubSpotForm, MailingListResponse>(
      FormIds.mailingList,
      hubSpotFormattedFormData,
    )
    setFormResponse(response)
  }

  return (
    <>
      <Head>
        <title>DeLorean Next Generation</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <Container maxWidth='lg'>
          {/* mailing list form  */}
          <section>
            <Container
              maxWidth='lg'
              sx={{
                paddingTop: 15,
                color: 'white',
                backgroundColor: 'transparent',
              }}
            >
              {/* left side text */}
              <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={6}>
                  <div style={{ padding: '10px 15px' }}>
                    <h1 style={{ fontSize: '44px' }}>The Dream Never Died</h1>
                    <p style={{ padding: '15px 0', lineHeight: '20px' }}>
                      Keep up with the latest DNG news by signing up for the DeLorean Next Generation Newsletter.
                    </p>

                    <section id='social-icons'>
                      <a href='https://www.instagram.com/deloreannextgenmotors' target='_blank'>
                        instagram
                      </a>{' '}
                      |{' '}
                      <a href='https://www.facebook.com/deloreannextgenerationmotors' target='_blank'>
                        facebook
                      </a>{' '}
                      | <a href='mailto:info@deloreannextgen.com'>contact</a>
                    </section>
                  </div>
                </Grid>
                {/* right side form */}

                <Grid item sm={12} md={6} lg={6}>
                  {!formSuccess && (
                    <section style={{ padding: '10px 15px' }}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                          <TextField
                            id='mailing-list-name'
                            label='First Name'
                            variant='filled'
                            sx={{ background: 'white', marginBottom: '10px' }}
                            InputLabelProps={{
                              style: { color: 'black' },
                            }}
                            {...register('firstName', { required: true })}
                          />
                          {errors.firstName && <div className='form-error'>{errors.firstName?.message}</div>}
                          <TextField
                            id='mailing-list-email'
                            label='Email Address'
                            variant='filled'
                            sx={{ background: 'white', marginBottom: '10px' }}
                            InputLabelProps={{
                              style: { color: 'black' },
                            }}
                            {...register('email', { required: true })}
                          />
                          {errors.email && <div className='form-error'>{errors.email?.message}</div>}
                          <Button type='submit'>Subscribe</Button>
                          {formError && (
                            <span>Sorry, we're unable to add you to our mailing list, please try again</span>
                          )}
                          <span style={{ textAlign: 'center' }}>We respect your privacy. Unsubscribe at any time.</span>
                        </Stack>
                      </form>
                    </section>
                  )}
                  {/* 
                  - would be nice to show instagram with link to follow account after submitting 
                  - it would also be good to control the submit view with a cookie and a query param
                          - if they have the cookie then redirect to submit success view
                          - should have an option to submit another email
                  - we should also check if they are already on the list
                  - we need a dedicated update/unsubscribe page that shows a user all the mailing lists they are on
                  */}
                  {formSuccess && <span style={{ textAlign: 'center' }}>Thanks for joining our mailing list!</span>}
                </Grid>
              </Grid>
            </Container>
          </section>
        </Container>
      </div>
    </>
  )
}

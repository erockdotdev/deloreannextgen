/* eslint-disable react/no-unescaped-entities */
/* mui font color https://stackoverflow.com/questions/50228108/change-textfield-font-color-in-mui */
//mui.com/material-ui/react-text-field/#customized-inputs
// createTheme with MUI

import Head from 'next/head'

import { Button } from '@libs/components/user-actions/Button'
import { TextField, Container, Stack, Grid, Box } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import clientAPI, { FormIds } from '@libs/services/client-api'
import { HubSpotForm, transformFormDataToHubSpotFormat } from '@libs/services/client-api/libs/utils/formatMailingList'
import { useEffect, useState } from 'react'

import Footer from '@libs/components/modules/Footer'
import SocialLinks from '@libs/components/modules/SocialLinks'
import styled from '@emotion/styled'
import Link from 'next/link'

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
    setFocus,
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

  useEffect(() => {
    setFocus('firstName')
  }, [setFocus])

  const SpinnerStyles = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    .loader {
      width: 30px;
      height: 30px;
      border: 3px solid #fff;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
  const Spinner = () => (
    <SpinnerStyles>
      <span className='loader'></span>
    </SpinnerStyles>
  )

  const headlines = ['where were you?', 'Dream DeLorean.', 'The Dream Never Died']

  return (
    <div style={{ minHeight: '100vh' }}>
      <Head>
        <title>DeLorean Next Generation</title>
        <meta name='description' content='DeLorean is back in the Motor City' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='page'>
        <div
          style={{
            backgroundSize: 'cover',
            position: 'absolute',
            opacity: '0.4',
            backgroundColor: '#001101',
            zIndex: '1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        <div
          style={{
            background: `url(${background}) no-repeat center`,
            backgroundSize: 'cover',
            position: 'absolute',
            opacity: '0.4',
            backgroundColor: '#001101',
            zIndex: '1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: '100%',
          }}
        />

        <main style={{ position: 'relative', minHeight: '90vh', justifyContent: 'center', display: 'flex' }}>
          <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <section style={{ position: 'relative', zIndex: '2' }}>
              {/* mailing list form  */}
              <Container
                maxWidth='lg'
                sx={{
                  color: 'white',
                  backgroundColor: 'transparent',
                }}
              >
                {/* left side text */}
                <Grid container spacing={2}>
                  <Grid item sm={12} md={6} lg={6}>
                    <div style={{ padding: '10px 0 15px 0' }}>
                      <span
                        style={{
                          fontFamily: 'Saira',
                          fontWeight: 'light',
                          fontSize: '.9em',
                          marginBottom: '15px',
                          WebkitBoxDecorationBreak: 'clone',
                        }}
                      >
                        DELOREAN NEXT GENERATION
                      </span>
                      <p
                        style={{
                          position: 'relative',
                          fontSize: '44px',
                          textAlign: 'left',
                          fontFamily: 'IBMPlexSans',
                          fontWeight: 700,
                          letterSpacing: '1px',
                          lineHeight: '44px',
                          marginTop: '10px',
                          left: '-2px',
                        }}
                      >
                        Dream DeLorean.
                      </p>
                      <p style={{ padding: '15px 0', lineHeight: '20px' }}>
                        Keep up with the latest by signing up for the DeLorean Next Generation Newsletter.
                      </p>
                      <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
                        <SocialLinks />
                      </Box>
                    </div>
                  </Grid>
                  {/* right side form */}
                  <Grid item sm={12} md={6} lg={6} sx={{ flexBasis: '100%' }}>
                    {!formSuccess && (
                      <section style={{ padding: '10px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <Stack>
                            <div className='field-container' style={{ marginBottom: '10px' }}>
                              <TextField
                                id='mailing-list-name'
                                autoFocus
                                label='First Name'
                                variant='filled'
                                sx={{ background: 'white', width: '100%' }}
                                InputLabelProps={{
                                  style: { color: 'black' },
                                }}
                                {...register('firstName', { required: true })}
                              />
                              <div style={{ minHeight: '21px', color: 'red', fontSize: '14px' }} className='form-error'>
                                {errors.firstName && errors.firstName?.message}
                              </div>
                            </div>
                            <div className='field-container' style={{ marginBottom: '10px' }}>
                              <TextField
                                id='mailing-list-email'
                                label='Email Address'
                                variant='filled'
                                sx={{ background: 'white', width: '100%' }}
                                InputLabelProps={{
                                  style: { color: 'black' },
                                }}
                                {...register('email', { required: true })}
                              />

                              <div style={{ minHeight: '21px', color: 'red', fontSize: '14px' }} className='form-error'>
                                {errors.email && errors.email?.message}
                              </div>
                            </div>
                            <Button
                              sx={{
                                '&.MuiButton-root': { bgcolor: '#8B0000' },
                                '&.MuiButton-root:hover': { bgcolor: '#ff0000' },
                              }}
                              type='submit'
                            >
                              {!isLoading ? 'Subscribe' : <Spinner />}
                            </Button>
                            {formError && (
                              <span>Sorry, we're unable to add you to our mailing list, please try again</span>
                            )}
                            <span style={{ textAlign: 'center', marginBottom: '15px' }}>
                              By joining our mailing list, you agree to our{' '}
                              <Link href='/terms'>
                                <u>Terms of Service</u>
                              </Link>
                              .
                            </span>
                          </Stack>
                        </form>
                        <Box
                          sx={{
                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'block' },
                          }}
                        >
                          <SocialLinks />
                        </Box>
                      </section>
                    )}
                    {formSuccess && (
                      <section
                        style={{
                          padding: '10px 15px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                        }}
                      >
                        <h2 style={{ textAlign: 'center' }}>Thanks for joining our mailing list!</h2>
                      </section>
                    )}
                  </Grid>
                </Grid>
              </Container>
            </section>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  )
}

{
  /* 
                  - would be nice to show instagram with link to follow account after submitting 
                  - it would also be good to control the submit view with a cookie and a query param
                          - if they have the cookie then redirect to submit success view
                          - should have an option to submit another email
                  - we should also check if they are already on the list
                  - we need a dedicated update/unsubscribe page that shows a user all the mailing lists they are on
                  */
}

/* eslint-disable react/no-unescaped-entities */
/* mui font color https://stackoverflow.com/questions/50228108/change-textfield-font-color-in-mui */
//mui.com/material-ui/react-text-field/#customized-inputs
// createTheme with MUI

import Head from 'next/head'

import { Button } from '@libs/ui/user-actions/Button'
import { TextField, Container, Stack, Grid, Box } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import clientAPI, { FormIds } from '@libs/services/client-api'
import { HubSpotForm, transformFormDataToHubSpotFormat } from '@libs/services/client-api/libs/utils/formatMailingList'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { RiFacebookLine, RiInstagramLine } from 'react-icons/ri'
import { IoIosMail } from 'react-icons/io'
import { IconContext } from 'react-icons'

const StyledLink = styled('a')`
  border-radius: 5%;
  color: white;
  &:hover {
    color: white;
    filter: brightness(2);
  }
`

const SocialLinks = () => (
  <section id='social-icons' style={{ display: 'flex', justifyContent: 'center' }}>
    <StyledLink href='https://www.instagram.com/deloreannextgenmotors' target='_blank'>
      <div
        style={{
          marginRight: '15px',
          background: 'black',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <IconContext.Provider value={{ size: '2.5em' }}>
          <RiInstagramLine />
        </IconContext.Provider>
      </div>
    </StyledLink>
    <StyledLink href='https://www.facebook.com/deloreannextgenerationmotors' target='_blank'>
      <div
        style={{
          marginRight: '15px',
          background: 'black',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <IconContext.Provider value={{ size: '2.5em' }}>
          <RiFacebookLine />
        </IconContext.Provider>
      </div>
    </StyledLink>

    <StyledLink href='mailto:media@dngmotors.com'>
      <div
        style={{
          marginRight: '15px',
          background: 'black',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <IconContext.Provider value={{ size: '2em' }}>
          <IoIosMail />
        </IconContext.Provider>
      </div>
    </StyledLink>
  </section>
)

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

  const date = new Date()

  return (
    <>
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
        <Head>
          <title>DeLorean Next Generation</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main style={{ position: 'relative', minHeight: '88vh', justifyContent: 'center', display: 'flex' }}>
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
                    <div style={{ padding: '10px 15px' }}>
                      <p
                        style={{
                          fontFamily: 'Saira',
                          fontWeight: 'light',
                          backgroundColor: 'black',
                          display: 'inline-block',
                          padding: '3px 5px',
                          fontSize: '1em',
                          marginBottom: '15px',
                        }}
                      >
                        DELOREAN NEXT GENERATION
                      </p>
                      <p
                        style={{
                          position: 'relative',

                          fontSize: '44px',
                          textAlign: 'left',
                          fontFamily: 'IBMPlexSans',
                          fontWeight: 700,
                          letterSpacing: '1px',
                          lineHeight: '44px',
                        }}
                      >
                        Dream DeLorean.
                      </p>
                      <p style={{ padding: '15px 0', lineHeight: '20px' }}>
                        Keep up with the latest by signing up for the DeLorean Next Generation Newsletter.
                      </p>
                      <Box sx={{ display: { md: 'inline-block', sm: 'none', xs: 'none' } }}>
                        <SocialLinks />
                      </Box>
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
                            <Button
                              sx={{
                                '&.MuiButton-root': { bgcolor: '#8B0000' },
                                '&.MuiButton-root:hover': { bgcolor: '#ff0000' },
                              }}
                              type='submit'
                            >
                              Subscribe
                            </Button>
                            {formError && (
                              <span>Sorry, we're unable to add you to our mailing list, please try again</span>
                            )}
                            <span style={{ textAlign: 'center', marginBottom: '15px' }}>
                              We respect your privacy. Unsubscribe at any time.
                            </span>
                          </Stack>
                        </form>
                        <Box sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'inline-block' } }}>
                          <SocialLinks />
                        </Box>
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
        </main>
        <footer
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: '15px 0',
            textAlign: 'center',
            lineHeight: '22px',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <p> Proudly built in the Motor City</p>
          <p style={{ fontSize: '15px' }}>©{date.getFullYear()} DeLorean Next Generation: A DeLorean Family Company</p>
        </footer>
      </div>
    </>
  )
}

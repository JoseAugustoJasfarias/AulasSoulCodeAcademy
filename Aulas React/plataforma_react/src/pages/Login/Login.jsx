import {
  Button,
  Form,
  Container,
  ToastContainer,
  Toast,
  ToastHeader,
  ToastBody
} from 'react-bootstrap';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCardImage
} from 'mdb-react-ui-kit';

export function Login() {
  const [email, SetEmail] = useState('');
  const [senha, SetSenha] = useState('');

  return (
    <>
      {/* <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: 'hsl(218, 81%, 95%)' }}
            >
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}

      {/*  <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn floating tag="a" className="me-2">
                <MDBIcon fab icon="google" size="md" />
              </MDBBtn>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{' '}
                <a href="#!" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>

          <div>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: 'white' }}
            >
              <MDBIcon fab icon="facebook-f" size="md" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: 'white' }}
            >
              <MDBIcon fab icon="twitter" size="md" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: 'white' }}
            >
              <MDBIcon fab icon="google" size="md" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: 'white' }}
            >
              <MDBIcon fab icon="linkedin-in" size="md" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer> */}

      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: '#ff6219' }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: '1px' }}
                >
                  Entre com a sua conta
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  onClick={signIn}
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                >
                  Login
                </MDBBtn>

                <div>
                  <MDBBtn tag="a" className="mx-3" style={{ color: 'white' }}>
                    <MDBIcon fab icon="facebook-f" size="md" />
                  </MDBBtn>

                  <MDBBtn tag="a" className="mx-3" style={{ color: 'white' }}>
                    <MDBIcon fab icon="twitter" size="md" />
                  </MDBBtn>

                  <MDBBtn tag="a" className="mx-3" style={{ color: 'white' }}>
                    <MDBIcon fab icon="google" size="md" />
                  </MDBBtn>

                  <MDBBtn tag="a" className="mx-3" style={{ color: 'white' }}>
                    <MDBIcon fab icon="linkedin-in" size="md" />
                  </MDBBtn>
                </div>
                <a className="small text-muted" href="#!">
                  Esqueceu a Senha?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Não tem conta?{' '}
                  <a href="#!" style={{ color: '#393f81' }}>
                    Registre se aqui
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Termos de uso
                  </a>
                  <br />
                  <br />
                  <a href="#!" className="small text-muted">
                    Politica de Privacidade
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <ToastContainer>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={4000}
            autohide
          >
            <Toast.Header>
              <strong>E-mail ou senha inválido!</strong>
            </Toast.Header>
            <Toast.Body>Verifique o e-mail e senha digitado</Toast.Body>
          </Toast>
        </ToastContainer>
      </MDBContainer>
    </>
  );
}

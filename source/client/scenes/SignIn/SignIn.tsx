import React from 'react'
import { Row, Col, Form, Input, Button, Divider, Checkbox, Typography } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { flow } from 'lodash'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Meta from '@client/components/Meta/Meta'

import SignInMutation from '@client/queries/SignIn.graphql'

import oAuthEndpoints from '@client/data/oAuthEndpoints'


interface SignInResponse {
  email: string
}

interface SignInProps {
  email: string
  password: string
}

interface Props extends FormComponentProps, RouteComponentProps {
  signIn: (props: SignInProps) => Promise<any>
}


const SignIn = ({
  signIn,

  form: { getFieldDecorator, validateFieldsAndScroll },
  history: { push },
}: Props) =>
  <>
    <Meta title='Home' />

    <Row type='flex' justify='center'>
      <Col span={5}>
        <Form
          onSubmit={event => {
            event.preventDefault()

            validateFieldsAndScroll(async (error, values) => {
              if (error) return

              try {
                const { data: { signIn: { token } } } = await signIn(values)
                localStorage.token = token
              } catch (error) { }
            })
          }}
        >
          <Form.Item label='Email'>
            {getFieldDecorator('email', {
              initialValue: '',
              rules: [
                { type: 'email', message: 'Incorrect email' },
                { required: true, message: 'Required field' },
              ],
            })(<Input type='email' />)}
          </Form.Item>
          <Form.Item label='Password'>
            {getFieldDecorator('password', {
              initialValue: '',
              rules: [
                { required: true, message: 'Required field' },
              ],
            })(<Input type='password' />)}
          </Form.Item>
          <Form.Item>
            <Row type='flex' justify='space-between'>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember Me</Checkbox>)}

              <Link to='/forgot-password'>
                Forgot Password
              </Link>
            </Row>

            <Button type='primary' htmlType='submit' block>Sign In</Button>
          </Form.Item>
        </Form>

        <Divider>or</Divider>

        {oAuthEndpoints.map(({ name, icon: Icon, url }) => (
          <Form.Item key={name}>
            <Button block onClick={() => location.href = url}>
              <Row type='flex' justify='center' align='middle' gutter={10}>
                <Col>
                  <Row type='flex' align='middle'>
                    <Icon />
                  </Row>
                </Col>
                <Col>
                  <span>Continue With {name}</span>
                </Col>
              </Row>
            </Button>
          </Form.Item>
        ))}

        <Form.Item>
          <Button block onClick={() => push('/sign-up')}>
            <Row type='flex' justify='center' align='middle' gutter={10}>
              <Col>
                <Row type='flex' align='middle'>
                  <FaEnvelope />
                </Row>
              </Col>
              <Col>
                <span>Continue With Email</span>
              </Col>
            </Row>
          </Button>
        </Form.Item>

        <Divider />

        <Typography.Paragraph type='secondary'>
          This site is protected by reCAPTCHA and the Google
          <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'> Privacy Policy </a>
          and
          <a href='https://policies.google.com/terms' target='_blank' rel='noopener noreferrer'> Terms of Service </a>
          apply.
        </Typography.Paragraph>
      </Col>
    </Row>
  </>


export default flow([
  Form.create(),
  graphql<{}, SignInResponse, {}, any>(gql(SignInMutation), {
    props: ({ mutate }) => ({
      signIn: variables => mutate({ variables }),
    }),
  }),
  withRouter,
  hot(module),
])(SignIn)

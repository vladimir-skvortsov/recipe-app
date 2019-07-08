import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { flow } from 'lodash'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Meta from '@client/components/Meta/Meta'

import SignUpMutation from '@client/queries/SignUp.graphql'

import { setUser } from '@shared/actions/user/user'


interface SignUpResponse {
  email: string
}

interface SignUpProps {
  email: string
  password: string
}

interface Props extends FormComponentProps {
  signUp: (props: SignUpProps) => Promise<any>
  setUser: typeof setUser
}


const SignUp = ({
  signUp,
  setUser,

  form: { getFieldDecorator, validateFieldsAndScroll },
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
                const { data: { signUp: userData } } = await signUp(values)

                setUser(userData)
              } catch (error) {
                if (process.env.NODE_ENV !== 'production') console.error(error)
              }
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
            <Button type='primary' htmlType='submit' block>Sign Up</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>


const mapDispatchToProps = dispatch => ({
  setUser: payload => dispatch(setUser(payload)),
})


export default flow([
  Form.create(),
  graphql<{}, SignUpResponse, {}, any>(gql(SignUpMutation), {
    props: ({ mutate }) => ({
      signUp: variables => mutate({ variables }),
    }),
  }),
  connect(null, mapDispatchToProps),
  hot(module),
])(SignUp)

import React from 'react'
import { Row, Col } from 'antd'

import Meta from '@client/components/Meta/Meta'


const ErrorPlaceholder = () =>
  <>
    <Meta title='Internal error' />

    <Row>
      <Col span={24}>
        <h1>Internal error</h1>
      </Col>
    </Row>
  </>


export default ErrorPlaceholder
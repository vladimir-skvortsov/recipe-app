import React from 'react'
import { Row, Col } from 'antd'
import { hot } from 'react-hot-loader'

import Meta from '@client/components/Meta/Meta'


const NotFound = () =>
  <>
    <Meta title='Page not found' robots='noindex, nofollow' />

    <Row>
      <Col span={24}>
        <h1>Page not found</h1>
      </Col>
    </Row>
  </>


export default hot(module)(NotFound)
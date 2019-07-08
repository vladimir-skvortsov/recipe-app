import React from 'react'
import { Row, Col } from 'antd'

import Meta from '@client/components/Meta/Meta'


const LoadingPlaceholder = () =>
  <>
    <Meta title='Loading' />

    <Row>
      <Col span={24}>
        <h1>Loading...</h1>
      </Col>
    </Row>
  </>


export default LoadingPlaceholder
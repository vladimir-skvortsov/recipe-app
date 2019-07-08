import React from 'react'
import { Row, Col } from 'antd'
import { hot } from 'react-hot-loader'

import Meta from '@client/components/Meta/Meta'


const Home = () =>
  <>
    <Meta title='Home' />

    <Row>
      <Col span={24}>
        <h1>Home</h1>
      </Col>
    </Row>
  </>


export default hot(module)(Home)
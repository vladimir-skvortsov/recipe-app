import React from 'react'
import { Row, Col, Tooltip, Typography } from 'antd'

import { Container, Copyright } from './Footer.styles'

import socialMedia from '@client/data/socialMedia'


const Footer = () =>
  <Container>
    <Row type='flex' justify='space-between'>
      <Col>
        <Copyright>© 2019 All Rights Reserved</Copyright>
      </Col>

      <Col>
        <Row type='flex' gutter={20}>
          {socialMedia.map(({ name, icon: Icon, url }) => (
            <Col key={name}>
              <Tooltip title={name}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <Typography.Text>
                    <Icon />
                  </Typography.Text>
                </a>
              </Tooltip>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>


export default Footer

import React from 'react'
import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

import { Container } from './Header.styles'

import navItems from '@client/data/navItems'


const Header = () =>
  <Container>
    <Row>
      <Col span={8}>
        <Row gutter={20} type='flex'>
          {navItems.map(({ name, url }) => (
            <Col key={name}>
              <NavLink exact to={url}>
                {name}
              </NavLink>
            </Col>
          ))}
        </Row>
      </Col>

      <Col span={8}>
        <Row type='flex' justify='center'>
          <h1>Logo</h1>
        </Row>
      </Col>

      <Col span={8}>
        <Row type='flex' justify='end'>
          <NavLink exact to='/sign-in'>
            Sign In
          </NavLink>
        </Row>
      </Col>
    </Row>
  </Container>


export default Header

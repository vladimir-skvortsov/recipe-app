import React from 'react'
import { Row, Col, Button } from 'antd'

import { Container } from './Header.styles'


export interface Props {
  openRecipeModal: () => any
}


const Header = ({ openRecipeModal }: Props) =>
  <Container>
    <Row type='flex' justify='space-between'>
      <Col>
        <h1>Recipe App</h1>
      </Col>

      <Col>
        <Button
          type='primary'
          onClick={openRecipeModal}
        >
          Add Recipe
        </Button>
      </Col>
    </Row>
  </Container>


export default Header

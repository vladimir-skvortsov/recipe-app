import styled from 'styled-components'
import { Layout } from 'antd'


export const Container = styled(Layout.Footer)`
  background: ${({ theme: { primaryColor } }) => primaryColor} !important;
  border-top: 1px solid #e8e8e8
`

export const Copyright = styled.p`
  margin: 0;
`

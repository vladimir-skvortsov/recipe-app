import styled from 'styled-components'
import { Layout } from 'antd'


export const Content = styled(Layout.Content)`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 84px 50px 20px;
  min-height: 100vh !important;
`

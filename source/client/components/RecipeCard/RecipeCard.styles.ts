import styled from 'styled-components'

import { Card as OriginalCard } from 'antd'


export const Card = styled(OriginalCard)`
  margin-bottom: 20px !important;
`

export const Poster = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`

export const PosterPlaceholder = styled.div`
  background: ${({ theme: { darkenPrimaryColor } }) => darkenPrimaryColor};
  width: 100%;
  height: 200px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TagsContainer = styled.div`
  margin-top: 20px;
`

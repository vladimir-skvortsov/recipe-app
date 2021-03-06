import styled from 'styled-components'


export const Poster = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`

export const PosterPlaceholder = styled.div`
  background: ${({ theme: { darkenPrimaryColor } }) => darkenPrimaryColor};
  width: 100%;
  height: 200px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const TagsContainer = styled.div`
  margin: 20px 0;
`

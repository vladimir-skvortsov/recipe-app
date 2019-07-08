import React from 'react'
import Helmet from 'react-helmet'

import description from '@client/data/description'

import getTitle from '@client/utils/getTitle/getTitle'


export interface Props {
  title: string
  robots?: string
}


const Meta = ({
  title,
  robots = 'index, follow',
}: Props) =>
  <Helmet encodeSpecialCharacters={true}>
    <title>{getTitle(title)}</title>
    <meta name='description' content={description} />
    <meta name='robots' content={robots} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:locale' content='en_GB' />
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content={getTitle(title)} />
    <meta name='twitter:card' content='summary' />
    <meta property='og:title' content={getTitle(title)} />
    <meta property='og:description' content={description} />
  </Helmet>


export default Meta
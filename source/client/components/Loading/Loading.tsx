import React from 'react'

import ErrorPlaceholder from '@client/components/ErrorPlaceholder/ErrorPlaceholder'
import LoadingPlaceholder from '@client/components/LoadingPlaceholder/LoadingPlaceholder'


const Loading = ({ error }) => {
  if (error) return <ErrorPlaceholder />
  return <LoadingPlaceholder />
}


export default Loading

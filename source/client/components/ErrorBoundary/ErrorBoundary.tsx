import React, { Component } from 'react'


class ErrorBoundary extends Component {
  static getDerivedStateFromError = error => ({ error })

  state = { error: null }

  render = () => {
    const { error } = this.state

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        const RedBox = require('redbox-react').default
        return <RedBox error={error} />
      }
      return null
    }
    return this.props.children
  }
}


export default ErrorBoundary

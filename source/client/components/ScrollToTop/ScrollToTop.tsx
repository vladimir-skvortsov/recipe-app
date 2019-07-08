import { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'


class ScrollToTop extends Component<RouteComponentProps> {
  componentDidUpdate = ({ location: { pathname: PreviousPathname } }) => {
    const { location: { pathname } } = this.props

    if (pathname !== PreviousPathname) window.scrollTo(0, 0)
  }

  render = () => this.props.children
}


export default withRouter(ScrollToTop)
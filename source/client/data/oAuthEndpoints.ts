import { IconType } from 'react-icons'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'


interface OAuthEndpoint {
  name: string
  icon: IconType
  url: string
}


const oAuthEndpoints: OAuthEndpoint[] = [
  {
    name: 'Google',
    icon: FaGoogle,
    url: '',
  },
  {
    name: 'Facebook',
    icon: FaFacebookSquare,
    url: '',
  },
]



export default oAuthEndpoints

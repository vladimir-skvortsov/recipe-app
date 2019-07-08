import { IconType } from 'react-icons'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'


interface SocialMedia {
  name: string
  icon: IconType
  url: string
}


const oAuthEndpoints: SocialMedia[] = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: '',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: '',
  },
  {
    name: 'Youtube',
    icon: FaYoutube,
    url: '',
  },
]



export default oAuthEndpoints

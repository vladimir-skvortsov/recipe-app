import { NormalizedCacheObject } from 'apollo-boost'
import { HelmetData } from 'react-helmet'
import { Bundle } from 'react-loadable/webpack'
import { render } from 'ejs'

import template from '@server/assets/template.ejs'

import { accentColor } from '@shared/data/theme'
import { stats } from '@server/data/stats'
import manifest from '@server/data/manifest'


export interface MarkupData {
  apolloState: NormalizedCacheObject
  content: string
  helmet: HelmetData
  reduxState: object
  scripts: Bundle[]
  styleTags: string
  styles: Bundle[]
}


const renderMarkup = (data: MarkupData) =>
  render(template, { ...data, ...data.helmet, accentColor, stats, manifest })


export default renderMarkup

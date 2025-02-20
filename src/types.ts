export interface IPhoto {
  id?: string
  slug?: string
  alternative_slugs?: IAlternativeSlugs
  created_at?: string
  updated_at?: string
  promoted_at?: null
  width?: number
  height?: number
  color?: string
  blur_hash?: string
  description?: string
  alt_description?: string
  breadcrumbs?: Array<unknown>
  urls?: IUrls
  links?: ILinks
  likes?: number
  liked_by_user?: boolean
  current_user_collections?: Array<unknown>
  sponsorship?: ISponsorship
  topic_submissions?: ITopicSubmissions
  asset_type?: string
  user?: ISponsor
}
export interface IAlternativeSlugs {
  en?: string
  es?: string
  ja?: string
  fr?: string
  it?: string
  ko?: string
  de?: string
  pt?: string
}
export interface IUrls {
  raw?: string
  full?: string
  regular?: string
  small?: string
  thumb?: string
  small_s3?: string
}
export interface ILinks {
  self?: string
  html?: string
  download?: string
  download_location?: string
}
export interface ILinks1 {
  self?: string
  html?: string
  photos?: string
  likes?: string
  portfolio?: string
  following?: string
  followers?: string
}
export interface IProfileImage {
  small?: string
  medium?: string
  large?: string
}
export interface ISocial {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: null
  paypal_email?: null
}
export interface ISponsor {
  id?: string
  updated_at?: string
  username?: string
  name?: string
  first_name?: string
  last_name?: null
  twitter_username?: null
  portfolio_url?: string
  bio?: string
  location?: null
  links?: ILinks1
  profile_image?: IProfileImage
  instagram_username?: string
  total_collections?: number
  total_likes?: number
  total_photos?: number
  total_promoted_photos?: number
  total_illustrations?: number
  total_promoted_illustrations?: number
  accepted_tos?: boolean
  for_hire?: boolean
  social?: ISocial
}
export interface ISponsorship {
  impression_urls?: Array<unknown>
  tagline?: string
  tagline_url?: string
  sponsor?: ISponsor
}
export interface IBusinessWork {
  status?: string
}
export interface ITopicSubmissions {
  'business-work'?: IBusinessWork
}

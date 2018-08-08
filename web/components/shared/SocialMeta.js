// Locals
import { site } from '../../utils/variables'

// Social Meta Tags
export const SocialMeta = ({ title, description, image, url } = site) => {
  image = image || site.image
  description = description || site.description
  url = url || site.url
  title = title || site.title

  return (
    <>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={site.twitterHandle} />
      <meta name="twitter:creator" content={site.twitterHandle} />
      <meta name="twitter:image:src" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={typeof location !== 'undefined' ? location.href : url} />
      <meta name="og:site_name" content={site.name} />
      <meta name="og:type" content="website" />
    </>
  )
}

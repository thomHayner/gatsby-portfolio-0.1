// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, keywords, image, siteUrl, } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
      <meta name='image' content={seo.image} />
      <html lang='en'/>
      {/* <link rel='icon' href='data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>' /> */}
      {children}
    </>
  )
};

export default Seo
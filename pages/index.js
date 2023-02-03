/* eslint-disable @next/next/no-img-element */
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from "../components/Layout";

const Page = ({ homepage, navigation, settings }) => {
  const data = settings?.data
  return (<Layout menus={navigation} siteData={data} >
    <SliceZone slices={homepage.data.slices} components={components} />
  </Layout>)
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const navigation = await client.getSingle('navigation')
  const settings = await client.getSingle('settings')

  return {
    props: {
      homepage,
      navigation,
      settings
    },
  }
}
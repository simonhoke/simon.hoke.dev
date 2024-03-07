import { readToken } from 'lib/sanity.api'
import {
  getAllTools,
  getClient,
  getSettings, getToolsByQuery
} from 'lib/sanity.client'
import { Settings,Tool } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import Container from '../components/BlogContainer'
import BlogHeader from '../components/BlogHeader'
import Layout from '../components/BlogLayout'
import GearList from '../components/GearList'
import IndexPageHead from '../components/IndexPageHead'
import QueryPrompt from '../components/QueryPrompt'
import { description } from '../lib/demo.data'

interface PageProps extends SharedPageProps {
  tools: Tool[]
  settings?: Settings
  query: string
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { tools, settings, query } = props
  return     <>
    <IndexPageHead settings={settings} />

    <Layout preview={false} loading={false}>
      <Container>
        <BlogHeader title={"Simon Hoke"} description={description} level={2} />
        <div className="mb-16 grid grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2">
            <QueryPrompt query={query}></QueryPrompt>
          </div>
        </div>

        <GearList tools={tools}></GearList>
      </Container>
    </Layout>
  </>

}

export const getServerSideProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const query = ctx['query']['comment'] ?? ""

  const [ tools, settings] = await Promise.all([
    query != null && query != "" ? getToolsByQuery(client, query) : getAllTools(client),
    getSettings(client),
  ])
  
  return {
    props: {
      tools,
      settings,
      query
    },
  }
}

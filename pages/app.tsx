import { readToken } from 'lib/sanity.api'
import {
  getAllTools,
  getClient,
  getSettings, getTagsByQuery, getToolsByTags
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
  response: string
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { tools, settings, query, response } = props
  return     <>
    <IndexPageHead settings={settings} />

    <Layout preview={false} loading={false}>
      <Container>
        <BlogHeader title={"Simon Hoke"} description={description} level={2} />
        <div className="mb-16 grid grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2">
            <QueryPrompt query={query}></QueryPrompt>
            <h2 className="text-xl border-2 border-amber-600 rounded-2xl p-4 m-4">{response}</h2>
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

  let response = "Create your adventure"

  const [ tags ] = await Promise.all([
    getTagsByQuery(client, query)
  ])

  if (tags != null && tags.length > 0) {
    if (tags.length == 0) {
      response = query + "No tags detected, showing all gear"
    }
    if (tags.length == 1) {

      response = "Showing gear for " + tags[0].tags
    }
    if (tags.length > 1) {
      response = "todo: support more tags"
    }
  }

  const [ tools, settings] = await Promise.all([
    tags != null && tags.length == 1 ? getToolsByTags(client, tags[0].tags) : getAllTools(client),
    getSettings(client),
  ])

  return {
    props: {
      tools,
      settings,
      query,
      response
    },
  }
}

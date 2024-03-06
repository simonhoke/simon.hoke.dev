import { readToken } from 'lib/sanity.api'
import {
  getAllTools,
  getClient,
  getSettings
} from 'lib/sanity.client'
import { Settings,Tool } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import GearPlannerPage from '../components/GearPlannerPage'

interface PageProps extends SharedPageProps {
  tools: Tool[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { tools, settings } = props
  return <GearPlannerPage tools={tools} settings={settings}></GearPlannerPage>
}

export const getServerSideProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [ tools, settings] = await Promise.all([
    getAllTools(client),
    getSettings(client),
  ])

  return {
    props: {
      tools,
      settings,
    },
  }
}

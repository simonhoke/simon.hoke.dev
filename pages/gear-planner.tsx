import { readToken } from 'lib/sanity.api'
import { getAllTools, getClient, getSettings } from 'lib/sanity.client'
import { Settings, Tool } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import GearList from '../components/GearList'

interface PageProps extends SharedPageProps {
  tool: Tool[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { settings, tool } = props

  return <GearList tools={tool} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, tool = []] = await Promise.all([
    getSettings(client),
    getAllTools(client),
  ])

  return {
    props: {
      tool,
      settings,
      token: draftMode ? readToken : '',
    },
  }
}

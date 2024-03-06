import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import Tools from 'components/Tools'
import * as demo from 'lib/demo.data'
import type { Settings, Tool } from 'lib/sanity.queries'

export interface GearPlannerPageProps {
  preview?: boolean
  loading?: boolean
  tools: Tool[]
  settings: Settings
}

export default function GearPlannerPage(props: GearPlannerPageProps) {
  const { preview, loading, tools, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={2} />
          {tools.length > 0 && <Tools tools={tools} />}
        </Container>
      </Layout>
    </>
  )
}
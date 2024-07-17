import { schemaAllViewport } from '@/utils/components'
import { Type, type Static } from '@sinclair/typebox'

const display = Type.Boolean({})
const src = Type.String({})
const link = Type.String({})
const width = Type.String({})
const height = Type.String({})

const schema = Type.Object({
  display: schemaAllViewport(display),
  src: schemaAllViewport(src),
  link: schemaAllViewport(link),
  width: schemaAllViewport(width),
  height: schemaAllViewport(height),
})

export type MoImageSchema = Static<typeof schema>

export default schema

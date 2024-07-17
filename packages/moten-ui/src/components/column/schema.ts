import { schemaAllViewport } from '@/utils/components'
import { Type, type Static } from '@sinclair/typebox'

const background = Type.String({})

const cols = Type.Array(Type.Number(), {})

const schema = Type.Object({
  background: schemaAllViewport(background),
  cols: schemaAllViewport(cols),
})

export type MoColumnSchema = Static<typeof schema>

export default schema

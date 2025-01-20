import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nikvpe',

  projectId: 'jh2ng2jx',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  studioHost: 'vpedigital',
  schema: {
    types: schemaTypes,
  },
})

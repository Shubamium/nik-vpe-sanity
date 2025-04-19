import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'base',
  title: 'base',
  type: 'object',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: 'Set active as main',
      type: 'string',
    }),
  ],
})

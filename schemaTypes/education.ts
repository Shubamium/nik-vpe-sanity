import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education ',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: 'Set active as main',
      type: 'string',
    }),
    defineField({
      name: 'ms',
      title: 'Main Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
      fields: [
        defineField({
          name: 't',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'd',
          title: 'Description',
          type: 'array',
          of: [{type: 'block'}],
        }),

        defineField({
          name: 'ia',
          title: 'Image A (3:4)',
          type: 'image',
        }),
        defineField({
          name: 'ib',
          title: 'Image B (16:9)',
          type: 'image',
        }),
        defineField({
          name: 'ic',
          title: 'Image C (16:9)',
          type: 'image',
        }),
      ],
    }),

    defineField({
      name: 'pl',
      title: 'Program List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'd',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}],
            }),
            defineField({
              name: 'i',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'f',
      title: 'Footer',
      type: 'footer',
    }),
  ],
})

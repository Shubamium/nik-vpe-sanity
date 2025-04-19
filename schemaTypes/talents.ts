import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talents',
  title: 'Talents',
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
      name: 'is',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({
          name: 'mi',
          title: 'Main Image',
          type: 'image',
        }),

        defineField({
          name: 'd',
          title: 'Description',
          type: 'text',
        }),

        defineField({
          name: 'il',
          title: 'Infinite Image Scroll List',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),

    defineField({
      name: 'ls',
      title: 'Livestream Section',
      type: 'object',
      fields: [
        defineField({
          name: 'mi',
          title: 'Main Image',
          type: 'image',
        }),
        defineField({
          name: 'l',
          title: 'Left Text',
          type: 'object',
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
          ],
        }),
        defineField({
          name: 'r',
          title: 'Right Text',
          type: 'object',
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
          ],
        }),
        defineField({
          name: 'ma',
          title: 'Media A',
          type: 'media',
        }),
        defineField({
          name: 'mb',
          title: 'Media B',
          type: 'media',
        }),
        defineField({
          name: 'mc',
          title: 'Media C',
          type: 'media',
        }),
      ],
    }),
    defineField({
      name: 'f',
      title: 'Footer',
      type: 'footer',
    }),
  ],
})

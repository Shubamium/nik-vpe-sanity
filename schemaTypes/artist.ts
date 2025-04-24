import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artists',
  title: 'Artists',
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
      fields: [
        defineField({
          name: 'lt',
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
              type: 'text',
            }),
          ],
        }),
        defineField({
          name: 'rt',
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
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'pl',
      title: 'People List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'pfp',
              title: 'Profile Picture',
              type: 'image',
            }),
            defineField({
              name: 'n',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'r',
              title: 'Title / Role',
              type: 'string',
            }),

            defineField({
              name: 'd',
              title: 'Description',
              type: 'text',
            }),

            defineField({
              name: 'fl',
              title: 'Fiverr Link',
              type: 'url',
            }),
            defineField({
              name: 'vl',
              title: 'VGEN Link',
              type: 'url',
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

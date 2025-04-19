import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  type: 'object',

  fields: [
    // Define your fields here
    defineField({
      name: 'lf',
      title: 'Left Footer',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
    defineField({
      name: 'rf',
      title: 'Right Footer',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),

    defineField({
      name: 'ct',
      title: 'Center Type',
      type: 'string',
      initialValue: 'text',
      options: {
        list: [
          {title: 'Contacts', value: 'contact'},
          {title: 'Available At', value: 'fiverr'},
          {title: 'Text', value: 'text'},
        ],
      },
    }),
    defineField({
      name: 'ct_t',
      title: 'Center Text',
      type: 'text',
      hidden: ({parent}) => {
        return parent?.ct != 'text'
      },
    }),
  ],
})

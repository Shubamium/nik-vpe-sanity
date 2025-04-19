import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'commission',
  title: 'Commission',
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
      name: 'cl',
      title: 'Commission List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'n',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'd',
              title: 'Top Description',
              type: 'text',
            }),
            defineField({
              name: 'bg',
              title: 'Background',
              type: 'image',
            }),
            defineField({
              name: 'p',
              title: 'Prices',
              type: 'string',
            }),
            defineField({
              name: 'ms',
              title: 'Media Size',
              type: 'string',
              options: {
                list: [
                  {title: '3:4', value: 'threefour'},
                  {title: '9:16', value: 'sixnine'},
                  {title: '16:9', value: 'std'},
                ],
              },
            }),
            defineField({
              name: 'ml',
              title: 'Media List',
              type: 'array',
              of: [{type: 'media'}],
            }),
            defineField({
              name: 'bd',
              title: 'Bottom Description',
              type: 'text',
            }),
            defineField({
              name: 'fl',
              title: 'Fiverr Link',
              type: 'url',
            }),
            defineField({
              name: 'vl',
              title: 'Vgen Link',
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

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'mt',
      title: 'Media Type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
    }),

    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.mt != 'image',
    }),
    defineField({
      name: 'ytd',
      description: 'Youtube Video ID, the part after watch?v=',
      title: 'Youtube Video ID',
      type: 'string',
      hidden: ({parent}) => parent?.mt !== 'video',
    }),
  ],
})

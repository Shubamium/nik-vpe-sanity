import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    // Define your fields here
    {
      name: 'preset',
      title: 'Preset ID',
      description: 'Set active as main',
      type: 'string',
    },

    defineField({
      name: 'video',
      title: 'Main Video',
      description: 'Video File, .webm file recommended',
      type: 'file',
    }),
    defineField({
      name: 'top',
      title: 'Top Info',
      type: 'object',
      fields: [
        defineField({
          name: 'left',
          title: 'Text Left',
          type: 'string',
        }),
        defineField({
          name: 'right',
          title: 'Text Right',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'postage_top',
      title: 'Postage Name',
      type: 'string',
    }),
    defineField({
      name: 'postage_bottom',
      title: 'Postage Detail',
      type: 'string',
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'general',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'image_a',
          title: 'Left Image',
          type: 'image',
        }),
        defineField({
          name: 'image_b',
          title: 'Center Image',
          type: 'image',
        }),
        defineField({
          name: 'image_c',
          title: 'Right Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'points_a',
      title: 'Points A',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'points_b',
      title: 'Points B',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          type: 'image',
        }),
      ],
    }),

    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
      ],
    }),
  ],
})

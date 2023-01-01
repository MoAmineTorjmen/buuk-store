import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Book Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Book description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Book Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Book Rating form (1-5 Starts)',
      type: 'number',
      validation : (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error("Enter a number between 1 and 5 please !!")
    }),
    defineField({
      name: 'price',
      title: 'Book Price ',
      type: 'number',
    }),
    defineField({
      name: 'author',
      title: 'Book Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }), 
    
  ],

  
})

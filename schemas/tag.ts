import { TagIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  icon: TagIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      title: "Tag Expansion",
      name: "tags",
      type: "array",
      of: [
        defineArrayMember({ type: "string" })
      ]
    })
  ],
})

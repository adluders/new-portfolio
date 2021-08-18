export default {
  title: "Blog",
  name: "blog",
  type: "document",
  fields: [
    {
      name: "blogTitle",
      title: "Blog Title",
      type: "string",
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
    },
    {
      name: "blogLink",
      title: "Article Link",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "blog",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

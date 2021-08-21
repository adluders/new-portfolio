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
      name: "articleImg",
      title: "Blog Image",
      type: "image",
    },
    {
      name: "featured",
      title: "Show on Home",
      type: "boolean",
    },
    {
      name: "blogLink",
      title: "Article Link",
      type: "slug",
      options: {
        source: "blogTitle",
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

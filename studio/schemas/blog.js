export default {
  title: "Blog",
  name: "blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
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

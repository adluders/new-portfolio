export default {
  title: "Tip",
  name: "tip",
  type: "document",
  fields: [
    {
      title: "Tip",
      name: "tip",
      type: "string",
    },
    {
      title: "Graphic",
      name: "graphic",
      type: "image",
    },
    {
      title: "Info",
      name: "info",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

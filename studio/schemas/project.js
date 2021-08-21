export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Project Title",
      name: "projectTitle",
      type: "string",
    },
    {
      title: "Blurb",
      name: "blurb",
      type: "string",
    },
    {
      title: "Image",
      name: "projectImg",
      type: "image",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "projectTitle",
      },
    },
    {
      title: "Project Demo",
      name: "projectDemo",
      type: "url",
    },
    {
      title: "Show on Home",
      name: "showOnHome",
      type: "boolean",
    },
    {
      title: "Featured Project",
      name: "featured",
      type: "boolean",
    },
  ],
};

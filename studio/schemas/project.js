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
      type: "string",
    },
  ],
};

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "blog",
        path: "/src/content/blog",
        fields: [
          {
            type: "boolean",
            name: "draft",
            label: "draft",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "author",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "publishDate",
            ui: {
              timeFormat: "HH:mm"
            },
            required: true,
          },
          {
            type: "string",
            name: "coverSVG",
            label: "coverSVG",
            required: true,
          },
          {
            type: "string",
            name: "socialImage",
            label: "socialImage",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
            options: ['general', 'information', 'food', 'health', 'computer', 'leathercraft'],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
            ui: {
              component: 'tags',
            },
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

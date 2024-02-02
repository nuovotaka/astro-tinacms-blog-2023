import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    Gallery: {
      render: component('./src/components/gallery.astro'),
      attributes: {
        folder: { type: String },
      }
    },
    todo: {
      render: component('./src/components/Todolist.astro'),
      attributes: {
        type: { type: String },
      },
    },
    Youtube: {
      render: component('./src/components/YouTubeEmbed.astro'),
      attributes: {
        id: { type: String },
      },
      selfClosing: true,
    },
  },
})

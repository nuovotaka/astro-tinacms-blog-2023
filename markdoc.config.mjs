import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Gallery from './src/components/gallery.astro';
import YouTubeEmbed from './src/components/YouTubeEmbed.astro';
import Todo_list from './src/components/Todolist.astro';

export default defineMarkdocConfig({
  tags: {
    Gallery: {
      render: Gallery,
      attributes: {
        folder: { type: String },
      }
    },
    todo: {
      render: Todo_list,
      attributes: {
        type: { type: String },
      },
    },
    Youtube: {
      render: YouTubeEmbed,
      attributes: {
        id: { type: String },
      },
      selfClosing: true,
    },
  },
})
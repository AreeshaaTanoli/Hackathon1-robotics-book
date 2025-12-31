import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Chapters/front-page',
    'Chapters/welcome',
    'Chapters/table-of-contents',
    'Chapters/chapter1-introduction',
    'Chapters/chapter2-history',
    'Chapters/chapter3-types',
    'Chapters/chapter4-components',
    'Chapters/chapter5-future',
   {
  type: 'doc',
  id: 'chatbot-page/index',
  label: 'Chat Bot Demo',
},

  ],
};

export default sidebars;

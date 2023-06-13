/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  safelist: ['object-top', 'object-center', 'object-bottom', 'object-left-top', 'object-left', 'object-left-bottom', 'object-right-top', 'object-right', 'object-right-bottom'],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },

    screens: {
      sm: '720px',
      md: '960px',
      lg: '1140px',
      xl: '1280px',
      '2xl': '1408px',
    },

    extend: {
      colors: {
        'base-100': '#02111d',
        'base-200': '#021626',
        'base-300': '#04243d',

        'typo-400': '#8da3b4',
        'typo-500': '#d7dbe0',
        'typo-600': '#eeefff',
        'typo-onCard': '#faeee2',

        'var-1': '#ebc491',
        'var-2': '#84acfc',
        'var-3': '#83dbca',
        'var-4': '#fd7a72',

        link: '#fff959',
        lines: '#082236',
      },

      fontFamily: {
        jet: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Monaco', 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'monospace'],
      },

      fontSize: {
        // Mobile font sizes

        footer: [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        tools: [
          '0.813rem',
          {
            lineHeight: '1rem',
            fontWeight: '300',
          },
        ],
        detail: [
          '0.813rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '300',
          },
        ],
        expertise: [
          '0.813rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '300',
          },
        ],
        btn: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        body: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '300',
          },
        ],
        hero: [
          '1rem',
          {
            lineHeight: '1.625rem',
            fontWeight: '400',
          },
        ],
        job: [
          '1rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '700',
          },
        ],
        itemtitle: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '800',
          },
        ],
        section: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        sectiontitle: [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '800',
          },
        ],
        menu: [
          '1.875rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '400',
          },
        ],
        herotitle: [
          '1.875rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '800',
          },
        ],

        // Tablet font sizes

        'sm-tools': [
          '0.875rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '300',
          },
        ],
        'lg-herotitle': [
          '2rem',
          {
            lineHeight: '2.625rem',
            fontWeight: '800',
          },
        ],

        // Desktop font sizes

        'xl-footer': [
          '0.875rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '400',
          },
        ],
        'xl-tools': [
          '1rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '300',
          },
        ],
        'xl-detail': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '300',
          },
        ],
        'xl-expertise': [
          '0.938rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        'xl-btn': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'xl-body': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '300',
          },
        ],
        'xl-hero': [
          '1.25rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        'xl-job': [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
        'xl-itemtitle': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '800',
          },
        ],
        'xl-section': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        'xl-sectiontitle': [
          '1.875rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '800',
          },
        ],
        'xl-herotitle': [
          '2.5rem',
          {
            lineHeight: '3.313rem',
            fontWeight: '800',
          },
        ],
      },

      boxShadow: {
        tool: '0px 2px 3px 1px rgba(1, 17, 23, 0.15)',
      },

      textShadow: {
        DEFAULT: '0px 0px 6px #eeefff33',
        'var-2': '0px 0px 6px #84acfc33',
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};

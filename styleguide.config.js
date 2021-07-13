const path = require('path')

// Style options can be found in components here:
// https://github.com/styleguidist/react-styleguidist/tree/master/src/client/rsg-components

module.exports = {
  title: "Design System",
  template: {
    favicon: 'https://members.lawcentres.org.uk/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900'
        }
      ]
    }
  },
  styles: function (theme) {
    return {
      Heading: {
        heading: {
          fontFamily: 'Poppins, sans-serif'
        },
        heading1: {
          fontWeight: '900'
        },
        heading2: {
          fontWeight: '700'
        }
      },
    }
  },
  theme: {
    sidebarWidth: '250px',
    fontFamily: {
      base: 'Lato, sans-serif',
    },
    color: {
      link: '#00838A',
      linkHover: '#7abec2',
      sidebarBackground: '#F7FAFC',
      codeBackground: '#F7FAFC'
    },
  },
  pagePerSection: true,
  tocMode: 'collapse',
  sections: [
    {
      name: 'Design System',
      content: 'docs/introduction.md'
    },
    {
      name: 'Getting Started',
      content: 'docs/get_started.md'
    },
    {
      name: 'Styles',
      content: 'docs/styles.md',
      components: 'src/styles/*.jsx',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/components/*.jsx',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Patterns',
      content: 'docs/patterns.md',
      components: 'src/patterns/*.jsx',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/components/Provider.js'),
    LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
    SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
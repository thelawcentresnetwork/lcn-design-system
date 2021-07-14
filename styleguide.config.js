const path = require('path')

// Style options can be found in components here:
// https://github.com/styleguidist/react-styleguidist/tree/master/src/client/rsg-components

module.exports = {
  assetsDir: './docs/public/',
  title: "Design System – The Law Centres Network",
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
          fontWeight: '900',
          marginBottom: '0.5em'
        },
        heading2: {
          fontWeight: '700'
        }
      },
      TableOfContents: {
        root: {
          padding: '10px 15px 0'
        },
        input: {
          borderRadius: '30px',
          paddingLeft: "20px"
        }
      },
      ComponentsList: {
        item: {
          margin: "10px 1px"
        },
        isSelected: {
          color: '#777',
          fontWeight: 'normal'
        }
      }
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
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Usage',
      content: 'docs/usage.md'
    },
    {
      name: 'Styles',
      content: 'docs/styles.md',
      components: 'src/styles/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
      sections: [
        {
          name: 'Typography',
          content: 'docs/styles/typography.md'
        },
        {
          name: 'Colour',
          content: 'docs/styles/colour.md'
        },
        {
          name: 'Icons',
          content: 'docs/styles/icons.md'
        },
        {
          name: 'Brand',
          content: 'docs/styles/brand.md'
        },
        {
          name: 'Language',
          content: 'docs/styles/language.md'
        }
      ]
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/components/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse'

    },
    {
      name: 'Patterns',
      content: 'docs/patterns.md',
      components: 'src/patterns/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'docs/helpers/Provider'),
    StyleGuideRenderer: path.join(__dirname, 'docs/helpers/StyleGuideRenderer'),
    LogoRenderer: path.join(__dirname, 'docs/helpers/Logo')
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
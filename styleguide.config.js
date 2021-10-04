const path = require('path')

// Style options can be found in components here:
// https://github.com/styleguidist/react-styleguidist/tree/master/src/client/rsg-components

module.exports = {
  require: [path.resolve(__dirname, './docs/helpers/global.js')],
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
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript')
        .withDefaultConfig({
          propFilter: props => {
            return (
              props.parent &&
              props.parent.fileName.startsWith(
                path
                  .dirname(__filename)
                  .split(path.sep)
                  .pop() + '/src/'
              )
            );
          }
        })
        .parse(
          filePath,
          source,
          resolver,
          handlers
        )
      : require('react-docgen').parse(source, resolver, handlers);
  },
  styles: function (theme) {
    return {
      TabButton: {
        button: {
          fontSize: '0.625rem',
          fontWeight: 'bold',
          background: '#F7FAFC',
          borderRadius: '0.5rem',
          color: '#777',
          padding: '0.5rem 1rem'
        }
      },
      Heading: {
        heading: {
          fontFamily: 'Poppins, sans-serif'
        },
        heading1: {
          fontWeight: '800',
          fontSize: '3rem',
          marginBottom: '0.25em'
        },
        heading2: {
          fontSize: '1.625rem',
          fontWeight: '700'
        },
        heading3: {
          fontSize: '1.625rem',
          fontWeight: '700'
        },
        heading4: {
          fontSize: '1.25rem',
          fontWeight: '700'
        }
      },
      TableOfContents: {
        root: {
          padding: '10px 15px 0'
        },
        input: {
          borderRadius: '7px',
          paddingLeft: "20px"
        }
      },
      ComponentsList: {
        item: {
          margin: "10px 1px",
          fontWeight: 'normal'
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
      name: 'Design System',
      tocMode: 'collapse',
      sections: [
        {
          name: 'Styles',
          content: 'docs/styles.md',
          components: 'src/styles/*.{jsx,tsx}',
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
          components: 'src/components/*.{jsx,tsx}',
          exampleMode: 'collapse',
          usageMode: 'collapse',
          sections: [
            {
              name: 'Button',
              content: 'docs/components/Button.md'
            },
            {
              name: 'Menu',
              content: 'docs/components/Menu.md'
            },
            {
              name: 'Badge',
              content: 'docs/components/Badge.md'
            },
            {
              name: 'Tooltip',
              content: 'docs/components/Tooltip.md'
            },
            {
              name: 'Forms',
              content: 'docs/components/Form.md'
            },
            {
              name: 'Tabs',
              content: 'docs/components/Tabs.md'
            },
          ]
        },
        {
          name: 'Patterns',
          content: 'docs/patterns.md',
          components: 'src/patterns/*.{jsx,tsx}',
          exampleMode: 'collapse',
          usageMode: 'collapse',
          sections: [
            {
              name: 'Cookie Consent',
              content: 'docs/patterns/CookieConsent.md'
            },
            {
              name: 'Form Builder',
              content: 'docs/patterns/FormBuilder.md'
            },
            {
              name: 'Feedback',
              content: 'docs/patterns/Feedback.md'
            },
            {
              name: 'NPS Widget',
              content: 'docs/patterns/NPSWidget.md'
            }
          ]
        },
      ]
    },
    {
      name: 'More from Chakra',
      href: 'https://chakra-ui.com/docs/',
      external: true
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
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
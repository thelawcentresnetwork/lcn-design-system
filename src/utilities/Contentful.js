const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

async function fetchContent(query, preview) {

  return new Promise((resolve, reject) => {

    try {

      fetch(
        `https://graphql.contentful.com/content/v1/spaces/${space}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${(preview) ? previewAccessToken : accessToken}`,
          },
          body: JSON.stringify({ query }),
        },
      ).then((response) => {

        response.json().then((data) => {
          if (data.errors) {
            reject(data.errors)
          } else {
            resolve(data.data)
          }
        })

      })

    } catch (error) {

      reject(error)

    }

  })

}

const richTextQuery = `
  json
  links {
    assets {
      hyperlink {
        url
        title
        sys {
          id
        }
      }
      block {
        sys {
          id
        }
        contentType
        url
        title
        description
        width
      }
    }
    entries {
       hyperlink {
         __typename
        ... on Page {
          slug
        }
        sys {
          id
        }
      }
      block {
        __typename
        sys {
          id
        }
        ... on Project {
          title
          organisations
          slug
        }
        ... on Vacancy {
          title
          organisations
          slug
        }
        ... on Training {
          title
          organisations
          slug
        }
        ... on Event {
          title
          organisations
          slug
        }
        ... on CodeEmbed {
          title
          embed
        }
      }
    }
  }
`

const componentQuery = `
    __typename
    ... on componentHero {
      heading
      hero {
        contentType
        url
        title
        description
        width
      }
      content {
        ${richTextQuery}
      }
    }
    ... on componentAsset {
      assets {
        asset {
          contentType
          url
          title
          description
          width
        }
      } 
    }
    ... on componentFeature {
      title
      description
      feature {
        ${richTextQuery}
      }
    }
    ... on componentEmbed {
      title
      embed
    }
    ... on componentInlay {
      image {
        contentType
        url
        title
        description
        width
      }
      text {
        ${richTextQuery}
      }
    }
    ... on componentQuote {
      quote
      citation
      image {
        contentType
        url
        title
        description
        width
      }
    }
    ... on componentRichText {
      content {
        ${richTextQuery}
      }
    }
    ... on componentCard {
      link
      heroImage {
        contentType
        url
        title
        description
        width
      }
      content {
        ${richTextQuery}
      }
    }
    ... on pattern {
      pattern
    }
`

import richTextOptions from "./richTextOptions";

export {
  fetchContent,
  richTextQuery,
  componentQuery,
  richTextOptions
}

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query: string) {
  const URL = `https://${domain}/api/2023-04/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token":
        storefrontAccessToken ?? "default_value",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => response.json());

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

async function getProductsInCollection() {
  const query = `{
    products(first: 4) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange { 
            maxVariantPrice {
              amount
            }
          }
          variants(first: 2) {
            edges {
              node {
                id
              }
            }
          }
          images(first:1) {
            edges {
              node {
                id
                url 
                altText
              }
            }
          }
          
        }
      }
    }
  }
  `;

  const response = await ShopifyData(query);

  const products = response?.data?.products?.edges || [];

  return products;
}

async function getProductByHandle(slug: string) {
  const query = `
  {
    product(handle: "${slug}") {
      id
      title
      handle
      description
      priceRange { 
        maxVariantPrice {
          amount
        }
      }
      images(first:1) {
        edges {
          node {
            id
            url 
            altText
          }
        }
      }
      variants(first: 2) {
            edges {
              node {
                id
                title
              }
            }
          }
    }
  }
  `;

  const response = await ShopifyData(query);

  const product = response?.data?.product || null;

  return product;
}

async function createCheckout(lineItems: { id: string; quantity: number }[]) {
  const items = lineItems
    .map(({ id, quantity }) => `{ variantId: "${id}", quantity: ${quantity}}`)
    .join(",");

  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [${items}]
      }) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response?.data?.checkoutCreate?.checkout || null;
  const errors = response?.data?.checkoutCreate?.checkoutUserErrors || [];

  return { checkout, errors };
}

export { getProductsInCollection, getProductByHandle, createCheckout };

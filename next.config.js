module.exports = {
    async redirects() {
      return [
        {
          source: '/pages(.*)',
          destination: '/block',
          permanent: true,
        },
      ]
    },
  }
  
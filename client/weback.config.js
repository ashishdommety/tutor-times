plugins: [
  new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.G_CLIENT)
  })
]
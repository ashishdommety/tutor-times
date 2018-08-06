plugins: [
  new webpack.DefinePlugin({
      'G_CLIENT': JSON.stringify(process.env.G_CLIENT)
  })
]
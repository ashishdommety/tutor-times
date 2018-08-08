plugins: [
  new webpack.DefinePlugin({
      'G_CLIENT': JSON.stringify(process.env.REACT_APP_GCLIENT)
  })
]
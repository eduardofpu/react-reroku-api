# react-router
https://tylermcginnis.com/react-router-url-parameters/

url: `http://localhost:8080/create/table/${this.state.nameTable}`,   

//////////scroller/////////////////////////////////////////
https://github.com/CassetteRocks/react-infinite-scroller

////////////////redux/////////////////////////////////////////////////////////////
https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/

////////////////////reack curso youtube//////////////////////////////////////////////

github.com/vvinhas/react-series
npm install
sudo npm install -g webpack
npm run dev
lvh.me:8080  ou localhot:8080

//link sobre PropTypes
https://reactjs.org/docs/components-and-props.html

/////////////////////////////////////////////////////
react router
npm install --save react-router

framework////////////
bulma.io
cdnjs.com

<link rel="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />

https://github.com/ReactTraining/react-router
https://github.com/reactjs/react-router-tutorial/tree/master/lessons/11-productionish-server


///////////////////////////////////////////////////////////////////////////

configurar o lader para o bootstrap do pagination funcionar
loader:

npm install --save-dev css-loader
npm install style-loader --save-dev
npm install url-loader --save-dev

webpack.config.js ficara assim:

module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
    }
    ]
  },


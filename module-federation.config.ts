import { withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'container',
  remotes: {
    'microfrontend': 'microfrontend@http://localhost:4201/remoteEntry.js', 
  },
  shared: {
    '@angular/core': { singleton: true },
    '@angular/common': { singleton: true },
    '@angular/router': { singleton: true },
  },
});

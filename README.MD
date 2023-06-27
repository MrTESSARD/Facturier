## 63. Exercice Facturier 1

## 90. Typescript avec Webpack

Webpack est un outil de build très populaire utilisé dans le développement web pour regrouper et optimiser les ressources d'une application, telles que les fichiers JavaScript, les styles CSS, les images, etc.

Lorsqu'il s'agit d'utiliser TypeScript avec Webpack, il est nécessaire de configurer Webpack pour prendre en charge TypeScript et compiler les fichiers TypeScript en JavaScript.

Voici un exemple de configuration de Webpack pour TypeScript :

1. Installez les dépendances nécessaires :
```shell
npm install webpack webpack-cli ts-loader typescript
```

Créez un fichier de configuration Webpack webpack.config.js à la racine du projet :

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
```

Créez un fichier tsconfig.json à la racine du projet pour configurer TypeScript :
```javascript
{
  "compilerOptions": {
    "module": "es6",
    "target": "es5",
    "strict": true,
    "esModuleInterop": true
  }
}
```
Exécutez Webpack pour construire votre application :
```terminal
npx webpack --mode=production
```

>  Après l'exécution de la commande, Webpack compilera le fichier TypeScript src/index.ts en JavaScript et générera un fichier bundle.js dans le répertoire dist.

>  Dans cet exemple, la configuration Webpack indique que le point d'entrée de l'application est src/index.ts et le point de sortie est dist/bundle.js. Le loader ts-loader est utilisé pour transpiler les fichiers TypeScript en JavaScript. Le fichier tsconfig.json configure les options de compilation de TypeScript.

>  L'utilisation de TypeScript avec Webpack permet de bénéficier des fonctionnalités avancées de TypeScript telles que la vérification de type statique, les fonctionnalités ECMAScript récentes, et bien plus encore, tout en profitant des avantages de regroupement et d'optimisation offerts par Webpack.


### En pratique =>
```terminal
npm i webpack webpack-cli typescript ts-loader --save-dev: 
```
> Cette commande utilise npm pour installer localement les paquets webpack, webpack-cli, typescript et ts-loader dans le répertoire de votre projet. L'option --save-dev indique que ces paquets doivent être ajoutés en tant que dépendances de développement dans le fichier package.json de votre projet.

```terminal
./node_modules/.bin/webpack --mode development: 
//ou
npm run build //avec facturier
//ou
npx webpack --mode=production //sans facturier
```
> Cette commande exécute le binaire webpack situé dans le répertoire node_modules de votre projet. Elle utilise le mode de développement (--mode development) pour exécuter Webpack avec des optimisations spécifiques pour le développement. Cette commande lance le processus de compilation et de création des bundles de votre application en fonction de la configuration définie dans le fichier webpack.config.js, générant ainsi les fichiers de sortie nécessaires pour votre application.


## 91. Webpack SourceMap Debug
Pour indiquer à Webpack de générer des sourcemaps en ligne pour le débogage du code dans le navigateur.

Les sourcemaps sont des fichiers qui permettent de relier le code source original (par exemple, des fichiers TypeScript ou des fichiers JavaScript non minifiés) au code transformé et minifié utilisé dans l'application. Ils fournissent une correspondance ligne par ligne entre le code exécuté dans le navigateur et le code source d'origine, facilitant ainsi le débogage.

Avec devtool: "inline-source-map", les sourcemaps sont intégrés directement dans le bundle JavaScript généré par Webpack. Cela signifie que le navigateur télécharge le bundle JavaScript avec les sourcemaps inclus, permettant au débogueur du navigateur de relier automatiquement le code exécuté au code source d'origine lors du débogage.

L'utilisation de sourcemaps en ligne est pratique en développement, car elle évite d'avoir à charger des fichiers de sourcemaps séparés lors du débogage. Cependant, il peut augmenter légèrement la taille du bundle JavaScript généré.

Il est important de noter que l'utilisation de sourcemaps en ligne est recommandée uniquement en mode développement, car cela peut exposer votre code source d'origine. En mode production, il est généralement préférable de générer des fichiers de sourcemaps externes pour des raisons de performance et de sécurité.

En résumé, devtool: "inline-source-map" indique à Webpack de générer des sourcemaps en ligne pour faciliter le débogage du code dans le navigateur pendant le développement. 

facturier
ajouter dans tsconfig.json
     "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */

ajouter dans webpack.config.js
devtool:"inline-source-map",

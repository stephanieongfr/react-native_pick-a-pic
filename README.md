# About Pick a Pic

Pick a Pic is a mobile app that allows you to browse pictures from Unsplash and save them to your favorites.


## Built With

* [![React][React.js]][React-Native-url]
* [![Expo][Expo.js]][Expo-url]
* [![NativeWind][NativeWind.js]][NativeWind-url]

## Getting started

### Prerequisites

You should have npm installed globally. If not, run below command in your CLI:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://unsplash.com/documentation#creating-a-developer-account](https://unsplash.com/documentation#creating-a-developer-account)
2. Clone the repository
   ```sh
   git clone git@github.com:stephanieongfr/react-native_pick-a-pic.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file based on `.env.example` file
5. Enter your API KEY in `.env`
   ```js
   EXPO_PUBLIC_API_KEY=yourkey
   ```
6. Install [Expo Go](https://expo.dev/go) on your device (recommended) or install Expo Go on your emulator
  [Expo Orbit](https://expo.dev/orbit)
7. Run below command to test the app on your device
   ```sh
   npm start
   ```


<!-- USAGE EXAMPLES -->
## Usage

There is no need to sign up.<br>
The home screen will display random pictures ; if you are looking for specific pictures, use the search bar.<br><br>
Click on a picture to get more details and add it to your favorites if you want to save it.<br><br>
From your favorites tab, you can delete pictures individually or delete them all.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-Native-url]: https://reactnative.dev/
[Expo.js]: https://img.shields.io/badge/App-Expo%20GO-lightgray
[Expo-url]: https://expo.dev/go
[NativeWind.js]: https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss
[NativeWind-url]: https://www.nativewind.dev/
[Expo-Orbit-url]:   https://expo.dev/orbit
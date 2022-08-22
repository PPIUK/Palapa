<!-- Title -->

<p align="center">
  <a href="https://github.com/expo/examples">
    <img alt="create-react-native-app" src="assets\PPI UK LOGO NORMAL-01 (1).png">
    <h1 align="center">PPI UK Mobile Application</h1>
  </a>
</p>

<!-- Header -->

<p align="center">
  <b>Discover Indonesia in United Kingdom</b>
  <br />

  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </p>

</p>

<!-- Body -->

PPI UK Mobile app use [React Native](https://reactnative.dev/docs/getting-started) and [Expo Managed Workflow](https://docs.expo.dev/). Expo is a set of tools built around React Native

# Installation

## React Native

Please refer to [React Native Installation Docs](https://reactnative.dev/docs/getting-started) for setting up the development environment including all the requirements such as

- Node 14 LTS

## Expo

Please refer to [Expo Installation Documentation](https://docs.expo.dev/get-started/installation/) for setting up the development environment including all the requirements. To install Expo use this command

- `npm install --global expo-cli`

## IOS Simulator / Android Emulator (Recommended)

[IOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) only available on Mac with Xcode, and [Android Studio emulator](https://docs.expo.dev/workflow/android-studio-emulator/) available on Windows and Mac with AndroidS Studio. Make sure to Set up the virtual device according to related Documentation

# Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

## `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

## `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

## `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## `npx expo-env-info`

Environment variables are global values that are defined in your system. This script shows all the environment variables including the `Expo Workflow: managed`

## `--legacy-peer-deps`

Dependencies sometimes cause conflict errors when running command, however we can ignore these conflict because it doesn't affect the program. Use it with the commant you want to use, for example

```
  npm install --legacy-peer-deps
```

# Deployment

see the expo documentation [here](https://docs.expo.dev/eas/)

## Configure app.json (Android)

- When uploading to google play, make sure `expo.android.versionCode` is different (incremented) than any versonCode uploaded before. This versionCode can be changed in `app.json` file

- [expo.android.permissions](https://docs.expo.dev/guides/permissions/) also has to be set to `[]` or minimal permission needed, [see the docmentation here](https://docs.expo.dev/versions/latest/config/app/#permissions). This however, could be changed in the future development depending on the feature of the app.

## Building Standalone Apps

> When building standalone apps, SDK 46 is the last SDK supported by [Classic Builds](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/?redirected) and the Classic Build service will stop running for all SDK versions after **January 4, 2023**. Instead, use [EAS Build](https://docs.expo.dev/build/setup/).

### Classic Build

[Classic Builds](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/?redirected) service allows you to create standalone binaries for the Expo app using the Expo CLI. You can use that binary to submit the app to the Apple App Store and Google Play Store or test on emulators.

There are two types of build you can generate when building a standalone app for Android: an APK or an Android App Bundle (aab).

make sure to follow all the steps in the classic build [documentation](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/?redirected)

### EAS Build

[EAS Build](https://docs.expo.dev/build/setup/) allows you to build a ready-to-submit binary of your app for the Apple App Store or Google Play Store.

make sure to follow all the steps in the EAS build [documentation](https://docs.expo.dev/build/setup/)

### Android app signing credentials

- If you have not yet generated a keystore for your app, you can let EAS CLI take care of that for you by selecting `Generate new keystore`, and then you are done. The keystore is stored securely on EAS servers.
- If you have previously built your app with `expo build:android`, you can use the same credentials here.
- If you want to manually generate your keystore, please see the manual [Android credentials](https://docs.expo.dev/app-signing/local-credentials/#android-credentials) guide for more information.
- For this project keystore information is stored in root folder with file name `keystore.txt`
- you can use this command to see and manage the credential
  ```
  expo credentials:manager
  ```

# Google Form, Sheets, MongoDB

## Google Form

Event organizer and Restaurant owner first has to fill google form with all the required field. These submission then will be stored in google sheets automatically

## AppScript

Data from Google Sheets then will be stored in MongoDB database automatically with AppScript. 
Each week on Monday, the AppScript trigger will activate to update the data from Google Sheets to MongoDB. If there is any changes you would like to update outside the designated trigger time, then open AppScript and Run the script. If any authorisation/authentication issue arises, see the documentation [here](https://docs.google.com/document/d/1liBr0oHrYDYdpqjkKjvx8NaxqGHyM0kJC6Asjzn5gJQ/edit?usp=sharing)

# Support and Contact

If you're having issues with Create React Native App, please make sure:

- The issue is not covered in the [Expo Docs](https://docs.expo.io/versions/latest/)
- There is not already an [open issue](https://github.com/expo/expo-cli/issues) for your particular problem

If you've checked the documentation and currently open issues, please either [open a new GitHub issue](https://github.com/expo/create-react-native-app/issues/new) or ask a question on [Expo forums](https://forums.expo.io/c/help).

<!-- Footer -->

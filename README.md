# Mobile Sensors Prototype

## Prerequisites
Node.js
- either set it up from https://nodejs.org/en/
- or via version manager like `nvm` https://github.com/creationix/nvm

Android Dev Environment
- scroll down for linux setup

## Install Dependencies
- install cordova globally
```sh
npm i -g cordova
```
- install node dependencies
```sh
npm install
```
- add android platform
```sh
# short version
npm run setup:cordova

# or more precisely
cd dist && cordova platform add android && cd ..
```
- also the dist directory is basically a cordova project right now, so you can add other platforms, install plusins etc...

## Running
- Dev Mode with WebBrowser http://localhost:8080
```sh
npm start
```
- Start/Deploy the mobile app. Depending on if you have Genymotion running with an emulator or have connected your android device
```
# short version
npm run start:cordova

# or more precisely
npm run build:legacy && cd dist && cordova run android && cd ..
```
- Also check `package.json` for more tasks

## Android Dev Environment (taken from my wiki)

### Setup Java Environment
Install JDK 6 or later:
```sh
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default
```
test is out: `javac -version`

### Setup Android Studio
1. Fix for 64bit distro:
```sh
sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6
```
2. Install from repo:
```sh
sudo add-apt-repository ppa:paolorotolo/android-studio
sudo apt-get update
sudo apt-get install android-studio
```
3. Set up SDK tools: `Click on Configure` -> `SDK Manage`

### Setup Genymotion as an Emulator
1. Install Dependencies
```sh
sudo apt-get install virtualbox libdouble-conversion1v5
```
2. Download genymotion `.bin` from: https://www.genymotion.com/download/
3. Make it executable & run it:
```sh
chmod +x ~/Downloads/genymotion-*.bin
sudo ~/Downloads/genymotion-*.bin
```

### Additional Setup
You might need to add the following line to `~/.bashrc` or `~/.zshrc`
```sh
export ANDROID_HOME="~/Android/Sdk/"
```

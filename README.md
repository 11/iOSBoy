# emus4iOS

### Description
The mission for the emus4iOS project is to create free, secure, high-quality, easy to download, offline emulators that do not void Apple's app store emulation policy.

### Why Even Make This?
If you are new to emulation on Apple's mobile hardware, Apple has a clause in their terms of use that speaks to why they don't allow emulators on the App Store

> "emulators allow you to execute arbitrary code, so a maliciously-crafted game (in theory) could pose a security risk for the devices."

Projects like `gba4iOS` and `DolphiniOS` have gotten around this clause by not pushing their app to Apple's app store, but rather allowing users to install the app after jail-breaking their device. While it is easy to install emulators after your device is jail-broken, the process of jail-breaking an iPhone is a large uphill battle. On top of this, there are many loses you are opting into when you do jail-break your device.
  1. You no longer can update your iOS without losing the jail-break
  2. You are more susceptible to downloading malicious unverified software
  3. You device is not considered under warranty while it is jail-broken
  4. There is usually a large time gap between new jail-break releases
  5. There is no guarentee that a new version of iOS will get a jail-break

While there are ways to install certain emulators without a jail-break, this leads to other issues that users need to consider. The main issue users face when installing emulators without a jail-break is Apple's app certificate expiration process.

Any app that isn't installed through the Apple App Store comes with what's known as an `app certificate`. This certificate is how Apple ensures that every app a user installs has been verified by a team of developers at Apple. Any unverified app that a user installs has an expiration date and will automaically be un-openable after exactly 1 week. While this is considered a _good_ security practice, this ultimatly strong holds users into Apple's terms of service policies - leaving you emulator-less ☹️

### How emus4iOS Works. How is it Safe?
`emus4iOS` uses two up and coming technologies to get around Apple's `app certificate` policy and to ensure a secure runtime - `Web Assembly` and `Progressive Web Apps`. You can learn more about these technologies here: <a href="https://webassembly.org/"> web assembly </a> & <a href="https://web.dev/progressive-web-apps/"> progressive web apps </a>

The main reason `emus4iOS` is safe is because the entire project runs in the browser. None of this code touches your device's hardware, leaving you free to run any potentially malcious game files without it affecting your device.

To allow you to have a more app-like experience, `emus4iOS` is written to work like a native app, but without requiring you to install anything. By bookmarking the website on your device, the website will open and feel like an app you downloaded from the app store, while still having the benefits of a safe and easy to use emulator. To learn how to bookmark and use the app, checkout the section below.

### How to Add emus4iOS to My Device
1. Grab your phone and go to https://www.emus4ios.app in the safari app
2. Click the share icon, and scroll down to `add to homescreen` - this will add the website to your homescreen as if it were an app.
3. Now open emus4iOS from your homescreen and enjoy
# iOSBoy - Actively Under Development 

### Description
The mission for the iOSBoy project is to create a free, secure, easy to download, offline Gameboy and Gameboy Color emulators that do not void Apple's app store emulation policy.

### Currently Supported Emulators
- [ ] Gameboy
- [ ] Gameboy Color

### Path of Development
1. Create a working Gameboy emulator without sound running on desktop
2. Create a working Web build of the original emulator with styled buttons on a webpage
2. Add sound and fine-tune the emulator timing
3. Getting Pokemon Red/Blue & Silver/Gold/Crystal running
4. Reverse engineer symlinking and allow users to trade pokemon over a network

### Resources
1. <a href="https://gbdev.io/pandocs/#video-display">pandocs</a>
2. <a href="https://gekkio.fi/files/gb-docs/gbctr.pdf">Gameboy: Complete Technical Reference</a>
2. <a href="https://github.com/Baekalfen/PyBoy/blob/master/PyBoy.pdf">PyBoy documentation manual</a>

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

### How iOSBoy Works. How is it Safe?
`iOSBoy` uses two up and coming technologies to get around Apple's `app certificate` policy and to ensure a secure runtime - `Web Assembly` and `Progressive Web Apps`. You can learn more about these technologies here: <a href="https://webassembly.org/"> web assembly </a> & <a href="https://web.dev/progressive-web-apps/"> progressive web apps </a>

The main reason `iOSBoy` is safe is because the entire project runs in the browser. None of this code touches your device's hardware, leaving you free to run any potentially malcious game files without it affecting your device.

To allow you to have a more app-like experience, `iOSBoy` is written to work like a native app, but without requiring you to install anything. By bookmarking the website on your device, the website will open and feel like an app you downloaded from the app store, while still having the benefits of a safe and easy to use emulator. To learn how to bookmark and use the app, checkout the section below.

### How to Add iOSBoy to My Device
1. Grab your phone and go to https://www.iOSBoy.app in the safari app
2. Click the share icon, and scroll down to `add to homescreen` - this will add the website to your homescreen as if it were an app.
3. Now open iOSBoy from your homescreen and enjoy

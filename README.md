# emus4iOS

### Description
The mission for the emus4iOS project is to create a free, high-quality, easy to download, offline emulator that does not void Apple's app store emulation policy.

### Why Even Make This?
If you are new to device emulation on Apple's mobile hardware, Apple has a clause in there terms of use that states that ""

Projects like `gba4iOS` and `DolphiniOS` have gotten around this clause by not pushing their app to Apple's app store, but rather allowing users to directly download the app from the `gba4ios` website. If you are not looking to jailbreak your device, the main issue users face when using either app is Apple's app certificate expiration.

Any app that isn't installed through the Apple App Store comes with what's known as an `app certificate`. This certificate is how Apple ensures that every app a user installs has been verified by a team of developers at Apple. Any unverified app that a user installs has an expiration date and will automaically be un-openable after exactly 1 week. While this is great for security, this ultimatly strong holds users into Apple's terms of service policies.

### How emus4iOS Works
`emus4iOS` uses two up and coming technologies to get around Apple's `app certificate` policy - `Web Assembly` and `Progressive Web Apps`.

`Web Assembly` is a binary instruction format for a stack-based virtual machine. `Wasm` is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

`Progressive Web Apps` is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser.

With both web assembly and progressive web apps, `emus4iOS` is able to feel like an installed offline emulator, while avoiding all the headaches that comes with other iOS emulation projects.

### How to Download
1. Grab your phone and go to https://www.emus4ios.app in the safari app
2. Click the share icon, and scroll down to `add to homescreen` - this will add the website to your homescreen as if it were an app.
3. Now open emus4iOS from your homescreen and enjoy
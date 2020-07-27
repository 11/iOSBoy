# install rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && echo "1"

# setup rustup toolchain to have the wasm target
rustup target add wasm32-unknown-unknown

# compile and build the project in production mode
webpack --mode=production
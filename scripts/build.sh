# install rustup
echo "- Installing rustup"
echo "- Installing wasm32 target"
echo "- Compiling & Building with webpack"
echo "******************************************"

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && echo "1"
echo "✅ Installing rustup"

# setup rustup toolchain to have the wasm target
rustup -y target add wasm32-unknown-unknown
echo "✅ Installing wasm32 target"

# compile and build the project in production mode
webpack --mode=production
echo "✅ Compiling & Building with webpack"
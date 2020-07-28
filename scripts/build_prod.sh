# install rustup
echo "- Installing rustup"
echo "- Configure rust environment"
echo "- Installing wasm-pack"
echo "- Installing wasm32 target"
echo "- Compiling and building emu4iOS' emulators to wasm32 target"
echo "- Compiling and building JS to webpack production target"
echo "**********************************************************"

curl https://sh.rustup.rs -sSf | sh -s -- -y
echo "✅ Installing rustup"

source $HOME/.cargo/env
echo "✅ Configure rust environment"

curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
echo "✅ Installing wasm-pack"

rustup target add wasm32-unknown-unknown
echo "✅ Installing wasm32 target"
#
# cargo build --target wasm32-unknown-unknown
# echo "✅ Compiling and building emu4iOS' emulators to wasm32 target"
#
# webpack --mode=production
# echo "✅ Compiling and building JS to webpack production target"
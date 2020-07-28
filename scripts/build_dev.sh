echo "- Compiling and building emu4iOS' emulators to wasm32 target"
echo "- Compiling and building JS to webpack production target"
echo "**********************************************************"

if [ ! -d "./pkg/" ]; then
  cargo build --target wasm32-unknown-unknown
fi
echo "✅ Compiling and building emu4iOS' emulators to wasm32 target"

webpack --mode=production
echo "✅ Compiling & Building with webpack"
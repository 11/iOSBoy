extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use web_sys::*;

// mod client;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);
}

#[wasm_bindgen]
pub struct Client { }

#[wasm_bindgen]
impl Client {

  #[wasm_bindgen(constructor)]
  pub fn new() -> Self {
    log("constructor");
    Self { }
  }

  pub fn update(&self) {
    log("update");
  }

  pub fn render(&self) {
    log("render");
  }

}
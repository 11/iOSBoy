use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;
use web_sys::*;
use web_sys::CanvasRenderingContext2d;

pub fn initialize_canvas_context() -> Result<CanvasRenderingContext2d, JsValue> {
  let window = window().unwrap();
  let document = window.document().unwrap();

  let canvas = document.get_element_by_id("gameboy-canvas").unwrap();
  let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;

  let context: CanvasRenderingContext2d = canvas.get_context("2d")?.unwrap().dyn_into()?;

  return Ok(context);
}
pub enum Register {
  Reg8: u8,
  Reg16: u16,
}

pub struct Registers {
  pub a: Register::Reg8,   // general memory registers
  pub b: Register::Reg8,
  pub c: Register::Reg8,
  pub d: Register::Reg8,
  pub e: Register::Reg8,
  pub h: Register::Reg8,
  pub l: Register::Reg8,
  pub f: Register::Reg8,    // flags
  pub sp: Register::Reg16,  // stack pointer
  pub pc: Register::Reg16,  // program counter
}

impl Registers {
  pub fn new() -> Self {
    Registers { a: 0, b: 0, c: 0, d: 0, e: 0, h: 0, l: 0,
      f: 0,
      sp: 0,
      pc: 0, };
  }

  pub read(reg: &Register::Reg8) -> Reg8 { }

  pub read_af() -> Reg16 {}

  pub read_cb() -> Reg16 {}

  pub read_ed() -> Reg16 {}

  pub read_lh() -> Reg16 {}
}

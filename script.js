const link = document.getElementById("link");
const parent = document.getElementsByClassName("parent");

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "1") {
    link.href = "./1.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "2") {
    link.href = "./2.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "3") {
    link.href = "./3.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "4") {
    link.href = "./4.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "5") {
    link.href = "./5.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "6") {
    link.href = "./6.asm";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "b") {
    link.href = "./BinaryMultiplier.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "m") {
    link.href = "./Multiplexer.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  } else if (e.key === "r") {
    link.href = "./RCA.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "l") {
    link.href = "./cla.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "h") {
    link.href = "./Half Adder.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "f") {
    link.href = "./Full Adder.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "s") {
    link.href = "./CSA.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "g") {
    link.href = "./COA lab manual.pdf";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "*") {
    link.href = "./Carry Save Multiplier.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }else if (e.key === "a") {
    link.href = "./ALU.gcg";
    let state = false;
    const auth = (state) => {
      if (state === true) {
        setTimeout(() => {
          link.click();
          link.href = "#";
        }, 0);
      }
    };
    state = !state;
    auth(state);
  }
});

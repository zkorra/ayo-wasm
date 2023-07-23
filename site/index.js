import('./node_modules/ayo-wasm/ayo_wasm.js').then((js) => {
  js.greet('WebAssembly with npm')
})

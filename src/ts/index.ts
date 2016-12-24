const main = () => {
    console.log("main....");
    if ('WebAssembly' in window) {
        fetch('./src/cpp/hello_world.wasm') // Fetch the binary
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.compile(buffer)) // Get a Module from the buffer
            .then(module => {
                // Get an Instance of the Module
                const dependencies = {
                    "global": {},
                    "env": {}
                };
                const instance = new WebAssembly.Instance(module, dependencies);
                console.log(instance.exports)

                const wasm = instance.exports;
                console.log("count function result is : " + wasm.count());
                console.log("count function result is : " + wasm.count());
                console.log("count function result is : " + wasm.count());
            });
    } else {
        console.log("Your browser doesn't support Web Assembly. You may need " +
            "to enable it in your browser's flags.");
    }
}

main();
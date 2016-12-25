 
# WebAssembly (wasm) & Webpack starter project 

Building the WebAssembly binary (wasm) is based on this [tutorial](https://tutorials.technology/tutorials/11-webassembly-initial-steps-tutorial.html).
But docker containers are used to make sharing the compiler toolchain more efficiently.

### prerequisite
 npm i -g webpack@2.2.0-rc.2   
 npm i -g typescript@2.1.4   
 npm i -g webpack-dev-server@2.2.0-rc.0   

#### Get a Docker container with the compiler chain
```
cd ./llvm-webassembly
make pull
```

or 

#### Build the Docker container with the compiler chain yourself (30min)
```
make build
```


### Building the hello world wasm
 ```
 cd <webassembly-webpack-starter-project>/src/cpp/
 docker run --rm --name generate-wasm-default -v ${PWD}:/src  -i -t chrisber/llvm-webassembly:latest /bin/build.sh hello_world.c
```

or 
```
sudo ln -s  <webassembly-webpack-starter-project>/config/d2wasm.sh /usr/local/bin/d2wasm
cd <webassembly-webpack-starter-project>/src/cpp/
d2wasm hello_world.c
```

### webpack dev server

```
cd <webassembly-webpack-starter-project>/
npm i
npm run dev
```

### project directory   
├── config (Webpack build config)   
│   ├── d2wasm.sh   
│   ├── webpack.common.js   
│   ├── webpack.dev.js   
│   └── webpack.prod.js   
├── dist (production build output)   
├── libs   
│   └── libtensorflow.so   
├── llvm-webassembly   
│   ├── build.sh   
│   ├── Dockerfile   
│   └── Makefile   
├── package.json   
├── Readme.md   
└── src   
    ├── cpp    
    │   ├── hello_world.c (entry file to build .wasm)   
    │   ├── hello_world.wasm   
    │   ├── includes   
    ├── html   
    │   └── index.html (entry file html)   
    └── ts   
        ├── polyfills.ts   
        ├── index.ts (entry file to build .js)   
        └── vendor.ts   

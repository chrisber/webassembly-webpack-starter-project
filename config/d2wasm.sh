#!/usr/bin/env bash
cd "${PWD}"
if [ -f $1 ]; then 
docker run --rm --name generate-wasm-default -v ${PWD}:/src  -i -t chrisber/llvm-webassembly:latest  "/bin/build.sh" $1
exit $?
fi
echo "Error file $1 does not exits ${PWD}!"



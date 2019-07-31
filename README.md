# next-lib-bug

## Steps to reproduce error

1. Go to library/ folder.

   ```shell
   yarn
   yarn build
   ```

1. Go to project/ folder.

   ```shell
   yarn
   yarn dev
   ```

## To Avoid error

1. Reference the transpiled file directly instead of from node_modules

2. Pass next/document to HOC directly

also see [project/pages/_document.js](project/pages/_document.js).

# Instalation Typescript di Project

1. yarn init / npm init ( init apps yang akan menghasilkan package.json ) 
2. yarn add typescript -D ( install typescript type development )
3. tambahkan 3 scripts ini 
  ```
  "scripts": {
    "tsc": "rm -rf build/ && tsc", // utk compiler nya
    "ts": "rm -rf build/ && tsc -w", // utk watch jadi ketika ada perubahan akan terdetect
    "dev": "nodemon ./build/index.js" // merestart apps secara otomatis meski ada perubahan
  },
  ```

4. jalankan `./node_modules/.bin/tsc --init` akan menghasilkan file tsconfig.json
5. buka file tsconfig.json dan uncomment "allowJs": true,  "outDir": "./build",
6. buka file index.ts
7. ketikan console.log('hi world');
8. ketik di terminal yarn ts yang akan menghasilkan folder build yang didalamnya ada file index.js hasil compile.
9. jalankan yarn dev yg berasal dari scripts di package.json 

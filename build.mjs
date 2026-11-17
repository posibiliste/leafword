import { build } from 'esbuild';
import {mkdir,copyFile,writeFile} from 'node:fs/promises';
await mkdir('dist/vendor/core',{recursive:true});await mkdir('dist/vendor/lang',{recursive:true});
await copyFile('node_modules/tesseract.js/dist/worker.min.js','dist/vendor/worker.min.js');
for(const name of ['tesseract-core-lstm.wasm','tesseract-core-lstm.wasm.js','tesseract-core-simd-lstm.wasm','tesseract-core-simd-lstm.wasm.js'])await copyFile('node_modules/tesseract.js-core/'+name,'dist/vendor/core/'+name);
await copyFile('node_modules/pdfjs-dist/build/pdf.worker.min.mjs','dist/vendor/pdf.worker.min.mjs');
const response=await fetch('https://tessdata.projectnaptha.com/4.0.0/eng.traineddata.gz');if(!response.ok)throw Error('Language download failed');await writeFile('dist/vendor/lang/eng.traineddata.gz',new Uint8Array(await response.arrayBuffer()));
await build({entryPoints:['app-source.js'],bundle:true,format:'esm',minify:true,outfile:'dist/app.js'});

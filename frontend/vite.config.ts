import { defineConfig } from 'vite';
import {preactConfig} from './config/preact.config';
import preact from '@preact/preset-vite';
import {resolve} from 'path'
const root = `/frontend`
const src =  resolve(root, '/src')
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(preactConfig),
	],
});

import { proxy } from "valtio";
const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './vite.svg',
    fullDecal: './vite.svg',
});
export default state;
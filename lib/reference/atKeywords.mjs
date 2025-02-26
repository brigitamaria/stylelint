import uniteSets from '../utils/uniteSets.mjs';

// https://www.w3.org/TR/css-nesting-1/#conditionals
export const nestingSupportedAtKeywords = new Set([
	'container',
	'layer',
	'media',
	'scope',
	'supports',
]);

// https://www.w3.org/TR/css-page-3/#syntax-page-selector
const pageMarginAtKeywords = new Set([
	'top-left-corner',
	'top-left',
	'top-center',
	'top-right',
	'top-right-corner',
	'bottom-left-corner',
	'bottom-left',
	'bottom-center',
	'bottom-right',
	'bottom-right-corner',
	'left-top',
	'left-middle',
	'left-bottom',
	'right-top',
	'right-middle',
	'right-bottom',
]);

// https://developer.mozilla.org/en/docs/Web/CSS/At-rule
export const atKeywords = uniteSets(pageMarginAtKeywords, [
	'annotation',
	'apply',
	'character-variant',
	'charset',
	'container',
	'counter-style',
	'custom-media',
	'custom-selector',
	'document',
	'font-face',
	'font-feature-values',
	'import',
	'keyframes',
	'layer',
	'media',
	'namespace',
	'nest',
	'ornaments',
	'page',
	'property',
	'scroll-timeline',
	'scope',
	'styleset',
	'stylistic',
	'supports',
	'swash',
	'viewport',
]);

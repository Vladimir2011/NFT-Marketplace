export const getImage = image => {
	// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
	return new URL(`../static/img/${image}`, import.meta.url).href
}

export const getImageSvg = image => {
	// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
	return new URL(`../static/svg/${image}`, import.meta.url).href
}

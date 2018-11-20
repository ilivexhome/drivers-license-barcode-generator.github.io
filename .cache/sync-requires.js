// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/kyledecot/Desktop/drivers-license-barcode-generator/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kyledecot/Desktop/drivers-license-barcode-generator/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/kyledecot/Desktop/drivers-license-barcode-generator/src/pages/page-2.js"))
}


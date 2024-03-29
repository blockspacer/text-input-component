module.exports = {
  inputFiles: [
    'packages/@(vue|react)/demo/**/index.bundle.js',
    'packages/@(vue|react)/demo/**/*.ejs.html',
    'packages/core/demo/*.bundle.css'
  ],
  revisedFiles: [
  ],
  outputFiles: file => file.replace('.ejs', ''),
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName,
  base: 'packages',
  fileSize: 'file-size.json'
}

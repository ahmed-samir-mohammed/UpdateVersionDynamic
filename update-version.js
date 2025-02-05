const fs = require("fs");
const path = require("path");

const getVersionFromArgs = () => {
  const args = process.argv.slice(2);
  const versionArg = args.find((arg) => arg.startsWith("--v="));
  return versionArg ? versionArg.split("=")[1] : "1.0.0";
};

const updateFileContent = (filePath, regex, replacement) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
};

const version = getVersionFromArgs();
const distPath = path.join(__dirname, "../Haj-Build/Test");

const indexFilePath = path.join(distPath, "index.html");
if (
  updateFileContent(
    indexFilePath,
    /(href="[^"]+\.css)"/g,
    `$1?v=${version}"`
  ) &&
  updateFileContent(indexFilePath, /(src="[^"]+\.js)"/g, `$1?v=${version}"`)
) {
  console.log("✅ index.html Done");
}

const files = fs.readdirSync(distPath);
const mainJsFile = files.find(
  (file) => file.includes("main.") && file.endsWith(".js")
);

if (mainJsFile) {
  const mainJsFilePath = path.join(distPath, mainJsFile);
  if (
    updateFileContent(
      mainJsFilePath,
      /(\/assets\/i18n\/".+?\.json)"/g,
      `$1?v=${version}"`
    )
  ) {
    console.log("✅ main.js Done");
  }
}

console.log(`🎉Done! (Version: ${version})`);

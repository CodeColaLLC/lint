const path = require('path');
const fs = require('fs-extra');

const projectPath = path.join('..', '..', '..');
const packageJsonPath = path.join(projectPath, 'package.json');
try {
	fs.accessSync(packageJsonPath, fs.F_OK);
} catch (err) {
	process.exit(0);
}

const eslint = {extends: './node_modules/@codecola/lint/lib/.eslintrc.json'};
fs.writeFileSync(path.join(projectPath, '.eslintrc.json'), JSON.stringify(eslint), {encoding: 'utf8'});

const packageJson = require(packageJsonPath);
packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.lint = 'eslint lib --ext .js,.jsx';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), {encoding: 'utf8'});

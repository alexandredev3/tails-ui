const { compiler } = require('./dist/compiler');

const loader = async function (content) {
    compiler(content);

    return content;
}

module.exports = loader;
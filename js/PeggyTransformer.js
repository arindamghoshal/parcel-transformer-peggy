const { Transformer } = require("@parcel/plugin");
const { generate } = require("peggy");

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = "js";
    asset.setCode(generate(await asset.getCode(), {
      format: "commonjs",
      output: "source",
    }));

    return [asset];
  },
});
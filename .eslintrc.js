module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: [
    // 用到的插件
    "@typescript-eslint",
    "prettier"
  ],
  globals: {
    PublicKeyCredential: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error", // prettier标记的地方抛出错误信息
    "spaced-comment": [2, "always"], // 注释后面必须写两个空格
    "@typescript-eslint/no-explicit-any": ["off"] // 关闭any校验
  }
};

module.exports = {
  apps: [
    {
      name: "pw",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};

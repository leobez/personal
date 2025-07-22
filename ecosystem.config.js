module.exports = {
  apps: [
    {
      name: "pw",
      script: "npm",
      args: "start",
      instances: 1,              
      exec_mode: "fork",       
      env: {
        NODE_ENV: "production"
      },
      watch: false,              
    }
  ]
};

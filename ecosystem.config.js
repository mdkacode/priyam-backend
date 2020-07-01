module.exports = {
    apps: [
            {
                    name: "Priyam-code",
                    script: "npm start",
                    env: {
                            NODE_ENV: "production",
                    },
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    env_production: {
                            NODE_ENV: "production",
                    },
            },
    ],
};
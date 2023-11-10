let config = {
    presets: [
        ['@babel/preset-env'],
        ['@babel/preset-react'],
    ],
    plugins: [
        ["@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ],
}

export default config;

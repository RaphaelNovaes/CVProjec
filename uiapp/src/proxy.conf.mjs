export default [
    {
        context: [
            '/api/**'
        ],
        target: "http://127.0.0.1:8000",
        secure: false,
        pathRewrite: {
            "^/api": ""
        },
        changeOrigin: true,
        logLevel: "debug"
    }
]
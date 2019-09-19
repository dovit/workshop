import * as express from 'express'

interface AppInterface {
    mountRoutes(): void
}

class App implements AppInterface{
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes()
    }

    public mountRoutes(): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: "Hello"
            })
        })
        this.express.use('/', router)
    }
}

export default new App().express()

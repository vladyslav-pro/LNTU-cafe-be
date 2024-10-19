import {app} from "./app/app";

const port = process.env.port || 3000;

const startApp = () => {
    app.listen(port, () => {
            console.info(`port is run on port ${port}`);
    })
}
startApp();
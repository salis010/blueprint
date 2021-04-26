import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import * as React from 'react'
import * as reactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { App } from '../frontend/app'
import { store } from '../frontend/redux-components/store'

const app = express()
const port = 3000

// CSR
// app.use(express.static(path.resolve(__dirname, "../../dist", "dist-frontend/")))

// SSR
const { renderToString } = reactDOMServer

app.get('*', (req, res) => {
	const filePath = path.resolve(__dirname, "../../dist", "dist-frontend", "index.html")
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if(err) {
			console.error(err)
			res.status(404).send('Error: 404')
		}

		const reactHtml = renderToString(
			<Provider store={store}>
				<App />
			</Provider>)
		const html = data.replace('{{HTML}}', reactHtml)
		res.status(200).send(html)
	})
})

app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})

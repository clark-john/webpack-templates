import React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'

createRoot(document.querySelector("#app")).render(
	<React.StrictMode>
		<App />	
	</React.StrictMode>
)

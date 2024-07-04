import "./App.css"
import logo from "./Holberton-logo.png"
import { getFooterCopy, getFullYear } from "./utils"


export default function App(){
  return <>
  <header className="App-header">
    <img alt="logo"  src={logo}/>
    <h1>School dashboard</h1>
  </header>
  <body className="App-body">
    <p>Login to access the full dashboard</p>
  </body>
  <footer className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
  </footer>
  </> 
}

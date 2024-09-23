import useRoutesCustom from "./hooks/useRoutesCustom"
import './styles/style.scss'

function App() {
  const routes = useRoutesCustom();
  return routes
}

export default App

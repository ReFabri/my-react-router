import BrowserRouter from "./BrowserRouter";
import Route from "./Route";

function App() {
  return (
    <BrowserRouter>
      <h2>Browser Router</h2>
      <Route path="/1">
        <h3>Route 1</h3>
      </Route>
      <Route path="/2">
        <h3>Route 2</h3>
      </Route>
    </BrowserRouter>
  );
}

export default App;

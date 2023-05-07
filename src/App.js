// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Stack } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1>This is a header</h1>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link change
        </Button>
      </Stack>
    </div>
  );
}

export default App;

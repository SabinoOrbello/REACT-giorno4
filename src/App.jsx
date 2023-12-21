import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBarComponent from "./component/TopBarComponent";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./component/BookList";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <TopBarComponent />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

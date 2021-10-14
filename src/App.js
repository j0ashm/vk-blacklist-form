import { Container } from "@chakra-ui/layout";
import Header from "./components/Header";
import BLForm from "./components/BLForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Container size="container.md" centerContent>
      <Header />
      <BLForm />
      <Footer />
    </Container>
  );
}

export default App;

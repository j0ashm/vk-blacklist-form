import { Container } from "@chakra-ui/layout";
import Header from "./components/Header";
import BLForm from "./components/BLForm";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet"

function App() {
  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>V&K Blacklist Form</title>
      </Helmet>
      <Container size="container.md" centerContent>
        <Header />
        <BLForm />
        <Footer />
      </Container>
    </>
  );
}

export default App;

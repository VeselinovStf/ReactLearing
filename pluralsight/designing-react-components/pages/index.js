import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Speakers from "../src/components/Speakers/Speakers";

function Run() {
  return (
    <div>
      <Header />
      <Menu />
      <SearchBar />
      <Speakers />
      <Footer />
    </div>
  );
}

export default Run;

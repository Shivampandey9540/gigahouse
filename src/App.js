import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
import Navbar from './Component/Header';
import Accordion from './About';
import Project from './Component/Project';
import NewSection from './Component/News';
import HeroSection from './Component/HeroSection';
import Footer from './Component/Footer';

function App() {
  const accordionItems = [
    {
      title: 'Website Design',
      content: 'Content for item 1...',
    },
    {
      title: 'App Design',
      content: 'Content for item 2...',
    },
    {
      title: 'Development',
      content: 'Content for item 2...',
    },
    // Add more items as needed
  ];
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar />
      <Accordion items={accordionItems} />
      <Project />
      <NewSection />
      {/* <Circle /> */}
      <Footer />

    </div>
  );
}

export default App;

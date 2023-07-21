// import './App.css';
import Main from './Components/Main';
import SpecialSection from './SpecialSection';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import MainLayout from './Layouts/MainLayout';




function App() {
  return (
    <div>
      <MainLayout>

        <Main />
        <SpecialSection />
        <Testimonial />
        <About />

      </MainLayout>


    </div>
  );
}

export default App;

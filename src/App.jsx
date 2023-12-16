import Background from './components/background-image/Background';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Badge from './components/Purple-badge/Badge';
import Feature from './components/feature/Feature';
import Collection from './components/collection/Collection';
import Community from './components/community/Community';
import Partners from './components/partners/Partners';
import NewsLetter from './components/newsletter/NewsLetter';
import Footer from './components/footer/Footer';
import "./App.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="container w-full mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-[860px] sm:max-w-[95%]">
    <Background />
    <Nav />
    <Main />
    <Badge />
    <Feature />
    <Collection />
    <Community />
    <Partners />
    <NewsLetter />
    <Footer />
    </div>
  )
}
 
export default App

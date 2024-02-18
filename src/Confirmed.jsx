import Highlights from './comp/Highlights';
import './App.css';
import Footer from './comp/Footer';
import Header from './comp/Header';
import ConfirmedBooking from './comp/ConfirmedBooking';
function Booking() {

  return (
    <>
      <Header />
      <ConfirmedBooking/>
      <Highlights />
      <Footer />
    </>
  );
}

export default Booking;

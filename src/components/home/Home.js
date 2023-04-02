import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
const toursData = require('../../data/db.json');
function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div class="tourClass">
        {
          toursData.map(element => {
            return (
              <Tours TourName={element.name} TourImage={element.image} />
            )
          })
        }
      </div>

      <div>
        <Footer />
      </div>

    </>
  )

}

export default Home;
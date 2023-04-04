import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home(props) {
  return (
    <>
      <div>
        <Header />
      </div>

      <div class="tourClass">
        {
          props.data.map(element => {
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
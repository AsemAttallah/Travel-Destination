import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";
function Home(props) {

  function welcome (login){
    console.log("welcome from home component",login)
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div class="tourClass">
      <Tours data={props.data} />
      </div>
      <div>
        <Footer />
    </div>
     

    </>
  )

}

export default Home;
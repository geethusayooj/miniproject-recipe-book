import noFood from "../component/imagelogo/noFood.png"

function ErrorPage(){

    return(
      <div className="errorContainer">

        <h1> Ooops! I'm an error page! </h1>

        <img className="errorImage" src={noFood} alt="Error Page" />

      </div>
    )
}

export default ErrorPage
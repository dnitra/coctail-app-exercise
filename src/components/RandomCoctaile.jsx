
import FetchData from "../hooks/FetchData"

export default function RandomCoctaile() {


    const [coctaile , getCoctail] = FetchData("https://www.thecocktaildb.com/api/json/v1/1/random.php")
   
    return (

            
        <div className="random-coctail">

            {
                coctaile ? (
                    <>
                        <h3>You got {coctaile.drinks[0].strDrink }</h3>
                    </>
                ) :"Loading"
            }
            <button onClick={getCoctail}>
                Get another random Coctail
            </button>
        </div>
    )

}
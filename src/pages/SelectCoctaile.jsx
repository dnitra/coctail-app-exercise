import { useState } from "react"


export default function SelectCoctaile() {

    const [query,setQuery] = useState("")
    
    const [coctailes,setCoctailes] = useState(null)

    
    const getCoctail = async () => {
        
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        
        setCoctailes(data)
    }

    function handleQuery(e){
        setQuery(e.target.value)

    }

    function handleClick() {
        getCoctail()
  }
    
    return (

            
        <div className="select-coctail">

        <h2>Choose youre drink</h2>
            <input
                
                type="text"
                onChange={handleQuery}
        
      />
            
            <button onClick={handleClick}>
                Get more info
            </button>
            <ul>
            {
                coctailes ? 
                    <>
                            {coctailes.drinks?
                                coctailes.drinks.map((coctaile, i) => <li key={i}>{coctaile.strDrink}</li>) :"No drinks found"}
                    </>
                 :""
                }
                
                </ul>
        </div>
    )

}
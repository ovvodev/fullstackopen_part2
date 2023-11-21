const Search = ({ countryName,  handleCountry}) => {
    return(
        <div>
            <form>
                <p>Find countries<input value={countryName} onChange={handleCountry}/></p> 
            </form>
        </div>
    )
}

export default Search
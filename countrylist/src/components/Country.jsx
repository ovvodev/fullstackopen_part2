const Country = ({country}) => {

    return (
        <div>
            <h1>{country.name.common}</h1> 
            <p>capital : {country.capital}</p>
            <p>area : {country.area}</p>
            <h2>Languages :</h2>
            <ul>
                {country.languages.map(language => {
                    <li>{language.name}</li>
                })}
            </ul>
        </div>
      );

}

export default Country
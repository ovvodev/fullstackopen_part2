const Countries = ({countries, message}) => {

    return (
        <div>
            <p>{message}</p>
                {countries.map(country => (
            <p key={country.cca3}>{country.name.common}</p>
          ))}
        </div>
      );

}

export default Countries
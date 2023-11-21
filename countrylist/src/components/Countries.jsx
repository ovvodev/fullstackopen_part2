const Countries = ({ countries, message }) => {
  return (
    <div>
      <p>{message}</p>
      {countries.map((country) => (
        <p key={country.cca3}>{country.name.common}</p>
      ))}
      {countries.length === 1 && (
        <div>
          {countries.map((country) => (
            <div key={country.cca2}>
              <h1>{country.name.common}</h1>
              <p>capital: {country.capital}</p>
              <p>area: {country.area}</p>
              <h2>Languages:</h2>
              <ul>
                {Object.entries(country.languages).map(([languageCode, languageName], index) => (
                  <li key={index}>{languageName}</li>
                ))}
              </ul>
              <img src={Object.values(country.flags)[0]} alt={Object.values(country.flags)[2]} width={200} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;

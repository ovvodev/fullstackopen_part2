
const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.entries(country.languages).map(([languageCode, languageName], index) => (
          <li key={index}>{languageName}</li>
        ))}
      </ul>
      {country.flags && (
        <img src={Object.values(country.flags)[0]} alt={Object.values(country.flags)[2]} width={200}/>
      )}
    </div>
  );
};

export default Country;
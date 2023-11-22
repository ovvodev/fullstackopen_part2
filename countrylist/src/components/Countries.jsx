


const Countries = ({ countries, message , showMore }) => {
  return (
    <div>
      <p>{message}</p>
      {countries.map((country) => (
        <li key={country.cca3}>{country.name.common} <button onClick={() => showMore(country.name.common)}>Show</button> </li>
      ))}
      
    </div>
  );
};

export default Countries;

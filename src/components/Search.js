import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search= () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: valorDelInput });
  };

  return (
    <div>
      Busqueda
      <form onSubmit={handleSubmit}>
        <input type="tex" onChange={handleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};
export default Search;

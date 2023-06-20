import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<ISearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Input
        value={searchTerm}
        onChange={handleChange}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input/Input';
import Table from '../../molecules/Table/Table';
import { API } from '../../../shared/api';
import { ISpacexRockets } from '../../../shared/api/types';
import { StyledWrapper } from './style';

interface ISearchTableProps {
  rockets: ISpacexRockets[];
}

const SearchTable: React.FC<ISearchTableProps> = () => {
  const [rockets, setRockets] = useState<ISpacexRockets[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<ISpacexRockets[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRockets();
  }, []);

  const fetchRockets = async () => {
    try {
      const rocketsData = await API.getSpacexRockets();
      setRockets(rocketsData);
      setFilteredRockets(rocketsData);
    } catch (error) {
      console.log('Error fetching rockets:', error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    // Filter the rockets based on the search term
    const filteredRockets = rockets.filter((rocket) =>
      rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRockets(filteredRockets);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledWrapper>
      <Input
        value={searchTerm}
        onChange={handleChange}
        onSearch={() => handleSearch(searchTerm)}
      />
      <Table rockets={filteredRockets} />
    </StyledWrapper>
  );
};

export default SearchTable;

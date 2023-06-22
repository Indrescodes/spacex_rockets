import React, { useState, useEffect } from 'react';
import { API } from '../../../shared/api';
import {
  StyledInput,
  StyledInputWrapper,
  StyledResultCount,
  StyledSpaceXLogo,
} from './styles';

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Input: React.FC<IInputProps> = ({ value, onChange, onSearch }) => {
  const [resultCount, setResultCount] = useState<number>(0);

  useEffect(() => {
    fetchRockets();
  }, [value]);

  const fetchRockets = async () => {
    try {
      const rockets = await API.getSpacexRockets();
      const filteredRockets = rockets.filter((rocket) =>
        rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
      setResultCount(filteredRockets.length);
    } catch (error) {
      console.log('Error fetching SpaceX rockets:', error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent page reload
      onSearch();
    }
  };

  return (
    <StyledInputWrapper>
      <StyledSpaceXLogo>SpaceX rockets</StyledSpaceXLogo>
      <StyledResultCount>
        <span>{resultCount}</span> Results
      </StyledResultCount>

      <div className='StyledInputWithIcon'>
        <StyledInput
          type='text'
          value={value}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          placeholder='Search'
        />
      </div>
    </StyledInputWrapper>
  );
};

export default Input;

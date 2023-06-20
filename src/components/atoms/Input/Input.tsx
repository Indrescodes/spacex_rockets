import React, { useState, useEffect } from 'react';
import { API } from '../../../shared/api';
import { StyledInputWrapper } from './styles';

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
      onSearch();
    }
  };

  const handleIconClick = () => {
    onSearch();
  };

  return (
    <StyledInputWrapper>
      <div>SpaceX rockets</div>
      <div>
        <span>{resultCount}</span> Results
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='1em'
        viewBox='0 0 512 512'
        onClick={handleIconClick}
      >
        <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
      </svg>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </StyledInputWrapper>
  );
};

export default Input;

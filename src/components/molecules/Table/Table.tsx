import React from 'react';
import { ISpacexRockets } from '../../../shared/api/types';
import { StyledNotFound, TableRow } from './styles';

interface ITableProps {
  rockets: ISpacexRockets[];
}

const Table: React.FC<ITableProps> = ({ rockets }) => {
  if (rockets.length === 0) {
    return <StyledNotFound>No results found</StyledNotFound>;
  }
  return (
    <div>
      <div>
        <TableRow>
          <ul className='table-head'>
            <li>Rocket name</li>
            <li>Diameter</li>
            <li>Height</li>
            <li>Mass</li>
            <li>Cost per launch</li>
          </ul>
        </TableRow>
      </div>
      <div>
        <TableRow>
          {rockets.map((rocket) => (
            <ul key={rocket.id}>
              <li>{rocket.rocket_name}</li>
              <li>{rocket.diameter.meters} m</li>
              <li>{rocket.height.meters} m</li>
              <li>{rocket.mass.kg} kg</li>
              <li>${rocket.cost_per_launch.toLocaleString()}</li>
            </ul>
          ))}
        </TableRow>
      </div>
    </div>
  );
};

export default Table;

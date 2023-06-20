import React from 'react';
import { ISpacexRockets } from '../../../shared/api/types';

interface ITableProps {
  rockets: ISpacexRockets[];
}

const Table: React.FC<ITableProps> = ({ rockets }) => {
  if (rockets.length === 0) {
    return <div>Not found</div>;
  }
  return (
    <div>
      <div>
        <ul>
          <li>Rocket name</li>
          <li>Diameter</li>
          <li>Height</li>
          <li>Mass</li>
          <li>Cost per launch</li>
        </ul>
      </div>
      <div>
        {rockets.map((rocket) => (
          <ul key={rocket.id}>
            <li>{rocket.rocket_name}</li>
            <li>{rocket.diameter.meters} m</li>
            <li>{rocket.height.meters} m</li>
            <li>{rocket.mass.kg} kg</li>
            <li>${rocket.cost_per_launch.toLocaleString()}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Table;

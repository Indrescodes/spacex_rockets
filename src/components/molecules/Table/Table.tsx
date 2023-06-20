import React from 'react';

interface Rocket {
  id: number;
  rocket_name: string;
  diameter: {
    meters: number;
  };
  height: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  cost_per_launch: number;
}

interface ITableProps {
  rockets: Rocket[];
}

const Table: React.FC<ITableProps> = ({ rockets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rocket name</th>
          <th>Diameter</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Cost per launch</th>
        </tr>
      </thead>
      <tbody>
        {rockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.rocket_name}</td>
            <td>{rocket.diameter.meters} meters</td>
            <td>{rocket.height.meters} meters</td>
            <td>{rocket.mass.kg} kg</td>
            <td>${rocket.cost_per_launch.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

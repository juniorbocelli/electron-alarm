import React from 'react';
import './Toggle.scss';

interface IToggleProps {
  checked?: boolean;
  handlerChange?: () => void;
}

const Toggle: React.FC<IToggleProps> = (props) => {
  const {
    checked,
    handlerChange,
  } = props;

  return (
    <label className="toggle">
      <input
        type="checkbox"
        onChange={handlerChange}
        checked={Boolean(checked)}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Toggle;
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-2">Engineering</Dropdown.Item>
      <Dropdown.Item href="#/action-1">MBBS</Dropdown.Item>
      <Dropdown.Item href="#/action-3"></Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;
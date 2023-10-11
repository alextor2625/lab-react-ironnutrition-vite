import { Divider, Input, Button } from "antd";

const Search = ({}) => {
  const handleSearch = () => {
    
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label htmlFor="search"></label>
      <Input type="text" name="search" />
    </div>
  );
};

export default Search;

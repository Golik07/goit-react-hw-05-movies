import { Button, Form, Input } from './Search.style';

const Search = ({ value, handleSubmit, onChange }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={value}
          placeholder="Search movies"
          onChange={e => onChange(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default Search;

import { ListCategory, ListItem } from "./Styles";

type ProfProps = {
  items: { id: number; name: string; candies: number }[];
  category?: string;
};

function List(props: ProfProps) {
  const category = props.category;
  const profList = props.items;

  return (
    <>
      <ListCategory>{category}</ListCategory>
      <ListItem>
        {profList.map((item) => (
          <li key={item.id}>
            {item.name}:  {item.candies}
          </li>
        ))}
      </ListItem>
    </>
  );
}

export default List;

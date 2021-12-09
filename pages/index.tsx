import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import SortableList from "./SortableList";
import SortableItem from "./SortableItem";
import Item from "./Item";

const App = () => {
  const [items, setItems] = useState([
    { id: "1", name: "one" },
    { id: "2", name: "two" },
    { id: "3", name: "three" },
    { id: "4", name: "four" },
    { id: "5", name: "five" },
    { id: "6", name: "six" },
  ]);

  const onChange = (oldIndex: number, newIndex: number) =>
    setItems((items) => arrayMove(items, oldIndex, newIndex));

  return (
    <ol
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <SortableList ids={items.map(({ id }) => id)} onChange={onChange}>
        {items.map(({ id, name }) => (
          <SortableItem key={id} id={id}>
            <Item>{name}</Item>
          </SortableItem>
        ))}
      </SortableList>
    </ol>
  );
};

export default App;

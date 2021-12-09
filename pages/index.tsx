import { arrayMove } from "@dnd-kit/sortable";
import SortableList from "./SortableList";
import SortableItem from "./SortableItem";
import Item from "./Item";
import { useLocalStorage } from "usehooks-ts";

interface Items {
  [id: string]: { name: string };
}

const App = (props: any) => {
  console.log(props);
  const [order, setOrder] = useLocalStorage("order", [
    "6",
    "5",
    "2",
    "4",
    "1",
    "3",
  ]);

  const items: Items = {
    "1": { name: "one" },
    "2": { name: "two" },
    "3": { name: "three" },
    "4": { name: "four" },
    "5": { name: "five" },
    "6": { name: "six" },
  };

  const onChange = (oldIndex: number, newIndex: number) =>
    setOrder((order) => arrayMove(order, oldIndex, newIndex));

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
      <SortableList ids={order} onChange={onChange}>
        {order.map((id) => (
          <SortableItem key={id} id={id}>
            <Item>{items[id].name}</Item>
          </SortableItem>
        ))}
      </SortableList>
    </ol>
  );
};

export async function getStaticProps() {
  return {
    props: {
      wat: "omg",
    },
  };
}

export default App;

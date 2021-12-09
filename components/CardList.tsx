import { arrayMove } from "@dnd-kit/sortable";
import SortableList from "../components/SortableList";
import SortableItem from "../components/SortableItem";
import Card from "../components/Card";
import { useLocalStorage } from "usehooks-ts";

interface Items {
  [id: string]: { name: string };
}

const CardList = ({
  defaultOrder,
  cards,
}: {
  defaultOrder: string[];
  cards: any;
}) => {
  const [order, setOrder] = useLocalStorage("order", defaultOrder);

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
            <Card {...cards[id]} />
          </SortableItem>
        ))}
      </SortableList>
    </ol>
  );
};

export default CardList;

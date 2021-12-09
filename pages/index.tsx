import CardList from "../components/CardList";
import order from "../order.json";
import cardData from "../cards.json";

const App = (props: any) => {
  return <CardList {...props} />;
};

export async function getStaticProps() {
  return {
    props: {
      defaultOrder: order.map(
        (name) =>
          cardData.data.find((card) => card.name.startsWith(name))
            ?.collector_number
      ),
      cards: cardData.data
        .map(
          ({
            collector_number,
            name,
            image_uris = null,
            card_faces = null,
          }) => ({
            id: collector_number,
            name,
            image_uris,
            card_faces,
          })
        )
        .reduce(
          (prev, curr) => ({
            ...prev,
            [curr.id]: curr,
          }),
          {}
        ),
    },
  };
}

export default App;

import CardList from "../components/CardList";

const App = (props: any) => {
  console.log(props);
  return <CardList />;
};

export async function getStaticProps() {
  return {
    props: {
      wat: "omg",
    },
  };
}

export default App;

import Card from "./Card";
import data from "../data";

export default function MainContent() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <section className="main--container">
      <h1 className="content--title">Blog Title</h1>
      <div className="card--container">{cards}</div>
    </section>
  );
}

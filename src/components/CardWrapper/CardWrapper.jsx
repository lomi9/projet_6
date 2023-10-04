import logements from '../../logements.json';
import Card from '../Card/Card';

export default function CardWrapper() {
    return (
      <div className="cards__container">
        {logements.map (({id, cover, title}) => (
          <Card key={id} id={id} cover={cover} title={title}/>
        ))}
      </div>
    );
  }
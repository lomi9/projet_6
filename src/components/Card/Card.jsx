import { Link } from 'react-router-dom';

export default function Card({ id, cover, title, logement }) {
    return (
        <>
            <Link to={{
                pathname: `/logementPage/${id}`,
                state: { logement }
            }} className="card__link">
                <div className="card__img" style={{ backgroundImage: `url(${cover})` }}>
                <div className="card__gradient">
                    <h2 className="card__title">{title}</h2>
                </div>
                </div>
            </Link>
        </>
    );
  }
  
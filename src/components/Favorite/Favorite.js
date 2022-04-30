import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import styles from './Favorite.module.scss';

const Favorite = () => {
     
  const favoriteCard = useSelector(getFavoriteCards);


    if (favoriteCard.length === 0) 
    return ( 
        <div>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>Ups! There is no cards in favorites!</p>
        </div>
    );
  
  return (
      <div>
        <PageTitle>FAVORITE</PageTitle>
        <div className={styles.cardsWrapper}>
                <ul className={styles.cards}>
                    {favoriteCard.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite= {card.isFavorite} />)}
                </ul>
            </div>
      </div>
    );
  };

export default Favorite;
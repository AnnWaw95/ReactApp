import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCart } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
    
    const dispatch = useDispatch();
    const cardId = props.id

    const classChange = e => {
        e.preventDefault()
        dispatch(toggleFavoriteCart( cardId ))
      }

    const removedCard = e => {
        e.preventDefault()
        dispatch(removeCard(cardId))
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
            <button onClick={classChange} className={clsx(styles.button, props.isFavorite && styles.isActive)}>
                <span className='fa fa-star-o' />
            </button>
            <button onClick={removedCard} className={styles.button}>
                <span className='fa fa-trash' />
            </button>
            </div>
        </li>
    );
};

export default Card;
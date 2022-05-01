import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCart } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
    
    const dispatch = useDispatch;

    const classChange = (cardId) => {
        dispatch(toggleFavoriteCart(cardId))
    };

    const removedCard = (cardId) => {
        dispatch(removeCard(cardId))
    };

    return (
        <li className={styles.card}>{props.title}
            <button type="button" onChange={() => classChange(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.active) }>
                <span className='fa fa-star-o' />
            </button>
            <button type="button" onChange={() => removedCard(props.id)} className={styles.button}>
                <span className='fa fa-trash' />
            </button>
        </li>
    );
};

export default Card;
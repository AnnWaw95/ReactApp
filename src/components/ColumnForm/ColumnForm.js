import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = props => {

    const dispatch = useDispatch();
    const listId = props.listId
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon, listId}));
        setTitle('');
        setIcon('');
     };

    
	return (
        <form onSubmit={handleSubmit}>
            <span> Title: </span> <input className={styles.columnForm} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span> Icon: </span> <input className={styles.columnForm} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;
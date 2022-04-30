import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = props => {
    
    const dispatch = useDispatch();
    const listId = props.listId
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description, listId }));
        setTitle('');
        setDescription('');
    };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;
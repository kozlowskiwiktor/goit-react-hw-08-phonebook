import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));

    //   const [open, setOpen] = useState(false);
    // };

    // const handleOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
  };

  return (
    <div>
      <span>
        {contact.name} - {contact.number}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactListItem;

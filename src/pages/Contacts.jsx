const { default: Filter } = require('components/Filter/Filter');
const { useEffect } = require('react');
const { Helmet } = require('react-helmet');
const { useDispatch, useSelector } = require('react-redux');
const { fetchContacts } = require('redux/contacts/operations');
const { selectIsLoading, selectError } = require('redux/filter/selectors');

export default Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Helmet>
        <title>Phone Book - Contacts List</title>
      </Helmet>
      <div>
        <p>Search</p>
        <Filter />
        <p>Add contact</p>
      </div>
      <div>
        <p>Contacts list</p>
        {isLoading && !error && <b>Request in progress...</b>}
      </div>
    </div>
  );
};

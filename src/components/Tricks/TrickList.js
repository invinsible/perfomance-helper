import TrickListItem from './TrickListItem';

const TrickList = (props) => {
  const sortArr = props.tricks.sort((a, b) => a.order - b.order);

  const tricks = sortArr.map((el) => {
    return (
      <TrickListItem
        key={el.id}
        title={el.title}
        index={el.order}
        slug={el.slug}
      />
    );
  });

  return <div>{tricks}</div>;
};

export default TrickList;

function CardProductComponent ({item}) {
  return (
    <div className="border-[2px]">
        <img src={item.thumbnail} alt={item.thumbnail} />
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
    </div>
  );
}

export default CardProductComponent; 
const Product = ({productName, productPrice, onSelect}) => {
  const handleClick = () => {
    onSelect(productName, productPrice)
  }

  return(
    <>
      <button className="btn" onClick={handleClick}>
        {productName} & {productPrice}
      </button>
    </>
  )
}

export default Product;
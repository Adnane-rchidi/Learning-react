import Product from "./Product";

const ProductList = () => {
  function handleSelect(productName, productPrice) {
    console.log("Product selected: ", productName);
    console.log("Product Price: ", productPrice);
  }

  return(
    <>
    <Product productName='Labtop' productPrice={1500} onSelect={handleSelect}/>
    <Product productName='Mous' productPrice={150} onSelect={handleSelect}/>
    <Product productName='Keyboard' productPrice={400} onSelect={handleSelect}/>
    </>
  )

}

export default ProductList;
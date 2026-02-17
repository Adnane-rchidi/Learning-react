import Porduct from "./Product";

const ProductList = () => {
  // Function declared by the parent and called by the child
  // The function accepts a parameter productName that will be passed from the child
  // After each call from the child, the function executes


  function handleSelect(productName) {
    console.log('Product Selected: ', productName);
  }

  return(
    <>
      {/* Passing the function as a prop named onSelect */}
      <Porduct productName="Labtop" onSelect={handleSelect} />
      <Porduct productName="Phone" onSelect={handleSelect} />
      <Porduct productName="Tablet" onSelect={handleSelect} />
    </>
  )
}

export default ProductList;
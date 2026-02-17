const Porduct = ({productName, onSelect}) => {
  const handleClick = () => {
    onSelect(productName);  
  };

  return(
    <div className="user-card">
      {/* 
        Function received as a prop → called on click
        The parameter "productName" is sent back up to the parent
      */}
      <button onClick={handleClick}>{productName}</button>
      {/*
        Do not use onClick={onSelect(productName)}
        because the function will be executed immediately after the page loads
      */}
    </div>
  )
}

export default Porduct;
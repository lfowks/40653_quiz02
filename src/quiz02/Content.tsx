
const Content = ({ products }: { products: Product[] }) => {
  return (
    <div className='card'>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};


export default Content
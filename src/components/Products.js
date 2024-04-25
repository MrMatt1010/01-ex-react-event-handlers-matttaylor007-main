import Product from "./Product";

const Products = ({ products }) => {
  return (
    <ul className="product-grid">
      <Product
        image={products[0].images[0]}
        name={products[0].name}
        description={products[0].description}
      />
      <Product
        image={products[1].images[0]}
        name={products[1].name}
        description={products[1].description}
      />
      <Product
        image={products[2].images[0]}
        name={products[2].name}
        description={products[2].description}
      />
      <Product
        image={products[3].images[0]}
        name={products[3].name}
        description={products[3].description}
      />
      <Product
        image={products[4].images[0]}
        name={products[4].name}
        description={products[4].description}
      />
      <Product
        image={products[5].images[0]}
        name={products[5].name}
        description={products[5].description}
      />
      <Product
        image={products[6].images[0]}
        name={products[6].name}
        description={products[6].description}
      />
      <Product
        image={products[7].images[0]}
        name={products[7].name}
        description={products[7].description}
      />
      <Product
        image={products[8].images[0]}
        name={products[8].name}
        description={products[8].description}
      />
      <Product
        image={products[9].images[0]}
        name={products[9].name}
        description={products[9].description}
      />
      <Product
        image={products[10].images[0]}
        name={products[10].name}
        description={products[10].description}
      />
      <Product
        image={products[11].images[0]}
        name={products[11].name}
        description={products[11].description}
      />
    </ul>
  );
};

export default Products;

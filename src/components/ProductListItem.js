import {
  ListItemContainer,
  ListItemImage,
  ProductListTitle,
  ProductListPrice,
  RoundedButton,
  ItemLeftContent
} from "./styles";
const ProductListItem = (props) => {
  const { product, onSelectProduct } = props;
  const { PictureURL, Name, Price } = product || {}
  const handleViewDetailsClick = () => {
    onSelectProduct(product)
  }
  return (
    <ListItemContainer>
      <ItemLeftContent>
        <ListItemImage src={PictureURL} />
        <div>
          <ProductListTitle>{Name}</ProductListTitle>
          <ProductListPrice>${Price}</ProductListPrice>
        </div>
      </ItemLeftContent>
      <RoundedButton onClick={handleViewDetailsClick}>View Details</RoundedButton>
    </ListItemContainer>
  );
};

export default ProductListItem;

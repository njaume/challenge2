import {
  DetailContainer,
  DetailImage,
  ItemLeftContent,
  DetailDescription,
  ProductListTitle,
  RoundedButton,
} from "./styles";
const ProductDetail = (props) => {
  const { product } = props;
  const {PictureURL, Name, Price, Description } = product || {};
  return (
    <DetailContainer>
      <ItemLeftContent>
        <DetailImage src={PictureURL}/>
        <div>
          <ProductListTitle>{Name}</ProductListTitle>
          <DetailDescription>{Description}</DetailDescription>
        </div>
      </ItemLeftContent>
      <div>
        <h3 style={{ marginBottom: "5em" }}>${Price}</h3>
        <RoundedButton>Add to Cart</RoundedButton>
      </div>
    </DetailContainer>
  );
};

export default ProductDetail;

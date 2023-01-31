import styled from "styled-components";
import {mobile} from "../responsive"
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 0px;
  width:100%;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  

`;

const Categories = () => {
  return (
    <Container>
       {categories.map((item) => ( 
        <CategoryItem item={item} key={item.id} />
        ))} 
    </Container>
  );
};

export default Categories;

import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderApp = styled.div`
  background: #2e7c31;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const BookCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .books {
    display: grid;
    grid-template-columns: repeat(3, 128px);
    grid-template-rows: auto;
    grid-gap: 20px;
    justify-content: center;
    padding: 20px;
  }
`;

export const Category = styled.div`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid #dedede;
  padding-bottom: 10px;
`;
export const BookImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 193px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    overflow: hidden;
  }
`;
export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .book-info {
    height: 30%;
    font-size: 12px !important;
    justify-content: center;
  }
`;
export const BookTitle = styled.div`
  font-size: 14px;
`;
export const BookAuthor = styled.div`
  display: flex;
  flex-direction: column;
  color: #999;
`;

export const FixedSearchPage = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #2e7c31;
  color: white;
  padding: 15px;
  border-radius: 50%;
  line-height: 0px;
  font-size: 20px;

  a {
    color: white;
  }
`;
export const Types = styled.div`
  position: absolute;
  background: white;
  bottom: 0px;
  right: 0px;
  // transform: translate(-50%, -25%);
  display: none;
  width: max-content;
  padding: 5px;
  gap: 20px;
  cursor: pointer;

  .active {
    color: blue;
    font-weight: bold;
  }
`;
export const SelectType = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  &:hover ${Types} {
    display: block !important;
  }
`;

export const OpenChooseTypes = styled.div`
  position: relative;
  background: #2e7c31;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

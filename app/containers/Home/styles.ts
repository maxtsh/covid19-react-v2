import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  padding: 1rem 0px;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: scale(1.1, 1.1);
  }

  .item-header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-emoji{
      font-size: 200%;
      font-weight: 700;
    }
  }

  .item-body{
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      margin-top: 0.75rem;
    }

    &-country{
      font-size: 120%;
      font-weight: 700;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-stats{
      font-size: 100%;
      font-weight: 400;

      &-title{
        font-weight: 500;
      }
    }

    &-case{
      color: #999;
    }

    &-death{
      color: red;
    }

    &-rec{
      color: #8ACA2B;
    }
  }
`;
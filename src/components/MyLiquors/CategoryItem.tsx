import React, { useContext } from 'react';
import styled from 'styled-components';
import beerImg from '../../assets/images/beerMenuImg.png';
import addImg from '../../assets/images/addImgg.png';
import GlobalContext from '../../stateManagement/globalContext';
import { TranslatedLiquorTypeEnums } from './liquorTypeEnum';
import { STYLES, COLORS } from '../../assets/styles';

type CategoryItemType = {
  categoryName: LiquorType;
  inUse: boolean;
};

const StyledCategoryItem = styled.div`
  ${STYLES.FLEX_COLUMN_CENTER}
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  border: 1px solid black;
  opacity: 90%;

  &:hover {
    .use-info-overlay {
      display: flex;
      background-color: black;
      opacity: 50%;
    }

    .add-overlay {
      display: block;
      opacity: 40%;
    }
  }

  .use-info-overlay {
    display: none;
  }

  .add-overlay {
    display: none;
  }
`;

const UseInfoOverlay = styled.div`
  ${STYLES.FLEX_COLUMN_CENTER}
  aspect-ratio: 1 / 1;
  width: 100%;
  position: relative;

  .category-info {
    ${STYLES.FLEX_COLUMN_CENTER}
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    white-space: nowrap;
    color: ${COLORS.WHITE};
  }
`;

const AddOverlay = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-image: url(${addImg});
  background-size: cover;
`;

const CategoryItem: React.FC<CategoryItemType> = ({ categoryName, inUse }: CategoryItemType) => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  return (
    <StyledCategoryItem style={{ backgroundImage: `url(${beerImg})`, backgroundSize: 'cover' }}>
      {inUse ? (
        <UseInfoOverlay className='use-info-overlay'>
          <div className='category-info'>
            <h2 className='category-name'>{TranslatedLiquorTypeEnums[categoryName]}</h2>
            <h3>{`(${liquorState[categoryName].length})`}</h3>
          </div>
        </UseInfoOverlay>
      ) : (
        <AddOverlay className='add-overlay' />
      )}
    </StyledCategoryItem>
  );
};

export default CategoryItem;

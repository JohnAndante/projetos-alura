import styled from 'styled-components';
import tags from './tags.json';

const TagTitle = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`;

const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ButtonTag = styled.button`
   font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = ({ setTag }) => {
  return <div style={{ marginTop: '10px' }}>
    <TagTitle>Busque por tags:</TagTitle>

    <TagsGroup>
      {tags.map((tag) =>
        <ButtonTag
          key={tag.id}
          onClick={() => setTag(tag.tag)}
        >
          {tag.titulo}
        </ButtonTag>
      )}
    </TagsGroup>
  </div>

}

export default Tags;

import styled from "styled-components";

const StylizedTextField = styled.div`
  border: 2px;
  min-width: 400px;
  border-radius: 10px;
  padding: 1px;
  background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
;

  label {
    background: linear-gradient(
                  174.61deg,
                  #041833 10%,
                  #04244F 70%);
  }

  input {
    color: #D9D9D9;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    width: 400px;
    height: 56px;
    padding: 12px, 26px;
  }

  `;

const TextField = () => {

  return (
    <StylizedTextField>
      <div>
        <label>
          <input type='text' placeholder='O que você procura?' />
        </label>
      </div>
    </StylizedTextField>
  )
}

export default TextField;

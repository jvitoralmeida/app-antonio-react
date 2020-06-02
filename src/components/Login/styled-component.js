import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  margin-top: 100px;
  height: 35px;
  width: 90%;
  font-weight: bold;
  border: 2px;
  border-color: white;
  color: white;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  font-size: 16px;
`;

export const StyledInputPass = styled.TextInput`
  margin-top: 35px;
  font-weight: bold;
  height: 35px;
  width: 90%;
  border: 2px;
  border-color: white;
  color: white;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  font-size: 16px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImagemLogin = styled.Image`
  margin-top: 150px;
  width: 250px;
  height: 210px;
`;

export const BotaoLogin = styled.TouchableOpacity`
  margin-top: 70px;
  background-color: black;
  color: yellow;
  width: 75%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  color: #e8bb30;
  font-weight: bold;
  font-size: 20px;
`;

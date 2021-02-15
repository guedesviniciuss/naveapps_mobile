import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #ededed;
`;

export const Header = styled.View`
  background: #ccd2e4;
  height: 200px;
  flex-direction: column;
  justify-content: center;
`;

export const Logos = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 35px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const Input = styled.TextInput`
  background: #fff;
  height: 50px;
  border-radius: 8px;
  padding: 0 20px;
  flex: 1;
  margin-right: 10px;
`;

export const Card = styled(RectButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  align-self: stretch;
  text-align: center;
  margin: 5px 15px;
  padding: 20px;
  height: 130px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 1;
  }
  shadow-radius: 1.41px;

  elevation: 2;
`;

export const Main = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

export const Img = styled.Image`
  border-radius: 50px;
  width: 64px;
  height: 64px;
  margin-right: 10px;
`;

export const TitleApp = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

export const Summary = styled.Text`
  font-size: 15px;
  width: 250px;
  text-align: justify;
  margin-top: 2px;
`;

export const Tags = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #75c948;
  width: 90px;
  height: 50px;

  border-radius: 8px;
`;

export const Heart = styled(Icon)`
  color: red;
  margin-right: 3px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const AvaliationText = styled.Text`
  font-size: 14px;
`;

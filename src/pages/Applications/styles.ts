import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #ccd2e4;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px 20px;
  align-items: center;
`;

export const Main = styled.View`
  flex-shrink: 1;
`;

export const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  color: black;
`;

export const Summary = styled.View`
  flex-direction: column;
  margin: 30px 30px;
`;

export const SummaryTitle = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const SummaryDescription = styled.Text`
  color: black;
`;

export const Download = styled.TouchableOpacity`
  background: #75c948;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const DownloadText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const Img = styled.Image`
  border-radius: 50px;
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const Return = styled(Icon)`
  margin-left: 10px;
  margin-top: 20px;
`;

import React, { useState, useEffect, useCallback } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import naveApps from '../../assets/logos/naveapps/naveapps.png';
import oi from '../../assets/logos/oi/oi.png';

import api from '../../services/api';

import {
  Container,
  Header,
  Input,
  Card,
  Main,
  Info,
  TitleApp,
  Summary,
  Img,
  Tags,
  SearchButton,
  Search,
  Heart,
  ButtonText,
  AvaliationText,
  Logos,
} from './styles';

export interface ApplicationsData {
  id: string;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  likes: number;
  link: string;
}

const Dashboard: React.FC = () => {
  const [filteredApplication, setFilteredApplication] = useState('');
  const [applications, setApplications] = useState<ApplicationsData[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getApiData() {
      const response = await api.get<ApplicationsData[]>('/applications');
      setApplications([...response.data]);
    }

    getApiData();
  }, []);

  const handleFilterApplications = useCallback(async (name: string) => {
    const response = await api.get<ApplicationsData[]>(`/applications`, {
      params: {
        name,
      },
    });

    setApplications([...response.data]);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <Logos>
            <Image source={naveApps} />
            <Image source={oi} />
          </Logos>
          <Search>
            <Input
              placeholder="Busque os nossos apps 🔎"
              onChangeText={text => setFilteredApplication(text)}
            />
            <SearchButton
              onPress={() => handleFilterApplications(filteredApplication)}
            >
              <ButtonText>Buscar</ButtonText>
            </SearchButton>
          </Search>
        </Header>
        <ScrollView>
          {applications?.map(application => (
            <Card
              key={application.id}
              onPress={() =>
                navigation.navigate('Applications', {
                  application,
                })
              }
            >
              <Main>
                <Img
                  source={{
                    uri: `http://192.168.0.104:3333/${application.thumbnail}`,
                  }}
                />
                <Info>
                  <TitleApp>{application.name}</TitleApp>
                  <Summary>{application.summary}</Summary>
                  <Tags>
                    <Heart name="hearto" size={18} />
                    <AvaliationText>{application.likes}</AvaliationText>
                  </Tags>
                </Info>
              </Main>
            </Card>
          ))}
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

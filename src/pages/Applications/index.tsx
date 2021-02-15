import React, { useRef, useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import {
  Container,
  Header,
  Return,
  Title,
  Description,
  Summary,
  SummaryTitle,
  SummaryDescription,
  Main,
  Img,
  Download,
  DownloadText,
} from './styles';

import { ApplicationsData } from '../Dashboard';
import api from '../../services/api';

interface Route {
  route: ApplicationsData;
}

const ENTRIES1 = [
  {
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const { width: screenWidth } = Dimensions.get('window');

const Applications: React.FC<Route> = ({ route }) => {
  const navigation = useNavigation();
  const { application } = route.params;

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const handleLikeApp = useCallback(
    async (id: string) => {
      await api.post(`/applications/likes/${id}`);
      application.likes++;
    },
    [application],
  );

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <Return name="left" size={20} onPress={() => navigation.goBack()} />
      <Header>
        <Img
          source={{
            uri: `http://192.168.0.104:3333/${application.thumbnail}`,
          }}
        />
        <Main>
          <Title>{application.name}</Title>
          <Description>{application.summary}</Description>
        </Main>
      </Header>
      <Summary>
        <SummaryTitle>Descrição</SummaryTitle>
        <SummaryDescription>{application.description}</SummaryDescription>
      </Summary>
      <View style={styles.container}>
        <TouchableOpacity onPress={goForward} />
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages
        />
      </View>

      <Download
        onPress={() => {
          Linking.openURL(application.link);
        }}
      >
        <DownloadText>Download</DownloadText>
      </Download>
    </Container>
  );
};

export default Applications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

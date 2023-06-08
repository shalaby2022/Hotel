import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import HotelCard from '../../components/HotelCard';
import {
  API_KEY,
  placeType,
  latitude,
  longitude,
  radius,
} from '../../constants/Keys';
import axios from 'axios';
import {Color} from '../../constants/Colors';

const Home = ({navigation}) => {
  const buttons = [
    {id: 1, text: 'Recommend'},
    {id: 2, text: 'Popular'},
    {id: 3, text: 'Trending'},
  ];

  const [selected, setSelected] = useState(1);

  const handlePress = val => {
    setSelected(val);
  };

  const renderItem = ({item}) => {
    return <HotelCard item={item} navigation={navigation} />;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  const getHotels = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${placeType}&key=${API_KEY}`,
      );
      console.log('Respponse', response.data.results);
      setIsLoading(false);
      setHotels(response.data.results);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getHotels();
    });
  }, [navigation]);

  return (
    <View style={styles().container}>
      <Image source={IMAGES.award} style={styles().img} />
      <View style={styles().headerWrapper}>
        <Text style={styles().Header}>Good Morning, Stephanie!</Text>
      </View>
      <View style={styles().btnsWrapper}>
        {buttons &&
          buttons.map(button => (
            <TouchableOpacity
              key={button.id}
              style={styles().btnWrapper}
              onPress={() => handlePress(button.id)}>
              <Text style={styles().selectedBtn(button.id, selected)}>
                {button.text}
              </Text>
              <View style={styles().circle(button.id, selected)} />
            </TouchableOpacity>
          ))}
      </View>

      {hotels && (
        <FlatList
          data={hotels}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

      {isLoading && (
        <View style={styles().errorWrapper}>
          <ActivityIndicator size={'large'} color={Color.primary} />
        </View>
      )}

      {error && (
        <View style={styles().errorWrapper}>
          <Text style={styles().errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

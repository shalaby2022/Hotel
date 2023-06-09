import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
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
import auth from '@react-native-firebase/auth';
import {NavigateToOnboarding} from '../../Navigations/Navigators';
import {AuthenticatedUserContext} from '../../Context/AuthContext';
import {displayToast} from '../../services/Toaster';

const Home = ({navigation}) => {
  const {user} = useContext(AuthenticatedUserContext);

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

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = async () => {
    setIsRefreshing(true);
    await getHotels();
    setIsRefreshing(false);
  };

  const handleLogOut = () => {
    auth()
      .signOut()
      .then(
        () => displayToast('success', 'signed out Successfully!', 2500),
        NavigateToOnboarding(navigation),
      );
  };

  return (
    <View style={styles().container}>
      <View style={styles().topIconsWrapper}>
        <Image source={IMAGES.award} style={styles().img} />
        <TouchableOpacity onPress={handleLogOut}>
          <Image source={IMAGES.logout} style={styles().img2} />
        </TouchableOpacity>
      </View>
      <View style={styles().headerWrapper}>
        <Text style={styles().Header}>
          Good Morning, {user?._user?.displayName || 'Stephani'}!
        </Text>
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

      {isLoading ? (
        <View style={styles().errorWrapper}>
          <ActivityIndicator size={'large'} color={Color.primary} />
        </View>
      ) : (
        <FlatList
          data={hotels}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={[Color.primary]}
            />
          }
        />
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

import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMSGES} from '../../constants/Images';
import HotelCard from '../../components/HotelCard';

const Home = () => {
  const buttons = [
    {id: 1, text: 'Recommend'},
    {id: 2, text: 'Popular'},
    {id: 3, text: 'Trending'},
  ];

  const Hotels = [
    {
      id: 1,
      rate: 4.6,
      header: 'Tropicasa De Hotel',
      title: 'Amsterdam, Netherlands',
      img: IMSGES.hotel,
    },
    {
      id: 2,
      rate: 4.2,
      header: 'Luxe Hotel',
      title: 'Jakarta, Indonesia',
      img: IMSGES.hotel,
    },
    {
      id: 3,
      rate: 4.6,
      header: 'Tropicasa De Hotel',
      title: 'Amsterdam, Netherlands',
      img: IMSGES.hotel,
    },
    {
      id: 4,
      rate: 3.9,
      header: 'Luxe Hotel',
      title: 'Jakarta, Indonesia',
      img: IMSGES.hotel,
    },
  ];
  const [selected, setSelected] = useState(1);

  const handlePress = val => {
    setSelected(val);
  };

  const renderItem = ({item}) => {
    return <HotelCard item={item} />;
  };
  return (
    <View style={styles().container}>
      <Image source={IMSGES.award} style={styles().img} />
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

      <FlatList
        data={Hotels}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

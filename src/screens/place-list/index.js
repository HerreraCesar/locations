import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native';
import PlaceItem from '../../components/molecules/place-item';
import {placeActions} from '../../store/action';

const PlaceList = ({navigation}) => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  useEffect(() => {
    dispatch(placeActions.loadPlace());
  }, []);

  const onSelectDetails = () => {
    navigation.navigate('PlaceDetail');
  };

  const renderItem = ({item}) => (
    <PlaceItem
      name={item.name}
      address={item.address}
      onSelect={() => onSelectDetails()}
      image={item.image}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  );
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;

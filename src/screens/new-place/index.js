import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../../constants/index';
import ImageSelector from '../../components/molecules/image-selector';
import {placeActions} from '../../store/action';
import {styles} from './styles';
import {useDispatch} from 'react-redux';

const NewPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = text => setName(text);
  const handleSavePlace = () => {
    dispatch(placeActions.addPlace(name, image, 'pi pi pi', 14.44, 20.01));
    navigation.navigate('Place');
  };

  const handleOnImage = uri => {
    setImage(uri);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Photo</Text>
        <ImageSelector onImage={handleOnImage} />
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
        />
        <Button
          title="Save Place"
          onPress={() => handleSavePlace()}
          color={COLORS.primary}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;

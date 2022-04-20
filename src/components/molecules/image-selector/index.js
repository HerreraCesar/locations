import {
  Alert,
  Button,
  Image,
  PermissionsAndroid,
  Platform,
  Text,
  View
} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions'
import React, {useState} from 'react';

import {COLORS} from '../../../constants';
import {launchCamera} from 'react-native-image-picker';
import {styles} from './styles'

const ImageSelector = ({onImage}) => {
  const [pickedResponse, setPickedResponse] = useState();
  const IS_IOS = Platform.OS === 'ios'

  const handleTakePicture = async () => {
    const options = {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    }
    let granted
    if (IS_IOS) {
        granted = await request(PERMISSIONS.IOS.CAMERA)
    } else {
        granted = await request(PERMISSIONS.ANDROID.CAMERA)
    }
    if (granted === RESULTS.GRANTED) {
        launchCamera(options, response => {
            if (!response.didCancel && !response.error) {
                setPickedResponse(response.assets[0])
                onImage(response.assets[0].uri)
            }
        })
    } else {
        console.log('Permission denied');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedResponse ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image source={{uri: pickedResponse.uri}} style={styles.image} />
        )}
      </View>
      <Button
          title="Pick Image"
          color={COLORS.primary}
          onPress={handleTakePicture}
        />
    </View>
  );
};

export default ImageSelector;

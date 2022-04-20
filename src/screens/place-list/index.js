import {FlatList} from 'react-native'
import PlaceItem from '../../components/molecules/place-item'
import React from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux'

const PlaceList = ({navigation}) => {
  const places = useSelector(state => state.places.places)

  const onSelectDetails = () => {
    navigation.navigate('PlaceDetail')
  }

  const renderItem = ({item}) => (
    <PlaceItem
      name={item.name}
      address='Pi pi pi'
      onSelect={() => onSelectDetails()}
      image={item.image}
    />
  )
  return (
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
  )
}

export default PlaceList
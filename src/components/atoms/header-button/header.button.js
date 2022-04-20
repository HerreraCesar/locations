import {Text, TouchableOpacity} from 'react-native'

import {COLORS} from '../../../constants'
import React from 'react'
import { styles } from './styles'

const HeaderButton = ({navigation}) => {
    const onPress = () => {
        navigation.push('NewPlace')
    }

  return (
    <TouchableOpacity onPress={() => onPress()}>
        <Text style={styles.textButton}>Create</Text>
    </TouchableOpacity>
  )
}

export default HeaderButton
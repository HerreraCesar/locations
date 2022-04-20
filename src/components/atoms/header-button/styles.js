import {Platform, StyleSheet} from 'react-native'

import { COLORS } from '../../../constants/index'

export const styles = StyleSheet.create({
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Platform.OS === 'android' ? COLORS.light : COLORS.primary,
    }
})
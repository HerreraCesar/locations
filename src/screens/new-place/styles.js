import { COLORS } from '../../constants'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 5,
        color: COLORS.text,
        fontWeight: 'bold',
    },
    input: {
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 5,
    }
})
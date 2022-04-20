import { COLORS } from '../../../constants'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.secondary
    },
    details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    name: {
        color: COLORS.primary,
        fontSize: 18,
        marginBottom: 10,
    },
    address: {
        color: COLORS.text,
        fontSize: 14,
    }
})
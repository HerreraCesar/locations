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
        marginLeft: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    name: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    address: {
        color: COLORS.text,
        fontSize: 14,
        marginVertical: 5,
    },
    coordinates: {
        flex:1,
        flexDirection: 'row',
    },
    latitude: {
        color: COLORS.secondary,
        marginRight: 10,
    },
    longitude: {
        color: COLORS.secondary,
    }
})
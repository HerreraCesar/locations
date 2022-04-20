import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

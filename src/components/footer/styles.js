import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  imageWraper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
},
rightImageWraper: {
  position: 'absolute',
  right: 20,
  bottom: 0,
  alignItems: 'center'
}
});

export default styles;

import { StyleSheet } from 'react-native';
import { backgroundPrimary } from '../../constants/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundPrimary,
    },
    logoImage: {
        width: 200,
        height: 100,
    }
});

export default styles;
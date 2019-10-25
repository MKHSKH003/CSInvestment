import { WSnackBar } from 'react-native-smart-tip';

export const onSuccess = message => WSnackBar.show({
    data: message,
    backgroundColor: '#00ff00',
    position: WSnackBar.position.TOP
});

export const onError = message => WSnackBar.show({
    data: message,
    backgroundColor: '#ff0000',
    position: WSnackBar.position.TOP
});


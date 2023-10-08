import { useCallback } from 'react';
import { Button, Linking, StyleSheet, View } from 'react-native';
import useConnectToTwitter from './hooks/useConnectToTwitter';

export default function App() {

  const { initateTwitterAuth } = useConnectToTwitter();

  

  const handleTwitterAuth = useCallback(async () => {
    const url = await initateTwitterAuth();
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      console.log('Error in opening url');
    }
  }, [initateTwitterAuth]);

  return (
    <View style={styles.container}>
      <Button title='Connect to twitter' onPress={handleTwitterAuth} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  text: {
    color: '#000'
  }
});

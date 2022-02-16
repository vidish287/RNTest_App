import React from 'react';
import {View, Text, Platform, StyleSheet, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          captureAudio={false}
        />
      </SafeAreaView>
      <View style={styles.deviceModalInfo}>
        <Text style={styles.modelText}>
          {`Model : ${Platform.OS.toUpperCase()}`}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  deviceModalInfo: {
    bottom: 40,
    width: '40%',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'red',
  },
  modelText: {
    fontSize: 22,
    color: '#ffffff',
  },
});

export default App;

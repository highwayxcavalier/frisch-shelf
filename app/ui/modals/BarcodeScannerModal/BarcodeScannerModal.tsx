import { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const BarcodeScannerScreen = ({ isVisible, onClose }: Props) => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      const isPermissionGranted = status === 'granted';
      setHasPermission(isPermissionGranted);
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={onClose}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title={'Tap to Scan Again'}
              onPress={() => setScanned(false)}
            />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BarcodeScannerScreen;

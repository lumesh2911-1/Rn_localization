import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../localization/i18n';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{t('welcome')}</Text>
      <Text style={{ fontSize: 20 }}>{t('login')}</Text>
      <Text style={{ fontSize: 20 }}>{t('logout')}</Text>
      <Text style={{ fontSize: 20 }}>{t('change_language')}</Text>

      <Button title="English" onPress={() => i18n.changeLanguage('en')} />

      <Button title="Hindi" onPress={() => i18n.changeLanguage('hi')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    gap: 10,
  },
});

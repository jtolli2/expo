import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { ErrorBoundaryProps, Slot, Tabs } from 'expo-router';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HomeLayout from './home/_layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export function ErrorBoundary(props: ErrorBoundaryProps) {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>{props.error.message}</Text>
        <Text onPress={props.retry}>Try Again?</Text>
      </View>
    );
  }

export default function AppLayout() {
    const colorScheme = useColorScheme();

    return (
        // <ThemeProvider value={DarkTheme}>
        <>
            <SafeAreaProvider>
                <Tabs />
            </SafeAreaProvider>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </>
        // </ThemeProvider>
    );
}

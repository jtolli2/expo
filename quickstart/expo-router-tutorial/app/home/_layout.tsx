import { View, Text } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function HomeLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

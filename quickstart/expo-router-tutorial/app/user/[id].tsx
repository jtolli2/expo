import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function Bacon() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <Text>{id}</Text>;
}

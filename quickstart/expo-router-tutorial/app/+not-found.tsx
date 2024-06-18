// import { Unmatched } from 'expo-router';
// export default Unmatched;

import { View, Text, Link } from '@/components/Themed';
import React from 'react';

export default function NotFound() {
    return (
        <View>
            <Text>Page Not Found</Text>
            <Link href="/">Go Home</Link>
        </View>
    );
}

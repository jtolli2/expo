import { Pressable, StyleSheet } from 'react-native';
import { Text, Link, View } from '@/components/Themed';

export default function Page() {
    return (
        <View style={styles.container} lightColor="#fff" darkColor="#25292e">
            <Link
                href="/about"
                style={styles.linkText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
            >
                About
            </Link>
            <Link
                href="/user/bacon"
                style={styles.linkText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
            >
                View bacon
            </Link>
            <Link href="/home" asChild>
                <Pressable>
                    <Text
                        style={styles.linkText}
                        lightColor="rgba(0,0,0,0.8)"
                        darkColor="rgba(255,255,255,0.8)"
                    >
                        Home
                    </Text>
                </Pressable>
            </Link>
            <Link
                href={{
                    pathname: '/user/[id]',
                    params: { id: 'test' },
                }}
                style={styles.linkText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
            >
                View user
            </Link>
            <View lightColor="#fff" darkColor="#25292e">
                <Link
                    push
                    href="/feed"
                    style={styles.linkText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Login
                </Link>
            </View>
            <View lightColor="#fff" darkColor="#25292e">
                <Link
                    replace
                    href="/feed"
                    style={styles.linkText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Login
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 50,
        color: '#2e78b7',
    },
});

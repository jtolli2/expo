const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
    if (IS_DEV) {
        return 'com.therealchefjeff.StickerSmash.dev';
    } else if (IS_PREVIEW) {
        return 'com.therealchefjeff.StickerSmash.preview';
    }
    return 'com.therealchefjeff.StickerSmash';
};

const getAppName = () => {
    if (IS_DEV) {
        return 'StickerSmash (Dev)';
    } else if (IS_PREVIEW) {
        return 'StickerSmash (Preview)';
    }
    return 'StickerSmash: Emoji Stickers';
};

export default {
    expo: {
        name: getAppName(),
        slug: 'StickerSmash',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#25292e',
        },
        updates: {
            url: 'https://u.expo.dev/76ec322c-08bb-4a7a-9142-0c4756b12ba7',
        },
        runtimeVersion: {
            policy: 'appVersion',
        },
        ios: {
            bundleIdentifier: getUniqueIdentifier(),
            supportsTablet: true,
            buildNumber: '2',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: getUniqueIdentifier(),
            versionCode: 2,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            eas: {
                projectId: '76ec322c-08bb-4a7a-9142-0c4756b12ba7',
            },
        },
        owner: 'therealchefjeff',
    },
};

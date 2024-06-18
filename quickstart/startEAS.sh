bunx expo install expo-dev-client

# if you don't have eas-cli
# bun install -g eas-cli

eas login

eas init

eas build:configure

# if registering an iOS device
# eas device:create

# if resigning an existing app
# eas build:resign

# EAS Update
bunx expo install expo-updates

eas update:configure
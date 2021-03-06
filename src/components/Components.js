import * as React from 'react'
import { View, Text, FlatList, Linking } from 'react-native'

import * as styles from '../styles/Styles'

import * as RootNavigation from '../navigation/RootNavigator'

import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont()

export function navigateToComponent(screenId) {
    RootNavigation.navigate(screenId)
}

export function ListHeaderComponent(text) {
    return (
        <Text style={styles.text.headline4}>{text}</Text>
    )
}
export function ItemSeparatorComponent() {
    return (
        <View style={{ marginTop: 24 }} />
    )
}
export function IconComponent(props) {
    return (
        <Icon
            name={props.name}
            size={props.size}
            color={props.color}
        />
    )
}
export function ListFooterComponentHome() {
    return (
        <View style={{ flex: 1, height: 30, justifyContent: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                <IconComponent
                    name='settings'
                    size={24}
                    color={styles.colors.darkBlue}
                />
            </View>
        </View>
    )
}
export function FlatListComponent(props) {
    return (
        <FlatList
            // ListHeaderComponentStyle={{ marginVertical: 24 }}
            // ListHeaderComponent={ListHeaderComponent(props.title)}

            ListFooterComponentStyle={{ marginVertical: 24 }}
            ListFooterComponent={ListFooterComponentHome()}

            contentContainerStyle={{ margin: 16 }}

            ItemSeparatorComponent={ItemSeparatorComponent}

            data={props.DATA}
            renderItem={props.itemLayout}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}

export const OpenURL = ({ url, children }) => {
    const handlePress = React.useCallback(
        async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);
};

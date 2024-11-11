import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Boat component
const Boat = ({ name, description, image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="sail-boat" size={24} color="#333" style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

// Styles for the Boat component
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 3, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        lineHeight: 22,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginTop: 10,
    },
});

export default Boat;

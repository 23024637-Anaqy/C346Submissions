import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Boat component
const Boat = ({ name, description, image }) => {
    return (
        <View style={styles.container}>
            <Icon name="sail-boat" size={24} color="#333" />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={image} style={styles.image} />
        </View>
    );
};

// Styles for the Boat component
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
    },
});

export default Boat;

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Boat from './Boat';

const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Boat
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                image={require('./img/sea_ray.jpg')}
            />
            <Boat
                name="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                image={require('./img/four_winns.jpg')}
            />
            <Boat
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                image={require('./img/flipper.jpg')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: '#f0f0f0',
    },
});

export default AllBoats;

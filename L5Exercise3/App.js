import React from 'react';
import { SectionList, Text, TouchableOpacity, View, StyleSheet, Image, Button } from 'react-native';

const App = () => {
  // Data source with Pokémon grouped by element
  const datasource = [
    {
      title: '⚡ ELECTRIC',
      color: '#FFEB3B', // Yellow for Electric section
      data: [
        {
          key: 'Pikachu',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25.png',
        },
        {
          key: 'Voltorb',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100.png',
        },
        {
          key: 'Jolteon',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135.png'
        },
      ],
    },
    {
      title: '🔥 FIRE',
      color: '#FF7043', // Orange for Fire section
      data: [
        {
          key: 'Charmander',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png',
        },
        {
          key: 'Growlithe',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58.png',
        },
        {
          key: 'Ninetails',
          image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_38.png'git status
        }
      ],
    },
  ];

  // Render each item (Pokemon)
  const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.itemContainer} onPress={() => alert(`You selected ${item.key}`)}>
        <Text style={styles.itemText}>{item.key}</Text>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
      </TouchableOpacity>
  );

  // Render the section header with colors and icons
  const renderSectionHeader = ({ section: { title, color } }) => (
      <View style={[styles.sectionHeader, { backgroundColor: color }]}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
  );

  return (
      <View style={styles.container}>
        {/* Fixed Add Pokémon Button */}
        <View style={styles.fixedButtonContainer}>
          <Button title="Add Pokemon" onPress={() => alert('Add Pokemon feature coming soon!')} />
        </View>

        {/* SectionList */}
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.listContent}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light grey background
  },
  fixedButtonContainer: {
    backgroundColor: '#fff', // White background for button area
    padding: 10,
    elevation: 4, // Adds shadow for Android
    zIndex: 1, // Ensures it stays on top of other content
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center', // Center-align button
  },
  listContent: {
    paddingBottom: 10, // Adds space at the bottom
    paddingHorizontal: 10,
  },
  sectionHeader: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2, // Adds shadow for Android
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  itemImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
  },
});

export default App;

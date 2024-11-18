import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { images } from './img';  // Importing images from img.js

const SongQuestion = ({ question, imageSource, options, onSelectAnswer }) => (
    <View style={styles.questionContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.questionText}>{question}</Text>
        <Picker
            onValueChange={(value) => onSelectAnswer(value)}
            style={styles.picker}
        >
            {options.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
            ))}
        </Picker>
    </View>
);

const styles = StyleSheet.create({
    questionContainer: {
        marginVertical: 15,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 3,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        marginVertical: 10,
    },
    picker: {
        height: 50,
        width: 200,
    },
});

export default function App() {
    const [answers, setAnswers] = useState({ question1: '', question2: '', question3: '' });

    const handleSelectAnswer = (questionKey, answer) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionKey]: answer }));
    };

    const checkAnswers = () => {
        const correctAnswers = {
            question1: 'Tyler the Creator',  // Correct answer for question 1
            question2: 'To Pimp a Butterfly',  // Correct answer for question 2
            question3: 'Like That'   // Correct answer for question 3
        };

        let score = 0;

        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                score++;
            }
        });

        if (score === 3) {
            Alert.alert("You got all the answers correct!");
        } else {
            Alert.alert("WRONG!", "You need to restart the quiz.", [{ text: "OK", onPress: resetQuiz }]);
        }
    };

    const resetQuiz = () => {
        // Reset answers to empty string or null to clear the selections
        setAnswers({ question1: '', question2: '', question3: '' });
    };

    return (
        <ScrollView>
            <View style={{ padding: 10 }}>
                <SongQuestion
                    question="Which artist does this album cover belong to?"
                    imageSource={images.song1}  // Using local image from img.js
                    options={['Kanye West', 'Tyler the Creator', 'Lecrae']}
                    onSelectAnswer={(answer) => handleSelectAnswer('question1', answer)}
                />
                <SongQuestion
                    question="What is the title of this album?"
                    imageSource={images.song2}
                    options={['Good Kid Mad City', 'DAMN.', 'To Pimp a Butterfly']}
                    onSelectAnswer={(answer) => handleSelectAnswer('question2', answer)}
                />
                <SongQuestion
                    question="What is the name of this Collaboration Song?"
                    imageSource={images.song3}
                    options={['We Dont trust you', 'Like That', 'We Still Dont Trust You']}
                    onSelectAnswer={(answer) => handleSelectAnswer('question3', answer)}
                />
                <Button title="Submit Answers" onPress={checkAnswers} />
            </View>
        </ScrollView>
    );
}

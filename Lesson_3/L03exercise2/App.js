import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { images } from './img';  // Importing images from img.js

const SongQuestion = ({ question, imageSource, options, onSelectAnswer }) => (
    <View style={{ margin: 20 }}>
        <Image source={imageSource} style={{ width: 200, height: 200 }} />
        <Text>{question}</Text>
        <Picker onValueChange={(value) => onSelectAnswer(value)} style={{ height: 50, width: 150 }}>
            {options.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
            ))}
        </Picker>
    </View>
);

export default function App() {
    const [answers, setAnswers] = useState({ question1: '', question2: '', question3: '' });

    const handleSelectAnswer = (questionKey, answer) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionKey]: answer }));
    };

    const checkAnswers = () => {
        const correctAnswers = {
            question1: 'Song 1',  // Correct answer for question 1
            question2: 'Song 2',  // Correct answer for question 2
            question3: 'Song 3'   // Correct answer for question 3
        };
        let score = 0;
        let isCorrect = true;

        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                score++;
            } else {
                isCorrect = false;
            }
        });

        if (isCorrect && score === 3) {
            Alert.alert("You got all the answers correct!");
        } else {
            Alert.alert("WRONG!", "You need to restart the quiz.", [{ text: "OK", onPress: () => resetQuiz() }]);
        }
    };

    const resetQuiz = () => {
        setAnswers({ question1: 'Tyler the Creator', question2: 'To Pimp a Butterfly', question3: 'Like That' });
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

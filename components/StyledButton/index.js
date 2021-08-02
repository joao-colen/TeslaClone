import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import styles from './styles';

const StyledButton = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFF';
    const fontColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress= {() => onPress()}
            >
                <Text style={[styles.text, {color: fontColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
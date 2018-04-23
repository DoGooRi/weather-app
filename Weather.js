import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6Fb", "#005BEA"],
        title: "비가 내려요",
        subtitle: "우산 챙겨서가세요 !",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "날씨가 화창해요",
        subtitle: "자외선에 주의하세요 !",
        icon: "weather-sunny"
    },
    Thunder: {
        colors: ["#00ECBC", "#007ADF"],
        title: "천둥 번개치며 비가 내려요",
        subtitle: "비바람에 주의하세요 !",
        icon: "weather-lightning-rainy"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "하늘에 구름이 꼈어요 ",
        subtitle: "날씨가 흐릿흐릿해요",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "눈이 내려요",
        subtitle: "눈바닥에 주의하세요 !",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "",
        subtitle: "",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "안개비가 내려요",
        subtitle: "안개에 주의하세요 !",
        icon: "weather-fog"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "엷은 안개가 끼었어요",
        subtitle: "안개에 주의하세요 !",
        icon: "weather-fog"
    }
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

function Weather( { weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>

        </LinearGradient>
    )
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: '#fff',
        marginBottom: 25
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: '#fff',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: '#fff',
        marginBottom: 25
    }
})
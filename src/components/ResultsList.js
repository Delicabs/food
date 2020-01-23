import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;

    }
    return (
        <View style={styels.container}>

            <Text style={styels.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styels = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5

    },
    container: {
        marginBottom: 10
    }

})

export default withNavigation(ResultList);
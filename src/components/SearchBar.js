import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {



    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.inconstyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStylle}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStylle: {
        flex: 1,
        fontSize: 18,
    },
    inconstyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});


export default SearchBar;
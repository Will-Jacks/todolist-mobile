import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { TaskProvider } from '../components/context/TaskContext.js';
import { FormExibitionProvider } from '../components/context/FormExibitionContext.js';
import TaskHeader from '../components/TaskHeader/TaskHeader.js';
import RenderTasks from '../components/RenderTasks/RenderTasks.js';
import AppHeader from '../components/AppHeader/AppHeader.js';

export default function HomeScreen() {

    return (
        <ScrollView style={styles.scrollView}>
            <TaskProvider>

                <FormExibitionProvider>

                    <View style={styles.container}>
                        <AppHeader />
                        <TaskHeader />
                        <RenderTasks />
                        <StatusBar style="auto" />
                    </View>

                </FormExibitionProvider>

            </TaskProvider>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: "100%",
        backgroundColor: "white",
    },

    container: {
        width: "80%",
        padding: 0,
        margin: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
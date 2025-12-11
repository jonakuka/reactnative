import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class PostsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
    }

    async componentDidMount(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await response.json();
            this.setState({ posts: jsonData });
        } catch (error) {
            console.log("Error fetching posts:", error);
        }
    }

    render() {
        const { posts } = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
                        </View>
                    )}
                    contentContainerStyle={posts.length === 0 ? styles.emptyContainer : null}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f5f8',
        padding: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 0,
        // Android shadow
        elevation: 2,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0f1724',
    },
    body: {
        marginTop: 6,
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
    separator: {
        height: 12,
    },
});

export default PostsScreen;

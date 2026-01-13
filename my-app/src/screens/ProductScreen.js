import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import products from '../../data/product.json';

const { width } = Dimensions.get('window');

export default class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        // load products from JSON into state
        // `products` is imported from ../../data/product.json
        this.setState({ products: products || [], loading: false });
    }

    renderItem = ({ item }) => {
        // map filename -> require for local assets (optional)
        const localImages = {
            'iphone-x.png': require('../../assets/images/iphone-x.png'),
            'galaxy-s10.png': require('../../assets/images/galaxy-s10.png'),
            'nike-hyperchase.png': require('../../assets/images/nike-hyperchase.png'),
            'macbook-air-2020.png': require('../../assets/images/macbook-air-2020.png'),
            'sony-wh1000xm4.png': require('../../assets/images/sony-wh1000xm4.png'),
        };

        const filename = item.image ? item.image.split('/').pop() : null;
        const imageSource = filename && localImages[filename]
            ? localImages[filename]
            : { uri: item.image }; // fallback to uri (works for remote URLs)

        return (
            <View style={styles.card}>
                <Image source={imageSource} style={styles.image} resizeMode="contain" />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
                <Text style={[styles.stock, item.stock === 'Yes' ? styles.in : styles.out]}>
                    {item.stock === 'Yes' ? 'In stock' : 'Out of stock'}
                </Text>
            </View>
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <SafeAreaView style={styles.center}>
                    <ActivityIndicator size="large" />
                </SafeAreaView>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.list}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    list: { padding: 12 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    image: { width: width * 0.7, height: 160, marginBottom: 8 },
    name: { fontSize: 18, fontWeight: '700' },
    category: { fontSize: 12, color: '#666', marginBottom: 6 },
    price: { fontSize: 20, color: '#111', fontWeight: '700', marginBottom: 6 },
    description: { fontSize: 13, color: '#444', textAlign: 'center', marginBottom: 8 },
    stock: { fontSize: 12, fontWeight: '600' },
    in: { color: '#007700' },
    out: { color: '#cc0000' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
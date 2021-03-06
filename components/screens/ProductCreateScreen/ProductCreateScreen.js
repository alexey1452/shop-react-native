import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import { Button, ButtonTitle, Field } from 'components/forms/AuthorizationForm/styles';
import { Container, DescriptionField } from './styles';
import { connect } from 'react-redux';
import { createProduct } from 'store/products/actions';
import Uploader from 'components/commonBlocks/Uploader';
import CategorySelect from 'components/inputs/CategorySelect';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required!'),
    description: yup.string().required('Description is required '),
    price: yup.string().required('Price is required ')
});

const ProductCreateScreen = ({ createProduct, navigation, authUser }) => {
    const [category, setCategory] = React.useState(null);
    const [images, setImages] = React.useState([]);

    const onSubmit = async (values) => {
        const files = [];
        images.map(item => files.push('data:image/jpeg;base64,' + item.data));
        const data = {
            ...values,
            category_id: category.id,
            files: files,
            owner_id: authUser.id
        };

        await createProduct(data);
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView>
            <ScrollView vertical={true}>
                <Uploader handleImages={(files) => setImages(files)} />
                <CategorySelect onSelectCategory={(category) => setCategory(category)}/>
                <Container>
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{ title: '', description: '', price: '' }}
                        validationSchema={validationSchema}
                    >
                        {({handleSubmit, handleChange}) => (
                            <View>
                                <View>
                                    <Field
                                        name={'title'}
                                        onChangeText={handleChange('title')}
                                        placeholder={'Title'}
                                    />
                                    <Field
                                        name={'price'}
                                        onChangeText={handleChange('price')}
                                        placeholder={'Price'}
                                        keyboardType='numeric'
                                    />
                                    <DescriptionField
                                        name={'description'}
                                        onChangeText={handleChange('description')}
                                        placeholder={'Description'}
                                        multiline={true}
                                    />
                                </View>
                                <Button onPress={handleSubmit} >
                                    <ButtonTitle>Add product</ButtonTitle>
                                </Button>
                            </View>
                        )}
                    </ Formik>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
};

ProductCreateScreen.propTypes = {
    createProduct: PropTypes.func,
    navigation: PropTypes.object,
    authUser: PropTypes.object
};

const mapStateToProps = state => ({
    authUser: state.auth.user
});

export default connect(mapStateToProps, { createProduct })(ProductCreateScreen);

import React from 'react';
import { Helmet } from 'react-helmet';
import { useAddItem } from '../../store';
import { ICart } from '../../store/atoms';
import { CatalogContainer } from './style';
import CardProduct from '../../components/CardProduct'

const coursesId = [
    "How to Learn",
    "Javascript",
    "ReactJs",
    "NextJs",
    "RecoilJs",
    "ReduxJs",
    "VueJs",
    "NuxtJs",
    "Vuex",
];

const courses = coursesId.map((id, index) => ({ id, price: index + 1 }));

const Catalog:React.FC = () => {
    const addItem = useAddItem();
    return ( 
        <>
            <Helmet>
                <title>Courses catalog</title>
                <meta name="description" content="Amazing courses to improve your skills." />
            </Helmet>
            <CatalogContainer>
                {courses.map((course) => (
                    <CardProduct course={course} addItem={addItem} key={course.id} />
                ))}
            </CatalogContainer>
        </>
    )
};

export default Catalog;
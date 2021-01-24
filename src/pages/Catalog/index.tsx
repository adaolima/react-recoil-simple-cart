import React from 'react';
import { Helmet } from 'react-helmet';
import { ICart } from '../../store/atoms';

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

const courses: ICart[] = coursesId.map((id, index) => ({ id, price: index + 1 }));

const Catalog:React.FC = () => {
    const addItem = () => {};
    return ( 
        <>
            <Helmet>
                <title>Courses catalog</title>
                <meta name="description" content="Amazing courses to improve your skills." />
            </Helmet>
            <div className="catalog">
                <div className="courses">
                    {courses.map((course) => (
                        <div key={course.id} className="course">
                            <h4>
                                {course.id} / ${course.price}
                            </h4>
                            <button
                                className="button"
                                onClick={() => {}}
                            >
                                Add
                            </button>
                        </div>  
                    ))}
                </div>
            </div>
        </>
    )
};

export default Catalog;
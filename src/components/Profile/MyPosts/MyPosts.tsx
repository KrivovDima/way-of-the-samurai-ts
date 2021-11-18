import React, {ChangeEvent, LegacyRef} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {postDataType} from "../../../redux/profileReducer";
import {useFormik} from "formik";
import {validateTextarea as validate} from "../../../utils/validateFunctions";

type MyPostsPropsType = {
    postsData: Array<postDataType>
    addPost: (text: string) => void
}

const MyPosts = React.memo((props: MyPostsPropsType) => {
    const postDataIteration = props.postsData.map((post) => {
        return (
            <Post
                message={post.message}
                likeCount={post.likeCount}
            />
        )
    });

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validate,
        onSubmit: values => {
            props.addPost(values.text);
            formik.resetForm();
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
        <textarea className={styles.postText}
                  {...formik.getFieldProps('text')}/>
                {formik.touched.text && formik.errors.text ?
                    <div style={{color: "tomato"}}>{formik.errors.text}</div> : null}
                <div>
                    <button>Add post</button>
                </div>
            </form>

            {postDataIteration}
        </div>
    )
});

export default MyPosts;
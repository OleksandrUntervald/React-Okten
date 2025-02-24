import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userAction} from "../redux/slices/UserSlice.ts";
import {postAction} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const  {commentStoreSlice:{comments}, useStoreSlice: {users}, postStoreSlice: {posts}} = useAppSelector(state => state);

    useEffect(() => {
      if (!users.length) {
          dispatch(userAction.loadUsers())
      }
        if (!posts.length) {
            dispatch(postAction.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, []);



    return (
        <>ComplexPage</>
    );
};
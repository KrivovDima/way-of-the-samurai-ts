import profileReducer, {addPostActionCreator, deletePost, profilePageType, userProfileType} from "./profileReducer";

const profilePageState: profilePageType = {
  postsData: [
    {id: 1, message: 'Lorem ipsum dolor sit amet', likeCount: 11},
    {id: 2, message: 'Hello, how are you', likeCount: 20},
  ],
  userProfile: {} as userProfileType,
  status: ''
}

test('post should be added', () => {
  const newPost = 'Test text post';

  const resultState = profileReducer(profilePageState, addPostActionCreator(newPost));

  expect(resultState.postsData.length).toBe(3);
  expect(resultState.postsData[2].message).toBe('Test text post');
})

test('post should be deleted', () => {
  const deletedPostID = 1;

  const resultState = profileReducer(profilePageState, deletePost(deletedPostID));

  expect(resultState.postsData.length).toBe(1);
  expect(resultState.postsData[0].message).toBe('Hello, how are you');
})


import profileReducer, { addPost, deletePost, setUserStatus } from "./ProfileReducer";

let state = {
    posts: [
        { id: 1, post: "Да пребудет с тобой сила.", likes: 1111 },
    ],
    status: ''
};

it('length of posts should be incremented', () => {
    let action = addPost("say test is ok");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it('text of new post should be correct', () => {
    let action = addPost("say test is ok");
    let newState = profileReducer(state, action);

    expect(newState.posts[1].post).toBe("say test is ok");
});

it('after deleted length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(0);
});

it(`after deleted length of posts shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it('text of status should be correct', () => {
    let action = setUserStatus('Correct Status');
    let newState = profileReducer(state, action);

    expect(newState.status).toBe('Correct Status');
});
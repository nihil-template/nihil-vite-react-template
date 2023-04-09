const auth = {
  me: [ 'getMe', ],
  refresh: [ 'tokenRefresh', ],
};

const users = {
  all: [ 'getUsers', ],
  byId: (id: number) => [ 'getUserById', id, ],
};

const posts = {
  all: [ 'getPosts', ],
  byId: (id: number) => [ 'getPostById', id, ],
  byUserId: (userId: number) => [ 'getPostByUserId', userId, ],
};

const postImages = {
  byPostId: (postId: number) => [ 'getPostImageByPostId', postId, ],
};

const withdrawal = {
  all: [ 'getWithdawals', ],
};

export const queryKeys = {
  auth,
  users,
  posts,
  postImages,
  withdrawal,
};

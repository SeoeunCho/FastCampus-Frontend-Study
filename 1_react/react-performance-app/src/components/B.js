import React, { useCallback, useMemo, compute } from 'react'

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
})

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
})

const List = React.memo(({ posts, useCallbackFunc, useMemoFunc }) => {
  console.log('List B useMemoFunc in Rerendering');
  return (
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
})

const B = ({ message, posts }) => {
  console.log('B componenet in Rerendering');
  const useCallbackFunc = useCallback(() => {}, []);
  const useMemoFunc = useMemo(() => {}, []);

  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} useCallbackFunc={useCallbackFunc} useMemoFunc={useMemoFunc}/>
    </div>
  );
};

export default B;
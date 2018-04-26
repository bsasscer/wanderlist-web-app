import React from 'react';


function Likes () {
    return (
        <div>
            <h1>Likes</h1>
            <ul>
                {/* Cool grid showing likes here! */}
            {/* {likes.map(({ photo, id }) => (
                <li key={id}>
                    <Link to={`/likes/${id}`}>{photo}</Link>
                </li>
            ))} */}
            </ul>
            {/* <Route path={`/likes/:likeId`} component={Like}/> */}
        </div>
    )
}

export default Likes;

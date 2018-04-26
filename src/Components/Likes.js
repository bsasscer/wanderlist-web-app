import React from 'react';


function Likes ({match}) {

    return (
        <div>
            <h1>Likes</h1>
            <ul>
                {/* Cool grid showing likes here! */}
            {/* {likes.map(({ photo, id }) => (
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{photo}</Link>
                </li>
            ))} */}
            </ul>
            {/* <Route path={`${match.url}/:photoId`} component={Like}/> */}
        </div>
    )
}

export default Likes;

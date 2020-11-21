import React, { useEffect } from 'react'
import Gallery from 'react-grid-gallery';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosById } from '../store/actions/facebookActions';


const AlbumInfo = (props) => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.facebook)

    useEffect(() => {
        dispatch(getPhotosById(id))
    }, [])



    console.log('this is the photo', photos)

    return (
        <div>
            <Gallery images={photos} />
        </div>
    )
}

export default AlbumInfo

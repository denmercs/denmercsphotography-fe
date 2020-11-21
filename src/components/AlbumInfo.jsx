import React, { useEffect } from 'react'
import Gallery from 'react-grid-gallery';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosById } from '../store/actions/facebookActions';
import "./albumInfo.scss"


const AlbumInfo = (props) => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.facebook)

    useEffect(() => {
        dispatch(getPhotosById(id))
    }, [])

    return (
        <div>
            <Gallery images={photos} />
        </div>
    )
}

export default AlbumInfo

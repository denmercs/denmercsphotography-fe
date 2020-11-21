import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosById } from '../store/actions/facebookActions';


const AlbumInfo = (props) => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.facebook)
    const [album, setAlbum] = useState([])

    useEffect(() => {
        dispatch(getPhotosById(id))
        setAlbum(photos)
    }, [])

    console.log('this is the photos', album)
    return (
        <div>
            <p>testing</p>
        </div>
    )
}

export default AlbumInfo

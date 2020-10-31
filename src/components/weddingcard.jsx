import React, {useState,useEffect} from 'react';
import {useDispatch} from "react-redux"
import {getPhotosById} from "../store/actions/facebookActions"
import {Card, CardTitle} from "react-materialize";

const WeddingCard = ({album}) => {

    const {name, id} = album;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotosById(id))

    }, [])
    
    return (
        <>
            <Card header={<CardTitle image="">Card Title</CardTitle>}></Card>
        </>
    )
}

export default WeddingCard;
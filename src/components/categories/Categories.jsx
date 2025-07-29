import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

const Categories = () => {
    const {id}=useParams()
    const { data, error, loading } = useFetch(`/products/category/${id}`,{
      limit: 16,
      skip: 0,
    });
    console.log(data);

  return (
    <div>

    </div>
  )
}

export default Categories
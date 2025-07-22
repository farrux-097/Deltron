import React from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch"

const DetailProduct = () => {
  const{id} = useParams()
  return (
    <div>
      <h2>
      DetailProduct
      </h2>
    </div>
  )
}

export default DetailProduct
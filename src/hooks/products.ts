import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IPproduct } from './../models';

export function useProducts() {
    const [products, setProducts] = useState<IPproduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setErorr] = useState('');

    const addProduct = (product: IPproduct) => {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setErorr('')
            setLoading(true)
            const respons = await axios.get<IPproduct[]>('https://fakestoreapi.com/products?limit-5')
            setProducts(respons.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setErorr(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    return { products, error, loading, addProduct }
}
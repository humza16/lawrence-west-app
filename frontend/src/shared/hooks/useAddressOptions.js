import { useCallback, useRef, useState } from 'react';
import axios from 'axios'


const filterAddressOptions = (states, search) =>
    (states.filter((state) => state.name.toLowerCase().includes(search.toLowerCase()))) ?? []

const useAddressOptions = (getData, searchParams) => {
    const [pageKey, setPageKey] = useState('');
    const loadedData = useRef([]);


    const loadOptions = useCallback(
        async (search, prevData) => {
            if (search) {
                // implement searching here
                return {
                    options: filterAddressOptions(loadedData.current, search),
                    hasMore: false
                };
            }

            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            // const result = getData({ pageSize: 25, pageKey, ...searchParams }).unwrap().then((result) => {
            //     return result.data
            // }).catch(error => console.log(error, "error"))
            const options = result.data
            if (result !== null) {
                setPageKey("1");
                // setPageKey(result.nextPageKey); // Update the nextPageKey state
                if (loadedData.current && options) {
                    loadedData.current = [...loadedData.current, ...options];
                }

                return {
                    options: options,
                    hasMore: Boolean(result?.nextPageKey),
                    nextPageKey: result?.nextPageKey,
                    additional: {
                        nextPageKey: result?.nextPageKey
                    }
                };
            }
            return {
                options: [],
                hasMore: false
            };
        }, [loadedData, searchParams]);

    return {
        loadOptions,
        pageKey,
        loadedData,
    }

}

export default useAddressOptions;
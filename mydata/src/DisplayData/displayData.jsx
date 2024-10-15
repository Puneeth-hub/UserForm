import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import './displayData.css';

const DataDisplay = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://userform-server.onrender.com/api/items'); 
                setItems(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const totalPages = Math.ceil(items.length/itemsPerPage); 
    

    const indexOfLastItem = currentPage * itemsPerPage; 
    
    const indexOfFirstItm = indexOfLastItem - itemsPerPage; 
    
    const cuurentItems = items.slice(indexOfFirstItm, indexOfLastItem); 
    
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            <div>
            {cuurentItems.map((item) => (
                <div key={item._id} className='item'>
                    <p>Name: {item.name}</p> 
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Description: {item.description}</p>
                </div>
            ))}
            </div>
            <div className='pagination'>
                {Array.from({length: totalPages}, (_, index)=>(
                    <button key={index+1} onClick={()=> handlePageChange(index+1)} disabled={currentPage === index +1}>
                        {index + 1}
                    </button>
                ))}

            </div>
        </div>
    );
};

export default DataDisplay;
